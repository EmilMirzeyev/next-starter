export type TabBarType = {
    tabParam: string;
    tabData: {
        id: number,
        name: string;
        count?: number;
    }[]
}

export type TabBarVMType = Pick<TabBarType, 'tabParam'>