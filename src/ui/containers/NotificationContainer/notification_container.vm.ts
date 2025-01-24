"use client"
import { useState } from "react"

export const NotificationContainerVM = () => {
    const [addCarModalVisible, setAddCarModalVisible] = useState(false)
    
    return {addCarModalVisible, setAddCarModalVisible}
}
