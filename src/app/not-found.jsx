import Link from 'next/link';
import React from 'react';

const Notfound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-6">
            <h1 className="text-2xl font-bold text-center text-red-500" >Not Found</h1>
            <Link href="/">
                <button className="btn btn-primary">
                    Go Home
                </button>
            </Link>
        </div>
    );
};

export default Notfound;