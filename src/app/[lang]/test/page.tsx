import Link from "next/link";
import React from "react";

const TestPage = () => {
    return (
        <div>
            <nav className="text-center">
                <div className="text-24px600 text-error-500">Test Page</div>
                <Link href={'/test/detail'} className="underline">Go to Detail Page</Link>
            </nav>
            {/* <Suspense fallback={<h2>Loading Users...</h2>}>
                <UsersPage />
            </Suspense>
            <Suspense fallback={<h2>Loading Articles...</h2>}>
                <ArticlesPage />
            </Suspense> */}
        </div>
    );
};

export default TestPage;

