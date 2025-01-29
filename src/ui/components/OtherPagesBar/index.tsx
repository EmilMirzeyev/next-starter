import Link from 'next/link'

const OtherPagesBar = () => {

    const otherPages = [
        {
            id: 1,
            name: "Axtar",
            href: ""
        },
        {
            id: 2,
            name: "Avtosalonlar",
            href: ""
        },
        {
            id: 3,
            name: "Şəxsi kabinet",
            href: "/dashboard/profile"
        },
        {
            id: 4,
            name: "Məxfilik siyasəti",
            href: "/dashboard/privacy-policy"
        },
        {
            id: 5,
            name: "Qaydalar və şərtlər",
            href: "/dashboard/terms-conditions"
        },
        {
            id: 6,
            name: "FAQ",
            href: "/dashboard/faq"
        },
        {
            id: 7,
            name: "Əlaqə",
            href: "/dashboard/contact"
        },
    ];
    
    return (
        <div className="min-w-[330px] border border-gray-200 p-6 rounded-[20px] flex flex-col gap-y-5 h-full sticky top-0">
            <h3 className="text-gray-900 text-24px700">Digər səhifələr</h3>
            <div className="flex flex-col gap-y-2">
                {otherPages.map(({ id, name, href }) => (
                    <Link
                        href={href}
                        key={id}
                        className="text-black text-16px500 bg-gray-100 rounded-xl p-3 hover:brightness-95 cursor-pointer transition-all ease-in-out"
                    >
                        {name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default OtherPagesBar