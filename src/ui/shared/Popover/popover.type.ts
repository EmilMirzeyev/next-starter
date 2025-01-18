import { PropsWithChildren, ReactNode } from "react";

export type PopoverType = PropsWithChildren & {
    button: ReactNode;
    panelClassName?: string;
    popoverClassName?: string;
    onClick?: () => void;
};
