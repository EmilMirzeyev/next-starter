import { useHeaderContent } from "@/core/hooks/userHeaderContent";
import { useState } from "react";

export const CardDetailVM = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(-1);
    const [isNumberVisible, setIsNumberVisible] = useState(false);

    const toggleNumberVisibility = () => setIsNumberVisible((prev) => !prev);

    const getMaskedNumber = (number = "") => `${number.slice(0, 10)} ** **`;

    const toggleOpen = (state: boolean) => () => setOpen(state);

    const updateIndex = ({ index: current }: { index: number }) =>
        setIndex(current);

    useHeaderContent({
        breadcrumbs: [
            {
                id: 1,
                name: "Axarış nəticəsi",
                link: ""
            },
            {
                id: 2,
                name: "Ford - Fusion Titanium, 2020, 2.0 L, 99 000 km",
                link: ""
            },
        ]
    })

    return {
        isExpanded,
        open,
        index,
        isNumberVisible,
        toggleNumberVisibility,
        getMaskedNumber,
        setIsExpanded,
        toggleOpen,
        updateIndex,
    };
};
