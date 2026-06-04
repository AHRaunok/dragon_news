import React from 'react';
import Image from 'next/image';
import banner from '../assets/logo.png'
const Header = () => {
    return (
        <div className="bg-yellow-300 p-4 text-center">
            <Image src={banner} alt="Dragon News Banner" className="mx-auto" loading="eager" />
            {/* <h1 className="text-3xl font-bold uppercase tracking-widest">Dragon News</h1> */}
        </div>
    );
};

export default Header;
