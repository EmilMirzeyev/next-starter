import { TableHeaderType } from "../table.type";
import { TR } from "..";

export const THead = <T,>({ data }: { data: TableHeaderType<T>[] }) => {
    const concreteWidth = data.filter((d) => !d.width);
    return (
        <thead>
            <TR className="h-[60px]  rounded">
                {data.map((th) => {
                    const width = th.width || `${100 / concreteWidth.length}%`;
                    return (
                        <th
                            key={th.id}
                            className="h-12 text-14px600 bg-gray-50 first:rounded-l last:rounded-r"
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
