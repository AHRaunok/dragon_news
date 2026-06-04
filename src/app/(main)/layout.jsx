import BreakingNews from '@/components/BreakingNews';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React from 'react';

const Mainlayout = ({ children }) => {
    return (
        <div>
      <Header/>
              <BreakingNews/>

      <Navbar/>
      {children}
      
    </div>
    );
};

export default Mainlayout;