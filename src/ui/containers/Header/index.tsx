import Link from "next/link";
import ChangeLanguage from "@/ui/components/ChangeLanguage";

const Header = () => {

  return (
    <div className="flex justify-between p-4 bg-slate-500 text-white">
      <Link href="/">Logo</Link>
      <ChangeLanguage />
    </div>
  );
};

export default Header;
