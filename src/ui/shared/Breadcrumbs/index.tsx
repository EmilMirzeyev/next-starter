import { Breadcrumbs as BreadcrumbsMUI } from "@mui/material";
import { MouseEvent } from "react";
import { BreadcrumbsType } from "./breadcrumbs.type";
import Link from "next/link";
import { HomeSVG } from "@public/vectors";
import { cn } from "@/core/utils/cn";

const Breadcrumbs = ({ homeLink, crumbs }: BreadcrumbsType) => {
  return (
    <BreadcrumbsMUI
      className="py-3"
      aria-label="breadcrumb"
      separator={
        <span className="bg-gray-300 h-5 rotate-[25deg] w-[1.5px] rounded-md mx-2" />
      }
    >
      <Link
        key="home"
        href={homeLink || "/"}
        className="group size-7 flex rounded-md hover:bg-brand-50 justify-center items-center transition-all ease-in-out"
      >
        <HomeSVG className="group-hover:text-brand-700" />
      </Link>
      {crumbs.map((crumb, index) => (
        <Link
          key={crumb.id}
          className={cn(
            "py-1 px-2 rounded-md transtion-all ease-in-out",
            !crumb.link ? "cursor-default" : "",
            index === crumbs.length - 1
              ? "text-brand-700 text-14px600 bg-brand-50"
              : "text-gray-600 text-14px500 hover:text-brand-700 hover:bg-brand-50"
          )}
          href={crumb.link ?? ""}
          onClick={(e: MouseEvent<HTMLAnchorElement>) =>
            !crumb.link && e.preventDefault()
          }
        >
          {crumb.name}
        </Link>
      ))}
    </BreadcrumbsMUI>
  );
};

export default Breadcrumbs;
