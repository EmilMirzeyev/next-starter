import { usePathname } from "next/navigation";

export const SignTabVM = () => {
    const pathname = usePathname();
    const currentSignPath = pathname.split("/").pop();

    const tabs = [
        { href: "/signin", label: "Daxil ol" },
        { href: "/signup", label: "Qeydiyyatdan keç" },
    ];
    return { currentSignPath, tabs }
}
