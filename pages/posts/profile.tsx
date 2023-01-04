import Layout from "components/layout";
import Head from "next/head";
import { name } from "../../lib/constants";
import Image from "next/image";
import ProfileDetail from "components/profile-detail";
import Meta from "components/meta";

const Profile = () => {
  return (
    <Layout isHome={false}>
      <Meta title={`${name}のプロフィール`} type="profile"></Meta>
      <div className="my-6">
        <div className="flex justify-center">
          <Image
            priority
            src="/images/yajium.png"
            className="w-34"
            height={120}
            width={120}
            alt="yajiuma_icon"
          />
        </div>
        <div className="mx-8 ">
          <p className="mt-1 text-2xl font-semibold ">{name}</p>
          <p className="my-2 text-xl font-semibold">プロフィール</p>
        </div>
      </div>
      <ProfileDetail />
    </Layout>
  );
};

export default Profile;
