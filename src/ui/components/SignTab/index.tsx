import { cn } from "@/core/utils/cn";
import Link from "next/link";
import { SignTabVM } from "./sign_tab.vm";

const SignTab = () => {
    const { currentSignPath, tabs } = SignTabVM()

    return (
        <nav className="relative w-full mobile:mb-4">
            <div className="flex">
                {tabs.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={cn(
                            "flex justify-center w-full text-center py-3 text-gray-500 text-14px500 relative z-10",
                            currentSignPath === href.slice(1) && "text-14px700 text-gray-900"
                        )}
                    >
                        {label}
                    </Link>
                ))}
            </div>
            <div
                className={cn(
                    "absolute bottom-0 h-0.5 bg-red-500 transition-all duration-300 ease-in-out w-1/2 ",
                    currentSignPath === "signin" ? "left-0" : "left-1/2"
                )}
            />
            <div
                className={cn(
                    "absolute bottom-0 h-[0.6px] bg-gray-200 transition-all duration-300 ease-in-out w-1/2",
                    currentSignPath === "signin" ? "left-1/2" : " left-0"
                )}
            />
        </nav>
    );
};

export default SignTab;
