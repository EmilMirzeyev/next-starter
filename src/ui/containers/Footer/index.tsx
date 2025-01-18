import SubscribeForm from "@/ui/features/SubscribeForm";
import { LogoV1SVG } from "@public/vectors";
import Link from "next/link";
import ScrollToTopButton from "./scroll_to_top_button";

const Footer = () => {
  return (
    <footer
      aria-label="Site Footer"
      className="bg-brand-900 pt-[196px] mt-60 pb-10 bg-[linear-gradient(to_right,_#2D0002_1%,_#59070B_30%,_#2D0002_60%,_#59070B_90%)] "
    >
      <div className="container relative">
        <section
          aria-labelledby="subscribe-heading"
          className="w-full rounded-[32px] absolute bottom-[150px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border bg-brand-900 p-16 bg-[linear-gradient(to_right,_#2D0002_1%,_#59070B_30%,_#2D0002_60%,_#59070B_90%)]"
        >
          <div className="flex justify-between gap-12">
            <div className="w-1/2 flex flex-col gap-3">
              <h2 className="text-36px700 text-white">
                Yeniliklərdən xəbərdar olmaq üçün abonə olun
              </h2>
              <h3 className="text-14px600 text-white border rounded-[53px] px-4 py-2 w-fit">
                Yenilik və xəbərlərdən daima məlumatlı olun
              </h3>
            </div>
            <div className="w-1/2 flex flex-col gap-4 justify-center">
              <p className="16px400 text-white">
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
            <div className="border border-[rgba(255,255,255,0.4)] rounded-[53px] px-4 py-2 w-fit  bg-[rgba(255,255,255,0.1)]">
              <h3 className="text-14px600 text-[rgba(255,255,255,0.8)] ">
                “Car Buy” B2B avtomobil alış-satış sistemi
              </h3>
            </div>
          </section>
          <nav
            aria-label="Footer Navigation"
            className="flex justify-between items-center"
          >
            <Link
              href="#hero"
              className="max-w-[30px]"
              aria-label="Back to Home"
            >
              <LogoV1SVG aria-hidden="true" />
            </Link>
            <ul className="text-white text-14px700 flex gap-6">
              <li>
                <Link href="#about" aria-label="Why Choose Us">
                  Niyə biz
                </Link>
              </li>
              <li>
                <Link href="#advantages" aria-label="Our Updates">
                  Yeniliklərimiz
                </Link>
              </li>
              <li>
                <Link href="#statistics" aria-label="Statistics">
                  Statistika
                </Link>
              </li>
              <li>
                <Link href="#partners" aria-label="Our Partners">
                  Tərəfdaşlarımız
                </Link>
              </li>
              <li>
                <Link href="#faq" aria-label="Frequently Asked Questions">
                  FAQ
                </Link>
              </li>
            </ul>
            <ScrollToTopButton />
          </nav>
          <div className="border-[#5e3d3e] border" />
          <section
            aria-labelledby="footer-metadata-heading"
            className="text-[rgba(255,255,255,0.6)] text-14px500 flex items-center justify-between"
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
