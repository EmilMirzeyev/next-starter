import { PropsWithChildren, ReactNode } from "react";

export type AccordionType = PropsWithChildren & {
    accordionButton: (open: boolean) => ReactNode;
    defaultOpen?: boolean;
    setClose?: boolean;
    overflow?: boolean;
    className?: string;
    buttonClassName?: string;
    panelClassName?: string;
};
