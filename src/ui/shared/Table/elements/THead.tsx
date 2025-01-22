import { TableHeaderType } from "../table.type";
import { TR } from "..";
import { cn } from "@/core/utils/cn";

export const THead = <T,>({
    data,
    thClassName,
}: {
    data: TableHeaderType<T>[];
    thClassName?: string;
}) => {
    const concreteWidth = data.filter((d) => !d.width);
    return (
        <thead>
            <TR className="h-[60px]">
                {data.map((th) => {
                    const width = th.width || `${100 / concreteWidth.length}%`;
                    return (
                        <th
                            key={th.id}
                            className={cn(
                                "h-12 text-14px600 bg-gray-50 first:rounded-l last:rounded-r",
                                thClassName
                            )}
                            style={{ width, minWidth: th.width, maxWidth: th.width }}
                        >
                            {th.name}
                        </th>
                    );
                })}
            </TR>
        </thead>
    );
};
