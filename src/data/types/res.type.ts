export type Res<T> = {
    isError: true;
    error: string;
    data?: never;
} | {
    isError: false;
    error?: never;
    data: T;
};
