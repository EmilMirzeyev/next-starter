"use client"
import { usePathname } from "next/navigation";

export const SidebarVM = () => {
    const pathname = usePathname();
    const lastSegment = pathname.split("/").filter(Boolean).pop();
    console.log("pathname", pathname);
    const isActive = (segment: string) => lastSegment === segment;

    return { isActive }
}
