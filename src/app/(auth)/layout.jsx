import Header from '@/components/Header';
import React from 'react';

const Authlayout = ({ children }) => {
    return (
      <>
       <html
      lang="en"
    //   className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header/>
        {children}
        
        </body>
    </html>
      </>
    );
};

export default Authlayout;