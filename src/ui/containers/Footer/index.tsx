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
    <footer aria-label="Site Footer" className=" pt-[196px] mt-60 pb-10">
      <div className="container relative">
        <section
          aria-labelledby="subscribe-heading"
          className="container w-full rounded-[32px] absolute bottom-[150px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border bg-brand-900 p-16 bg-[linear-gradient(to_right,_#2D0002_1%,_#59070B_30%,_#2D0002_60%,_#59070B_90%)]"
        >
          <div className="flex justify-between gap-x-12">
            <div className="w-1/2 flex flex-col gap-y-3">
              <h2 className="text-36px700 text-white">
                Yeniliklərdən xəbərdar olmaq üçün abonə olun
              </h2>
              <h3 className="text-14px600 text-[#d4c0c1] border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] rounded-[53px] px-4 py-2 w-fit">
                Yenilik və xəbərlərdən daima məlumatlı olun
              </h3>
            </div>
            <div className="w-1/2 flex flex-col gap-4 justify-center">
              <p className="16px400 text-[#d4c0c1]">
                Daxil etdiyiniz email adresinizə saytımızda olan yeniliklər və
                sistem daxilində olan bildirişləriniz yönləndiriləcək
              </p>
              <SubscribeForm />
            </div>
          </div>
        </section>
        <div className="flex flex-col gap-10">
          <section
            aria-labelledby="branding-heading"
            className="flex justify-center"
          >
            <h2 id="branding-heading" className="sr-only">
              Branding Information
            </h2>
            <div className="border border-gray-200 rounded-[53px] px-4 py-2 w-fit bg-gray-50">
              <h3 className="text-14px600 text-black">
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
              className="max-w-[30px]"
              aria-label="Back to Home"
            >
              <LogoV1SVG aria-hidden="true" />
            </Link>
            <div className="flex items-center justify-between gap-x-32">
              <ul className="text-gray-800 text-14px700 flex gap-6">
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
            <div className="absolute -right-28">
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
