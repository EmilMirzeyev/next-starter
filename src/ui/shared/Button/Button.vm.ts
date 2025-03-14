import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import React, { useCallback } from "react";

export const ButtonVM = () => {
  const variants: Record<ButtonVariantsEnum, string> = {
    [ButtonVariantsEnum.FILLED]:
      "bg-brand-600 text-18px600 text-white border border-transparent hover:brightness-125 disabled:bg-gray-100 disabled:text-gray-400 disabled:hover:brightness-100 disabled:cursor-not-allowed duration-300 transition-all ease-in-out",
    [ButtonVariantsEnum.OUTLINED]:
      "text-gray-800 border border-gray-300 [&_.spinner]:border-gray-800 hover:bg-opacity-15 hover:bg-gray-100 transition-all ease-in-out",
    [ButtonVariantsEnum.EMPTY]:
      "text-gray-950 text-18px600 border border-transparent bg-white [&>span]:bg-gray-300/50 [&_.spinner]:border-gray-800 hover:brightness-[0.97] duration-300 transition-all ease-in-out",
    [ButtonVariantsEnum.BLACK]:
      "bg-gray-950 text-18px600 text-white border border-transparent hover:brightness-[1.7] disabled:bg-gray-100 disabled:text-gray-400 disabled:hover:brightness-100 disabled:cursor-not-allowed duration-300 transition-all ease-in-out",
  };

  const rippleEffect = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const circle = document.createElement("span");
    const diameter = Math.max(
      e.currentTarget.clientWidth,
      e.currentTarget.clientHeight
    );

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    e.currentTarget.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600);
  }, []);

  return { variants, rippleEffect };
};
