import { useState } from "react";

export const CardDetailVM = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return {isExpanded, setIsExpanded}
}

