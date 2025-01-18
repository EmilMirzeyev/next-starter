import { RequestStateEnum } from "@/data/enum/request_state.enum";
import type { ReactNode } from "react";

export type RadioGroupType<
    T extends { id: number; disabled?: boolean; render: ReactNode },
> = {
    name: string;
    data: T[];
    state?: RequestStateEnum;
    toggle?: boolean;
    className?: string;
    value?: T | null | number;
    onChange?: (value: T | null) => void;
};
