"use client";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Transition,
} from "@headlessui/react";
import { AccordionType } from "./accordion.type";
import { cn } from "@/core/utils/cn";

const Accordion = ({
    accordionButton,
    defaultOpen,
    setClose,
    overflow = false,
    className,
    buttonClassName,
    panelClassName,
    children,
}: AccordionType) => {
    return (
        <Disclosure defaultOpen={defaultOpen}>
            {({ open, close }) => {
                setClose && open && close();
                return (
                    <div
                        className={cn(
                            "border border-gray-100 rounded-[20px] transition-colors duration-300",
                            open ? className : ""
                        )}
                    >
                        <DisclosureButton
                            className={cn("w-full text-inherit", buttonClassName)}
                        >
                            {accordionButton(open)}
                        </DisclosureButton>
                        <Transition
                            show={open}
                            enter="transition-all duration-300 ease-in"
                            enterFrom="transform max-h-0 opacity-0"
                            enterTo="transform max-h-[1000px] opacity-100"
                            leave="transition-all duration-300 ease-out"
                            leaveFrom="transform max-h-[1000px] opacity-100"
                            leaveTo="transform max-h-0 opacity-0"
                        >
                            <div
                                className={cn(
                                    "overflow-hidden",
                                    overflow ? "overflow-visible" : "overflow-auto",
                                    panelClassName
                                )}
                            >
                                <DisclosurePanel>{children}</DisclosurePanel>
                            </div>
                        </Transition>
                    </div>
                );
            }}
        </Disclosure>
    );
};

export default Accordion;
