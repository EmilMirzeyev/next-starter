import { LogoV1SVG, PlusSVG } from "@public/vectors";
import Button from "@/ui/shared/Button";
import Link from "next/link";
import DashboardBreadcumbs from "@/ui/components/DashboardBreadcrumbs";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div>
      <div className="container flex justify-between item-center mt-6 mb-4">
        <LogoV1SVG />
        <Button className="rounded-3xl h-12 flex items-center gap-x-1.5">
          Yeni elan
          <PlusSVG storke="#fff" />
        </Button>
      </div>
      <div className="bg-gray-100 py-3">
        <nav className="flex items-center justify-between container text-14px500">
          <ul className="flex items-center gap-x-8">
            <li className="group">
              <Link href={""} className="relative">
                Digər elanlar
                <span className="absolute left-0 -bottom-[2.5px] w-full h-[1.2px] bg-black opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              </Link>
            </li>
            <li className="group">
              <Link href={""} className="relative">
                Şəxsi kabinet
                <span className="absolute left-0 -bottom-[2.5px] w-full h-[1.2px] bg-black opacity-0 group-hover:opacity-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li className="group">
              <Link href={""} className="relative">
                Balans
                <span className="absolute left-0 -bottom-[2.5px] w-full h-[1.2px] bg-black opacity-0 group-hover:opacity-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li className="group">
              <Link href={""} className="relative">
                Abunəliklər
                <span className="absolute left-0 -bottom-[2.5px] w-full h-[1.2px] bg-black opacity-0 group-hover:opacity-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li className="group">
              <Link href={""} className="relative">
                Tənzimləmələr
                <span className="absolute left-0 -bottom-[2.5px] w-full h-[1.2px] bg-black opacity-0 group-hover:opacity-100 transition-transform duration-300"></span>
              </Link>
            </li>
          </ul>
          <ul className="flex items-center gap-x-8">
            <li className="group">
              <Link href={""} className="relative">
                FAQ
                <span className="absolute left-0 -bottom-[2.5px] w-full h-[1.2px] bg-black opacity-0 group-hover:opacity-100 transition-transform duration-300"></span>
              </Link>
            </li>
            <li className="group">
              <Link href={""} className="relative">
                Əlaqə
                <span className="absolute left-0 -bottom-[2.5px] w-full h-[1.2px] bg-black opacity-0 group-hover:opacity-100 transition-transform duration-300"></span>
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
