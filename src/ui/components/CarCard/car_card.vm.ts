import { useState } from "react";

export const CarCardVM = () => {
    const [liked, setLiked] = useState(false);

    return {
        liked,
        setLiked
    }
}