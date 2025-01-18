// import Link from "next/link";
import ChangeLanguage from "@/ui/components/ChangeLanguage";
import { ArrowRightSVG, LogoV1SVG } from "@public/vectors";
import Button from "@/ui/shared/Button";
import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";
import { Link as NILink } from "@/i18n/routing";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container justify-between flex items-center py-8 text-white absolute top-0 z-20 w-full left-1/2 transform -translate-x-1/2">
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
    </div>
  );
};

export default Header;
