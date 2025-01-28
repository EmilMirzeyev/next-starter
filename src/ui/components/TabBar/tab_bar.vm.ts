"use clinet";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { TabBarVMType } from "./tab_bar.type";

export const TabBarVM = ({ tabParam }: TabBarVMType) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const activeTabId = Number(searchParams.get(tabParam)) || 1;
    const [currentTab, setCurrentTab] = useState(activeTabId);
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
        setCurrentTab(activeTabId);
    }, [activeTabId]);

    useEffect(() => {
        const activeTab = tabRefs.current[currentTab - 1];
        if (activeTab) {
            setIndicatorStyle({
                width: `${activeTab.offsetWidth + 20}px`,
                left: `${activeTab.offsetLeft - 12}px`,
            });
        }
    }, [currentTab, tabRefs.current]);

    const handleTabClick = (id: number) => {
        const params = new URLSearchParams(searchParams?.toString() || "");
        if (id === 1) {
            params.delete(tabParam);
        } else {
            params.set(tabParam, String(id));
        }
        router.replace(`?${params.toString()}`, { scroll: false });
    };
    return { indicatorStyle, currentTab, tabRefs, handleTabClick }
}
