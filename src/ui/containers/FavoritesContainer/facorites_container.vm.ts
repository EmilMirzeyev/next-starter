import { useHeaderContent } from "@/core/hooks/userHeaderContent";

export const FacoritesContainerVM = () => {
    useHeaderContent({
        breadcrumbs: [
            {
                id: 1,
                name: "Şəxsi kabinet",
                link: "",
            },
            {
                id: 2,
                name: "Seçilmişlər",
                link: "",
            },
        ],
    });
    return {}
}
