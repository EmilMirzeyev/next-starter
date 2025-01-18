"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const TestButton = () => {
    let [isPending, startTransition] = useTransition();
    const router = useRouter();
    console.log('isPending', isPending)

    const testHandler = () => {
        startTransition(async () => {
            router.push('/posts')
        })
    }
    return (
        <>
            <button onClick={testHandler} aria-label={"title"} className="w-min">
                Click
            </button>
            <span>isPending: {isPending.toString()}</span>

        </>
    )
}

export default TestButton