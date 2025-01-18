import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PaginationVMType } from "./pagination.type";

export const PaginationVM = ({ pageChange }: PaginationVMType) => {
    const { replace } = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);

    const handlePageClick = (page: { selected: number }) => {
        page.selected !== 0
            ? params.set("PageNumber", (Number(page.selected) + 1).toString())
            : params.delete("PageNumber");

        replace(pathname + `?${params.toString()}`);
        pageChange?.(page.selected);
    };

    return { searchParams, handlePageClick };
};
