import { ReactNode } from 'react';

type SwiperDataType = {
    id: number;
    icon: ReactNode;
    name: string;
};

export type SwipperType = {
    data: SwiperDataType[];
}

