import PostRepository from "@/core/repositories/PostRepository/post.repository";
import ClientToast from "@/ui/shared/ClientToast";
import PostList from "@/ui/containers/PostList";
import React, { Suspense } from "react";
import { Metadata } from "next";
import { getDictionary } from "@/core/helpers/getDictionary";
import { LocaleType } from "@/core/lib/i18n.config";

export const metadata: Metadata = {
  title: "Posts",
};

const Posts = async ({params}: {params: {lang: LocaleType}}) => {
  const { data, error, isError } = await PostRepository.getPosts("?_limit=20");
  const t = await getDictionary(params.lang);

  return (
    <div className="container">
      <p>{t.add_posts}</p>
      {isError && <ClientToast error={error.message} />}
      <PostList posts={data || []} />
    </div>
  );
};

export default Posts;
