"use client";
import Button from '@/ui/shared/Button'
import "./globals.css";

const NotFound = () => {
    return (
        <div className="container w-full max-w-[930px] my-24">
            <div className="flex flex-col items-center gap-y-12 bg-white rounded-lg p-8 shadow">
                <div className="space-y-4 text-center">
                    <p className="text-60px400">
                        <span className="text-60px700">404</span> xəta
                    </p>
                    <p className="text-20px400">Səhifədə hər hansı məlumat tapılmadı</p>
                </div>
                <Button onClick={() => (window.location.href = '/')}>
                    Əsas səhifə
                </Button>
            </div>
        </div>

    )
}

export default NotFound