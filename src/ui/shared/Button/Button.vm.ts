import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import React, { useCallback } from "react";

export const ButtonVM = () => {
  const variants: Record<ButtonVariantsEnum, string> = {
    [ButtonVariantsEnum.FILLED]:
      "bg-blue-600 text-white border border-transparent hover:brightness-125 disabled:bg-gray-300 disabled:hover:brightness-100",
    [ButtonVariantsEnum.OUTLINED]:
      "text-gray-800 border border-gray-300 [&_.spinner]:border-gray-800",
  };

  const rippleEffect = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    let rect = e.currentTarget.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    let circle = document.createElement("span");
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
