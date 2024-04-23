export type Res<T> = {
    isError: true;
    error: {
        message: string;
        status: number;
    };
    data?: never;
} | {
    isError: false;
    error?: never;
    data: T;
};
