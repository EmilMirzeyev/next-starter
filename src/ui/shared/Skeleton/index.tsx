import { cn } from "@/core/utils/cn";
import { SkeletonType } from "./skeleton.type";

const Shimmer = ({
  className = "size-full min-h-[16px] ",
}: SkeletonType) => {
  return (
    <div
      className={cn(
        "rounded animate-pulse bg-gradient-to-r from-gray/70 to-gray/50 bg-gray-200",
        className
      )}
    ></div>
  );
};

export default Shimmer;
