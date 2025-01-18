import { TableDataCellNTableRowType } from "../table.type";
import { cn } from "@/core/utils/cn";

export const TR = ({
    children,
    className,
    ...props
}: TableDataCellNTableRowType) => {
    return (
        <tr
            className={cn(
                "[&>th]:py-3 [&>th]:px-4 [&>th]:whitespace-nowrap [&>td]:py-3 [&>td]:px-4",
                className
            )}
            {...props}
        >
            {children}
        </tr>
    );
};
