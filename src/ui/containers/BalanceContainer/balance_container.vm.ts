import { useHeaderContent } from "@/core/hooks/userHeaderContent";

export const BalanceContainerVM = () => {
    useHeaderContent({
        breadcrumbs: [
            {
                id: 1,
                name: "Şəxsi kabinet",
                link: "",
            },
            {
                id: 2,
                name: "Balans",
                link: "",
            },
        ],
    });
    return {}
}
