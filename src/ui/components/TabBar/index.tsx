"use client";
import { cn } from "@/core/utils/cn";
import { TabBarVM } from "./tab_bar.vm";
import { TabBarType } from "./tab_bar.type";

const TabBar = ({ tabParam, tabData }: TabBarType) => {
    const { indicatorStyle, currentTab, tabRefs, handleTabClick } = TabBarVM({tabParam})

    return (
        <div className="flex bg-gray-50 px-3 rounded-xl overflow-hidden relative">
            <div className="container">
                <div className="flex space-x-2 border-b border-gray-200 transition-all ease-in-out relative w-fit">
                    <span
                        className="absolute bottom-0 h-0.5 bg-brand-500 transition-all duration-300"
                        style={indicatorStyle}
                    />
                    {tabData.map((tab, index) => (
                        <button
                            key={tab.id}
                            ref={(el) => {
                                tabRefs.current[index] = el;
                            }}
                            className={cn(
                                "relative w-fit p-3 py-4 border-b-2 border-transparent",
                                currentTab === tab.id
                                    ? "text-gray-900 text-14px700"
                                    : "text-gray-500 text-14px500"
                            )}
                            onClick={() => handleTabClick(tab.id)}
                        >
                            {tab.name} ({tab.count})
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TabBar;
