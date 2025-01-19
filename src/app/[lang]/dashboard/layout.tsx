import { LogoV1SVG, PlusSVG } from "@public/vectors";
import Button from "@/ui/shared/Button";
import Link from "next/link";

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
            <li>
              <Link href={""}>Digər elanlar</Link>
            </li>
            <li>
              <Link href={""}>Şəxsi kabinet</Link>
            </li>
            <li>
              <Link href={""}>Balans</Link>
            </li>
            <li>
              <Link href={""}>Abunəliklər</Link>
            </li>
            <li>
              <Link href={""}>Tənzimləmələr</Link>
            </li>
          </ul>
          <ul className="flex items-center gap-x-8">
            <li>
              <Link href={""}>FAQ</Link>
            </li>
            <li>
              <Link href={""}>Əlaqə</Link>
            </li>
          </ul>
        </nav>
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
