import { useState } from "react";

export const CarCardVM = () => {
    const [liked, setLiked] = useState(false);

    const toggleFavorite = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setLiked((prev) => !prev)
    }

    return {
        liked,
        toggleFavorite
    }
}