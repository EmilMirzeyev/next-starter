import { cn } from "@/core/utils/cn";
import { DownChevronSVG } from "@public/vectors";
import { ChangeLanguageVM } from "./change_language.vm";
import { ChangeLanguageEnum } from "@/data/enum/change_language.enum";

const ChangeLanguageFactory = () => {
    const {
        collapse,
        tabRefs,
        isOpen,
        setIsOpen,
        lang,
        hrefs,
        filteredHrefs,
        locales,
        filteredLocales,
        changeLanguage,
        indicatorStyle,
    } = ChangeLanguageVM();

    const renderChangeLanguage = {
        [ChangeLanguageEnum.TAB]: (
            <div className="flex overflow-hidden relative">
                <div className="container">
                    <div className="flex justify-around w-full border-b border-gray-200 transition-all ease-in-out relative">
                        <span
                            className="absolute bottom-0 h-0.5 bg-brand-500 transition-all duration-300"
                            style={indicatorStyle}
                        />
                        {locales.map((locale, i) => (
                            <a
                                key={i}
                                href={hrefs[i]}
                                ref={(el) => {
                                    tabRefs.current[i] = el;
                                }}
                                className={cn(
                                    "relative pb-2 w-fit p-3 py-4 border-b-2 border-transparent px-3",
                                    lang === locale
                                        ? "text-gray-900 text-14px700"
                                        : "text-gray-500 text-14px500"
                                )}
                                onClick={() => {
                                    changeLanguage(locale);

                                }}
                            >
                                {locale.toUpperCase()}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        ),

        [ChangeLanguageEnum.DROPDOWN]: (
            <div
                ref={collapse}
                onClick={() => setIsOpen((prev) => !prev)}
                className="z-50"
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
                            className={cn("duration-500", isOpen ? "rotate-180" : "")}
                        />
                    </div>
                    <div
                        className={cn(
                            "absolute top-14 -left-1 bg-white text-gray-800 border border-gray-300 overflow-hidden p-4 rounded-xl duration-500 ease-in-out",
                            isOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                        )}
                    >
                        {filteredLocales.map((locale, i) => (
                            <a
                                key={i}
                                href={filteredHrefs[i]}
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
            </div>
        ),
    };

    return { renderChangeLanguage };
};

export default ChangeLanguageFactory;
