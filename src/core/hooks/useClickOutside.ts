import { useUpdateEffect } from "./useUpdateEffect";

export const useClickOutside = (
    element: HTMLElement | null,
    action: () => void
): void => {
    useUpdateEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (element && !element.contains(event.target as Node)) {
                action();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [element, action]);
};
