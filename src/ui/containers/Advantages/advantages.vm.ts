import { useState } from 'react'

export const AdvantagesVM = () => {
    const [activeTab, setActiveTab] = useState(1)

    return { activeTab, setActiveTab }
}