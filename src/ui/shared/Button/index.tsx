"use client";
import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import { ButtonType } from "./button.type";
import { ButtonVM } from "./button.vm";
import { cn } from "@/core/utils/cn";

const Button = ({
  variant = ButtonVariantsEnum.FILLED,
  className,
  isLoading,
  disabled,
  children,
  ...props
}: ButtonType) => {
  const { variants, rippleEffect } = ButtonVM();

  return (
    <button
      {...props}
      disabled={isLoading || disabled}
      onMouseDown={rippleEffect}
      className={cn(
        "relative flex items-center justify-center h-14 z-10 rounded px-6 overflow-hidden [&>span]:absolute [&>span]:z-50 [&>span]:animate-ripple [&>span]:inline-block [&>span]:bg-white/50 [&>span]:-translate-y-1/2 [&>span]:-translate-x-1/2 [&>span]:pointer-events-none [&>span]:rounded-full [&>span]:scale-0",
        isLoading && "disabled:cursor-wait",
        variants[variant],
        className
      )}
    >
      {isLoading ? (
        <div className="relative h-full aspect-square p-1">
          <div className="w-full h-full border-light opacity-20 border-2 rounded-full"></div>
          <div className="border-light opacity-70 border-t-2 animate-spin rounded-full absolute inset-1"></div>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
