import { BaseModel } from "@/core/entities/general/models/base.model"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

export const CarListVM = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [sortByValue, setSortByValue] = useState<BaseModel>({
        id: 1,
        name: "Tarixə görə",
    })

    const handleSearchParams = (val: BaseModel) => {
        setSortByValue(val)
        const params = new URLSearchParams(searchParams.toString())
        if (val.id !== 1) {
            params.set('sortBy', String(val.id))
        } else {
            params.delete('sortBy')
        }
        router.push(`?${params}`)
    }

    return {
        sortByValue,
        handleSearchParams
    }
}
