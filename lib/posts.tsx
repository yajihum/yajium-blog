import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { createElement, Fragment } from "react";
const postsDirectory = path.join(process.cwd(), "posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

const listDirectoryFiles = () =>
  fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .flatMap((dirent) =>
      dirent.isFile()
        ? [`${dirent.name}`]
        : listFilesRecursively(`${dirent.name}`)
    );

const listFilesRecursively = (dir: string): string[] =>
  fs
    .readdirSync(path.join(postsDirectory, dir), { withFileTypes: true })
    .flatMap((dirent) =>
      dirent.isFile()
        ? [`${dir}/${dirent.name}`]
        : listFilesRecursively(`${dir}/${dirent.name}`)
    );

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.toString().split(",").join("/").replace(/\.md$/, "");
  const fileName = `${realSlug}.md`;
  const fullPath = path.join(postsDirectory, fileName, "");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = listDirectoryFiles();
  const posts = slugs
    .filter((slug) => slug.match(/\.md$/))
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return { postArray: posts };
}

export function getNewPosts(fields: string[] = []) {
  const posts = getAllPosts(fields);

  // トップページに出す最大の記事数
  const limitNum: number = 5;

  if (posts.postArray.length < limitNum) {
    return { postArray: posts.postArray, postsLength: posts.postArray.length };
  }
  return {
    postArray: posts.postArray.slice(0, limitNum),
    postsLength: posts.postArray.length,
  };
}
