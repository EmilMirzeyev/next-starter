import { PopoverButton, Popover as PopoverH, PopoverPanel } from "@headlessui/react";
import { PopoverType } from "./popover.type";
import { cn } from "@/core/utils/cn";

const Popover = ({
    button,
    panelClassName = "",
    popoverClassName = "",
    onClick,
    children,
}: PopoverType) => {
    return (
        <PopoverH
            className={cn("relative z-10 h-full w-fit", popoverClassName)}
        >
            <PopoverButton className="w-full h-full" onClick={onClick}>
                {button}
            </PopoverButton>
            <PopoverPanel
                className={cn(
                    "absolute top-16 right-0 border-gray-300 bg-white rounded-lg z-10",
                    panelClassName
                )}
            >
                {children}
            </PopoverPanel>
        </PopoverH>
    );
};

export default Popover;
