import { LogoV1SVG, WalletSVG } from "@public/vectors"; 
import Link from "next/link";
import DashboardBreadcumbs from "@/ui/components/DashboardBreadcrumbs";
import HeaderProfile from "@/ui/containers/Header/Profile";
import ChangeLanguage from "@/ui/components/ChangeLanguage"; 
import DashboardFooter from "@/ui/containers/Footer/options/dashboard_footer";
import DashboardHeader from "@/ui/containers/Header/options/dashboard_header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

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
      <DashboardHeader />
      <DashboardBreadcumbs />
      {children}
      <DashboardFooter />
    </div>
  );
};

export default DashboardLayout;
