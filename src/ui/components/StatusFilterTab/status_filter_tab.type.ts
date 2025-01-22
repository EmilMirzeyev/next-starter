import { RequestStateEnum } from "@/data/enum/request_state.enum";

type StatusDataType = {
    id: number;
    count: number;
    name: string;
    isActive?: boolean;
};

export type StatusFilterTabType = {
    data: StatusDataType[];
    keyParam: string;
    state?: RequestStateEnum;
}

export type StatusFilterTabVMType = Pick<StatusFilterTabType, 'data' | 'keyParam'>
