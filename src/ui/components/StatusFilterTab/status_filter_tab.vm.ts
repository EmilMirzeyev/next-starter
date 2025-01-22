import { useRouter, useSearchParams } from "next/navigation";
import { StatusFilterTabVMType } from "./status_filter_tab.type";

export const StatusFilterTabVM = ({
    keyParam,
    data,
}: StatusFilterTabVMType) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const appealStatusId = Number(searchParams.get(keyParam)) || 1;

    const activeSlideIndex =
        data.findIndex((status) => status.id === appealStatusId)

    const handleUpdateSwiperState = (id: number) => {
        const params = new URLSearchParams(searchParams.toString());
        if (id > 1) {
            params.set(keyParam, String(id));
            params.delete("PageNumber");
        } else {
            params.delete(keyParam);
        }

        router.push(`?${params.toString()}`);
    };


    return {
        searchParams,
        appealStatusId,
        activeSlideIndex,
        handleUpdateSwiperState,
    };
};
