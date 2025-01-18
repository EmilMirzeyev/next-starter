"use client";
import ReactPaginate from "react-paginate";
import type { PaginationType } from "./pagination.type";
import { UpChevronSVG } from "@public/vectors";
import { PaginationVM } from "./pagination.vm";
import { cn } from "@/core/utils/cn";

const Pagination = ({ total, perPage = 20, pageChange }: PaginationType) => {
    const { searchParams, handlePageClick } = PaginationVM({ pageChange });

    return (
        <div>
            <div
                className={cn(
                    "w-full items-center gap-x-4 mb-4",
                    total ? "flex" : "hidden"
                )}
            >
                {total > perPage && (
                    <ReactPaginate
                        containerClassName="w-fit py-1 px-4 mx-auto flex items-center gap-x-4 border border-solid border-gray rounded select-none"
                        pageClassName="h-9 flex items-center text-center rounded hover:bg-gray-300"
                        pageLinkClassName="py-2 px-4"
                        activeClassName="bg-blue-600 text-white pointer-events-none"
                        previousClassName="previous [&.disabled]:pointer-events-none [&.disabled]:opacity-50"
                        nextClassName="next [&.disabled]:pointer-events-none [&.disabled]:opacity-50"
                        previousLabel={<UpChevronSVG className="size-3 -rotate-90" />}
                        nextLabel={<UpChevronSVG className="size-3 rotate-90" />}
                        breakLabel="..."
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={2}
                        initialPage={
                            searchParams.get("PageNumber")
                                ? Number(searchParams.get("PageNumber")) - 1
                                : undefined
                        }
                        pageCount={Math.ceil(total / perPage)}
                        onPageChange={handlePageClick}
                    />
                )}
            </div>

            <div
                className={cn(
                    "w-full items-center gap-x-4",
                    !total ? "flex" : "hidden"
                )}
            ></div>
        </div>
    );
};

export default Pagination;
