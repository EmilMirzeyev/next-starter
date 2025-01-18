import { TableDataCellNTableRowType } from "../table.type";
import { cn } from "@/core/utils/cn";

export const TD = ({ children, className }: TableDataCellNTableRowType) => {
    return (
        <td className={cn("w-auto text-12px500 h-[60px]", className)}>
            {children}
        </td>
    );
};
