import { LogoV1SVG, PlusSVG, Wallet2SVG, WalletSVG } from "@public/vectors";
import Button from "@/ui/shared/Button";
import Link from "next/link";
import DashboardBreadcumbs from "@/ui/components/DashboardBreadcrumbs";
import Select from "@/ui/shared/Select";
import Image from "next/image";
import ProfileImage from "@public/images/profile.png";
import HeaderProfile from "@/ui/containers/Header/Profile";
import ChangeLanguage from "@/ui/components/ChangeLanguage";
import { ButtonVariantsEnum } from "@/data/enum/button_variants.enum";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const profileData = [
    {
      id: 1,
      name: "Digər elanlara bax",
    },
    {
      id: 2,
      name: "Şəxsi kabinet",
    },
    {
      id: 3,
      name: "Abunəliklər",
    },
    {
      id: 4,
      name: "Balans",
    },
    {
      id: 5,
      name: "Tənzimləmələr",
    },
    {
      id: 6,
      name: "Hesabdan çıxış",
    },
  ];

  return (
    <div>
      <div className="container flex justify-between item-center mt-6 mb-4">
        <Link href="/dashboard">
          <LogoV1SVG />
        </Link>
        <div className="flex gap-x-4">
          <ChangeLanguage />
          <div className="border border-gray-200 bg-white p-3 rounded-3xl flex gap-x-1.5 items-center">
            <WalletSVG />
            <h2 className="text-black text-16px600 ">0 AZN</h2>
          </div>
          <HeaderProfile />
        </div>
      </div>
      <div className="bg-gray-100 py-3">
        <nav className="flex items-center justify-between container text-14px500">
          <ul className="flex items-center gap-x-8">
            <li className="group">
              <Link href={""} className="relative">
                Axtar
                <span className="absolute left-0 -bottom-[2.5px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              </Link>
            </li>
            <li className="group">
              <Link href={""} className="relative">
                Avtosalonlar
                <span className="absolute left-0 -bottom-[2.5px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li className="group">
              <Link href="/dashboard/privacy-policy" className="relative">
                Qaydalar və şərtlər
                <span className="absolute left-0 -bottom-[2.5px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li className="group">
              <Link href="/dashboard/faq" className="relative">
                FAQ
                <span className="absolute left-0 -bottom-[2.5px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li className="group">
              <Link href="/dashboard/contact" className="relative">
                Əlaqə
                <span className="absolute left-0 -bottom-[2.5px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-transform duration-300"></span>
              </Link>
            </li>
          </ul>
          <ul className="flex items-center gap-x-4">
            <li className="group">
              <Link href={""} className="relative">
                <Button
                  variant={ButtonVariantsEnum.EMPTY}
                  className="h-9 rounded-[18px] text-14px600 px-4 text-gray-950 hover:brightness-[0.97]"
                >
                  Barter et
                </Button>
              </Link>
            </li>
            <li className="group">
              <Link href={""} className="relative">
                <Button
                  variant={ButtonVariantsEnum.BLACK}
                  className="h-9 rounded-[18px] text-14px600 px-4"
                >
                  Təcili al / sat
                </Button>
              </Link>
            </li>
            <li className="group">
              <Link href="/dashboard/create" className="relative">
                <Button className="flex gap-x-1.5 items-center h-9 rounded-[18px] text-14px600 px-4">
                  Yeni elan
                  <PlusSVG />
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <DashboardBreadcumbs />
      {children}
    </div>
  );
};

export default DashboardLayout;
