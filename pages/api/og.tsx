import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { name } from "../../lib/constants";

export const config = {
  runtime: "experimental-edge",
};

const font = fetch(
  new URL("../../assets/subset-ZenkakkuGothicNew-Reagular.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function (req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const fontData = await font;
  const title = searchParams.get("title")?.slice(0, 100) ?? `ちいさなうみ`;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div tw="flex flex-col">
          <span tw="font-black text-5xl">{title}</span>
          <span tw="text-xl text-gray-500 mt-6">ちいさなうみ 🐳</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: "Zen Kaku Gothic New",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
