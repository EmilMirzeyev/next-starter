import { useHeaderContent } from "@/core/hooks/userHeaderContent"
import { useState } from "react"

export const NotificationContainerVM = () => {
    const [addCarModalVisible, setAddCarModalVisible] = useState(false)
    const [removeCarModalVisible, setRemoveCarModalVisible] = useState(false)
    useHeaderContent({
        breadcrumbs: [
            {
                id: 1,
                name: "Şəxsi kabinet",
                link: "",
            },
            {
                id: 2,
                name: "Bildirişlər",
                link: "",
            },
        ],
    });
    return {
        addCarModalVisible,
        setAddCarModalVisible,
        removeCarModalVisible,
        setRemoveCarModalVisible
    }
}
