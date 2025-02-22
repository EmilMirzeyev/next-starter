import SubscribeForm from "@/ui/features/SubscribeForm";
import {
  FacebookSVG,
  InstagramSVG,
  LogoV1SVG,
  TelegramSVG,
  TikTokSVG,
} from "@public/vectors";
import Link from "next/link";
import ScrollToTopButton from "./scroll_to_top_button";

const Footer = () => {
  const navLinks = [
    { href: "#about", label: "Niyə biz" },
    { href: "#advantages", label: "Üstünlüklərimiz" },
    { href: "#statistics", label: "Statistika" },
    { href: "#partners", label: "Tərəfdaşlarımız" },
    { href: "#faq", label: "FAQ" },
  ];

  const socialIcons = [
    { Icon: FacebookSVG, label: "Facebook" },
    { Icon: TelegramSVG, label: "Telegram" },
    { Icon: InstagramSVG, label: "Instagram" },
    { Icon: TikTokSVG, label: "TikTok" },
  ];

  return (
    <footer
      aria-label="Site Footer"
      className="mt-[120px] pb-10 tablet:mt-24 mobile:mt-16 mobile:pb-6"
    >
      <div className="container flex flex-col gap-y-16">
        <section
          aria-labelledby="subscribe-heading"
          className="container w-full rounded-[32px] border bg-brand-900 p-16 bg-[linear-gradient(to_right,_#2D0002_1%,_#59070B_30%,_#2D0002_60%,_#59070B_90%)] mobile:p-8"
        >
          <div className="flex justify-between gap-x-12 tablet:flex-col tablet:gap-y-12 mobile:flex-col mobile:gap-y-6">
            <div className="w-1/2 flex flex-col gap-y-3 tablet:w-full mobile:w-full">
              <h2 className="text-36px700 text-white tablet:text-center tablet:text-36px600 mobile:text-24px600 mobile:text-center">
                Yeniliklərdən xəbərdar olmaq üçün abonə olun
              </h2>
              <h3
                className="text-14px600 text-[rgba(255,255,255,0.7)] border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] rounded-[53px] px-4 py-2 w-fit
              tablet:text-center tablet:w-full mobile:w-full mobile:text-center"
              >
                Yenilik və xəbərlərdən daima məlumatlı olun
              </h3>
            </div>
            <div className="w-1/2 flex flex-col gap-y-4 justify-center tablet:w-full mobile:w-full">
              <p className="16px400 text-[rgba(255,255,255,0.6)]">
                Daxil etdiyiniz email adresinizə saytımızda olan yeniliklər və
                sistem daxilində olan bildirişləriniz yönləndiriləcək
              </p>
              <SubscribeForm />
            </div>
          </div>
        </section>
        <div className="flex flex-col gap-y-10 mobile:gap-y-6">
          <section
            aria-labelledby="branding-heading"
            className="flex justify-center tablet:flex-col tablet:gap-y-6 tablet:items-center mobile:flex-col mobile:gap-y-6 mobile:items-center"
          >
            <h2 id="branding-heading" className="sr-only">
              Branding Information
            </h2>
            <Link
              href="#hero"
              className="max-w-[30px] hidden tablet:block tablet:max-w-full mobile:block mobile:max-w-full"
              aria-label="Back to Home"
            >
              <LogoV1SVG aria-hidden="true" />
            </Link>
            <div className="border border-gray-200 rounded-[53px] px-4 py-2 w-fit bg-gray-50 mobile:w-full">
              <h3 className="text-14px600 text-black mobile:text-center">
                “Car Buy” B2B avtomobil alış-satış sistemi
              </h3>
            </div>
          </section>
          <nav
            aria-label="Footer Navigation"
            className="flex justify-between items-center relative"
          >
            <Link
              href="#hero"
              className="max-w-[30px] tablet:hidden mobile:hidden"
              aria-label="Back to Home"
            >
              <LogoV1SVG aria-hidden="true" />
            </Link>
            <div className="flex items-center justify-between gap-x-32 tablet:flex-col tablet:items-center tablet:w-full tablet:gap-y-12 mobile:flex-col mobile:items-start mobile:gap-y-12">
              <ul className="text-gray-800 text-14px700 flex gap-6 mobile:grid mobile:grid-cols-2 mobile:p-2">
                {navLinks.map(({ href, label }) => (
                  <li key={href} className="group">
                    <Link href={href} className="relative">
                      {label}
                      <span className="absolute left-0 -bottom-[2.5px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex items-center gap-x-2">
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
            <div className="absolute -right-28 tablet:right-0 tablet:bottom-0 mobile:right-0 mobile:bottom-0">
              <ScrollToTopButton />
            </div>
          </nav>
          <div className="bg-gray-200 h-[1px] w-full" />
          <section
            aria-labelledby="footer-metadata-heading"
            className="text-[#8f8f8f] text-14px500 flex items-center justify-between"
          >
            <h2 id="footer-metadata-heading" className="sr-only">
              Footer Metadata
            </h2>
            <p>&copy; 2025 All rights reserved</p>
            <p>Məxfilik siyasəti</p>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
