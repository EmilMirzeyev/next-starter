import PostRepository from "@/core/repositories/PostRepository/post.repository";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

export const generateMetadata = async ({
  params,
}: {
  params: { postId: string };
}): Promise<Metadata> => {
  const { data, error, isError } = await PostRepository.getPostById(
    Number(params.postId)
  );

  if (isError) {
    return Promise.reject(error);
  }
  return {
    title: {
      absolute: data.title,
    },
    description: data.description,
    // openGraph: {
    //   images: [
    //     {
    //       url: data.image,
    //     },
    //   ],
    // },
  };
};

const PostDetail = async ({ params }: { params: { postId: string } }) => {
  const { data, error, isError } = await PostRepository.getPostById(
    Number(params.postId)
  );

  if (isError) {
    return notFound();
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <h2>{data.description}</h2>
    </div>
  );
};

export default PostDetail;
