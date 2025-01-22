import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PaginationVMType } from "./pagination.type";

export const PaginationVM = ({
    total,
    perPage = 10,
    pageChange
}: PaginationVMType) => {
    const { replace } = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pageCount = Math.ceil(total / perPage);
    const currentPage = Number(searchParams.get("PageNumber")) || 1;

    const handlePageClick = (page: { selected: number }) => {
        page.selected !== 0
            ? params.set("PageNumber", (Number(page.selected) + 1).toString())
            : params.delete("PageNumber");

        replace(pathname + `?${params.toString()}`);
        pageChange?.(page.selected);
    };

    return { pageCount, currentPage, searchParams, handlePageClick };
};
