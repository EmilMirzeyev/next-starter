import Link from "next/link";

const page = () => {
    return (
        <div className="text-center">
            <div>Detail Page</div>
            <Link href={"/test"} className="underline">
                Go to back Test Page
            </Link>
        </div>
    );
};

export default page;
