"use client";
import { cn } from "@/core/utils/cn";
import { ChangeLanguageVM } from "./change_language.vm";
import { DownChevronSVG } from "@public/vectors";

const ChangeLanguage = () => {
  const {
    collapse,
    isOpen,
    setIsOpen,
    lang,
    hrefs,
    locales,
    changeLanguage
  } = ChangeLanguageVM();

  return (
    <div
      ref={collapse}
      onClick={() => setIsOpen((prev) => !prev)}
      className="z-30"
      role="button"
    >
      <div
        className={cn(
          "relative max-h-12 flex items-center bg-gray-100 hover:border-gray-400  text-16px600 py-3 pl-[18px] pr-3 rounded-3xl text-gray-950 duration-300"
        )}
      >
        <div className="flex gap-1.5 ">
          <h2 className="text-16px600">{String(lang).toLocaleUpperCase()}</h2>
          <DownChevronSVG
            stroke="#fff"
            className={cn("duration-500", isOpen ? "rotate-180" : "")}
          />
        </div>
        <div
          className={cn(
            "absolute top-14 -left-1 bg-white text-gray-800 border border-gray-300 overflow-hidden p-4 rounded-xl duration-500 ease-in-out",
            isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          {locales.map((locale, i) => (
            <a
            key={i}
            href={hrefs[i]}
              className={cn(
                "py-3 px-5 block text-16px500 hover:bg-gray-100 rounded-md duration-300 ease-in-out",
                locale === lang && "bg-gray-100 rounded-md"
              )}
              onClick={() => changeLanguage(locale)}
            >
              {locale.toLocaleUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </div >
  );
};

export default ChangeLanguage;
