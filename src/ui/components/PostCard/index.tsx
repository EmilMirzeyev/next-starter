"use client";
import React from "react";
import { PostCardType } from "./PostCard.type";
import { UpChevronSVG, XSVG } from "@public/vectors";
import Link from "next/link";
import Button from "@/ui/shared/Button";

const PostCard = ({
  id,
  title,
  description,
  deleteHandler,
}: PostCardType) => {

  return (
    <div className="relative flex flex-col gap-4 p-4 border rounded overflow-hidden">
      <h2 className="font-semibold pr-4">{title}</h2>
      <p>{description}</p>
      <div className="flex items-center gap-4 mt-auto ml-auto">
        <Link href={`/posts/${id}`} aria-label={title} className="w-min">
          <UpChevronSVG className="w-6 h-6 text-red rotate-90" />
        </Link>
      </div>
      <Button
        className="absolute p-2 w-10 h-10 top-0 right-0 bg-red-500 text-white"
        onClick={deleteHandler}
      >
        <XSVG />
      </Button>
    </div>
  );
};

export default PostCard;
