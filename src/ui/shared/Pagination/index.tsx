"use client";
import ReactPaginate from "react-paginate";
import type { PaginationType } from "./pagination.type";
import {  ChevronRightSVG } from "@public/vectors";
import { PaginationVM } from "./pagination.vm";
import { cn } from "@/core/utils/cn";

const Pagination = ({ total, perPage = 20, pageChange }: PaginationType) => {
    const { pageCount, currentPage, handlePageClick } = PaginationVM({
        total,
        perPage,
        pageChange,
    });


    return (
        <div className={`items-center gap-x-4 ${total ? "flex" : "hidden"}`}>
            {total > perPage && (
                <ReactPaginate
                    containerClassName="w-fit py-1 px-4 mx-auto flex items-center rounded select-none"
                    pageClassName="size-9 flex rounded-[10px] hover:bg-gray-50 text-14px600 rounded flex items-center justify-center"
                    pageLinkClassName="py-2 px-4"
                    activeClassName="bg-gray-50 text-14px600 rounded-[10px] pointer-events-none size-9 flex items-center justify-center border border-gray-200"
                    previousLabel={
                        <div
                            className={cn(
                                "rotate-180 border border-gray-300 size-9 flex justify-center items-center rounded-[10px] mr-6",
                                currentPage === 1 && "opacity-20 cursor-not-allowed"
                            )}
                        >
                            <ChevronRightSVG />
                        </div>
                    }
                    nextLabel={
                        <div
                            className={cn(
                                'border border-gray-300 size-9 flex justify-center items-center rounded-[10px] ml-6',
                                currentPage === pageCount && "opacity-20 cursor-not-allowed"
                            )}
                        >
                             <ChevronRightSVG />
                        </div>
                    }
                    breakLabel="..."
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={2}
                    initialPage={currentPage - 1}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                />
            )}
        </div>
    );

};

export default Pagination;
