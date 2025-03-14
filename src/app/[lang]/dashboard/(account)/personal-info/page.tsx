"use client";
import { useHeaderContent } from "@/core/hooks/userHeaderContent";
import PersonalInfoForm from "@/ui/features/PersonalInfoForm"

const PersonalInfo = () => {
    useHeaderContent({
        breadcrumbs: [
            {
                id: 1,
                name: "Şəxsi kabinet",
                link: "",
            },
            {
                id: 2,
                name: "Tənzimləmələr",
                link: "",
            },
        ],
    });
    return (
        <div className="w-full">
            <PersonalInfoForm />
        </div>
    )
}

export default PersonalInfo
