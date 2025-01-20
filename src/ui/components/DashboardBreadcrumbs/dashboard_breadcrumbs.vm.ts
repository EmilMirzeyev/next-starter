import { useAppSelector } from "@/core/hooks/useRedux";

export const DashboardBreadcrumbsVM = () => {
    const header = useAppSelector((state) => state.header);

    return { header }
}
