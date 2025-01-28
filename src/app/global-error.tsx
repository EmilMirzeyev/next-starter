"use client";
import Button from "@/ui/shared/Button";
import "./globals.css";

export default function GlobalError({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html>
            <body>
                <div className="container w-full max-w-[930px] my-24">
                    <div className="flex flex-col items-center gap-y-12 bg-white p-8">
                        <div className="space-y-4 text-center">
                            <p className="text-60px400">
                                <span className="text-60px700">500</span> xəta
                            </p>
                            <p className="text-20px400">Serverdə xəta baş verdi</p>
                        </div>
                        <Button onClick={() => reset()}>Yenilə</Button>
                    </div>
                </div>
            </body>
        </html>
    );
}
