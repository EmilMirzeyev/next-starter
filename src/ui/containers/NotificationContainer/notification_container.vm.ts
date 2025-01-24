"use client"
import { useState } from "react"

export const NotificationContainerVM = () => {
    const [addCarModalVisible, setAddCarModalVisible] = useState(false)
    const [removeCarModalVisible, setRemoveCarModalVisible] = useState(false)

    return { 
        addCarModalVisible,
         setAddCarModalVisible,
         removeCarModalVisible, 
        setRemoveCarModalVisible 
    }
}
