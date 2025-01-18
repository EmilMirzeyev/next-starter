export type NestedKeysType<T> = {
    [K in keyof T]: T[K] extends object ? [K, ...NestedKeysType<T[K]>] : [K];
}[keyof T];
