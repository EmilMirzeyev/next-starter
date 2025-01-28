"use client";
import { cn } from '@/core/utils/cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SignTab = () => {
    const pathname = usePathname()
    const currentSignPath = pathname.split('/').pop()

    return (
        <nav className="relative w-full">
            <div className="flex">
                <Link
                    href="/signin"
                    className="flex justify-center w-full text-center py-3 text-gray-500 text-14px500 relative z-10"
                >
                    Daxil ol
                </Link>
                <Link
                    href="/signup"
                    className="flex justify-center w-full text-center py-3 text-gray-500 text-14px500 relative z-10"
                >
                    Qeydiyyatdan keç
                </Link>
            </div>
            <div
                className={cn(
                    "absolute bottom-0 h-0.5 bg-red-500 transition-all duration-300 ease-in-out w-1/2 ",
                    currentSignPath === 'signin' ? "left-0" : "left-1/2"
                )}
            />
            <div
                className={cn(
                    "absolute bottom-0 h-[0.6px] bg-gray-200 transition-all duration-300 ease-in-out w-1/2",
                    currentSignPath === 'signin' ? "left-1/2" : " left-0"
                )}
            />
        </nav>
    )
}

export default SignTab