import { NestedKeysType } from "@/data/types/nested_kets.type";

export const getNestedValue = <T>(obj: T, keys: NestedKeysType<T>) => {
    if (Array.isArray(keys)) {
        return keys.reduce((acc: any, part) => acc && acc[part], obj);
    }
    return obj[keys];
};
