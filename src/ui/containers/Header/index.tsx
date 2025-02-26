"use client";
import ChangeLanguage from "@/ui/components/ChangeLanguage";
import {
  ArrowRightSVG,
  BurgerMenuSVG,
  HeroSVG,
  LogoV1SVG,
  FacebookSVG,
  InstagramSVG,
  TelegramSVG,
  TikTokSVG,
  XCloseSVG,
} from "@public/vectors";
import { useTranslations } from "next-intl";
import { Link as NILink } from "@/i18n/routing";
import Button from "@/ui/shared/Button";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/core/utils/cn";
import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import { ChangeLanguageEnum } from "@/data/enum/change_language.enum";

const Header = () => {
  const t = useTranslations("HomePage");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // useEffect(() => {
  //   if (isMobileMenuOpen) {
  //     document.body.style.overflow = "hidden";
  //     document.documentElement.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //     document.documentElement.style.overflow = "";
  //   }
  // }, [isMobileMenuOpen]);

  const navItems = [
    { href: "#about", label: t("navigation.about") },
    { href: "#advantages", label: t("navigation.advantages") },
    { href: "#statistics", label: t("navigation.statistics") },
    { href: "#partners", label: t("navigation.partners") },
    { href: "#faq", label: t("navigation.faq") },
  ];

  const socialIcons = [
    { Icon: FacebookSVG, label: "Facebook" },
    { Icon: TelegramSVG, label: "Telegram" },
    { Icon: InstagramSVG, label: "Instagram" },
    { Icon: TikTokSVG, label: "TikTok" },
  ];

  return (
    <header
      className={cn(
        "container justify-between flex items-center py-8 text-white absolute top-0 z-20 w-full left-1/2 transform -translate-x-1/2 transition-colors duration-500",
        isMobileMenuOpen ? "bg-white text-black" : "bg-transparent"
      )}
    >
      <div className="flex gap-x-16 items-center">
        <Link href="/" className="max-w-[153px]" aria-label="Homepage">
          <LogoV1SVG />
        </Link>
        <nav
          aria-label="Main Navigation"
          className="laptop:hidden tablet:hidden mobile:hidden"
        >
          <ul className="flex gap-x-6 text-14px700">
            {navItems.map(({ href, label }) => (
              <li key={href} className="group relative text-gray-800">
                <Link href={href}>
                  {label}
                  <span className="absolute left-0 -bottom-[2.5px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-x-4 mobile:gap-x-2.5">
        <NILink href="/signin">
          <Button
            aria-label="Login"
            className="text-16px600 pl-[18px] pr-4 py-3 rounded-3xl flex items-center gap-1.5 h-12 mobile:size-12 shrink-0"
          >
            <div className="mobile:hidden">Daxil ol</div>
            <div>
              <ArrowRightSVG stroke="#000" className="w-5" />
            </div>
          </Button>
        </NILink>
        <div className="mobile:hidden">
          <ChangeLanguage />
        </div>
        <button
          className="bg-gray-950 size-12 hidden justify-center items-center rounded-full 
          laptop:flex tablet:flex mobile:flex"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <XCloseSVG className="text-white size-5" />
          ) : (
            <BurgerMenuSVG className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navbar */}
      <div
        className={cn(
          "fixed hidden top-28 z-50 right-0 w-full h-screen bg-white text-black transform transition-transform duration-500 ease-in-out px-4 overflow-hidden laptop:block tablet:block mobile:block",
          isMobileMenuOpen
            ? "translate-x-0 overflow-hidden"
            : "translate-x-full"
        )}
      >
        <div
          className={cn(
            "flex flex-col justify-between gap-y-6 h-full overflow-y-auto transform transition-opacity duration-500 ease-in-out",
            isMobileMenuOpen ? "opacity-100 delay-200" : "opacity-0"
          )}
        >
          <div className="flex flex-col gap-y-8 tablet:px-12">
            <h1 className="text-brand-700 text-36px700 px-4 tablet:text-72px700">
              Sürətli və rahat interfeys
            </h1>
            <div className="laptop:hidden tablet:hidden">
              <ChangeLanguage variant={ChangeLanguageEnum.TAB} />
            </div>
            <ul className="space-y-6 px-8 py-2 tablet:px-4">
              {navItems.map(({ href, label }) => (
                <li key={href} className="text-gray-800 text-16px700">
                  <Link href={href} onClick={() => setIsMobileMenuOpen(false)}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-x-4 mt-12 tablet:justify-center px-4 laptop:px-8 mobile:justify-center mobile:px-8 smallMobile:flex-col gap-y-4">
              <div className="relative w-full">
                <HeroSVG className="absolute -left-8 -top-8 text-brand-500 mobile:-left-8 mobile:-top-7" />
                <Button
                  aria-label="Log in"
                  className="rounded-[28px] h-12 flex items-center gap-2.5
                  w-full mobile:text-16px600 mobile:gap-1.5 mobile:px-[18px] mobile:h-12"
                >
                  Daxil ol
                  <div>
                    <ArrowRightSVG className="mobile:size-5" />
                  </div>
                </Button>
              </div>
              <Link href="#about" className="w-full">
                <Button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Learn more about us"
                  variant={ButtonVariantsEnum.EMPTY}
                  className="rounded-[28px] bg-gray-100 flex items-center h-12 gap-2.5 laptop:w-full tablet:w-full mobile:w-full mobile:text-16px600 mobile:h-12 mobile:gap-1.5 mobile:px-[18px]"
                >
                  Haqqımızda
                  <div>
                    <ArrowRightSVG
                      stroke="#fff"
                      className="rotate-90 mobile:size-5"
                    />
                  </div>
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <ul className="flex justify-center items-center gap-x-2 mb-32">
              {socialIcons.map(({ Icon, label }) => (
                <li
                  key={label}
                  className="group p-2 rounded-xl hover:bg-brand-50 size-12 flex items-center justify-center duration-200 cursor-pointer"
                >
                  <Icon
                    className="fill-[#667085] group-hover:fill-[#EC1C24]"
                    aria-label={label}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Prevent scrolling when menu is open */}
      <style>
        {isMobileMenuOpen
          ? `html { overflow: hidden; height: 100%; }`
          : `html { overflow: auto; }`}
      </style>
    </header>
  );
};

export default Header;

//First version
{
  /* <div className="container justify-between flex items-center py-8 text-white absolute top-0 z-20 w-full left-1/2 transform -translate-x-1/2">
<div className="flex">
  <Link href="/" className="max-w-[153px]" aria-label="Homepage">
    <LogoV1SVG />
  </Link>
  <nav aria-label="Main Navigation">
    <ul className="flex items-center gap-6 text-14px700">
      <li>
        <Link href="#about">Niyə biz</Link>
      </li>
      <li>
        <Link href="#advantages">Yeniliklərimiz</Link>
      </li>
      <li>
        <Link href="#statistics">Statistika</Link>
      </li>
      <li>
        <Link href="#partners">Tərəfdaşlarımız</Link>
      </li>
      <li>
        <Link href="#faq">FAQ</Link>
      </li>
    </ul>
  </nav>
</div>
<div className="flex items-center gap-x-4">
  <NILink href='/about'>
    <Button
      aria-label="Login"
      variant={ButtonVariantsEnum.EMPTY}
      className="text-16px600 pl-[18px] pr-4 py-3 rounded-[24px] flex items-center gap-1.5 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] duration-300 h-12"
    >
      Daxil ol
      <ArrowRightSVG stroke="#000" className="w-5" />
    </Button>
  </NILink>
  <ChangeLanguage />
</div>
</div> */
}
