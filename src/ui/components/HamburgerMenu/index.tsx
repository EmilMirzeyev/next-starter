"use client"
import { Popover as PopoverH, PopoverButton, PopoverPanel } from "@headlessui/react";
import { cn } from "@/core/utils/cn";
import { XSVG } from "@public/vectors";

const HumburgerMenu = ({ menuItems }: { menuItems: { label: string; href: string }[] }) => {
    return (
        <PopoverH className="relative">
            {({ open }) => (
                <>
                    {/* Burger Button */}
                    <PopoverButton className="p-2 rounded-md border bg-gray-100 hover:bg-gray-200 focus:outline-none">
                        {open ? <XSVG size={24} /> : 'sss'}
                    </PopoverButton>

                    {/* Menu Panel */}
                    <PopoverPanel
                        className={cn(
                            "absolute top-14 right-0 w-64 bg-white border shadow-lg rounded-lg",
                            "p-4 space-y-3 flex flex-col"
                        )}
                    >
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                            >
                                {item.label}
                            </a>
                        ))}
                    </PopoverPanel>
                </>
            )}
        </PopoverH>
    );
};

export default HumburgerMenu;
