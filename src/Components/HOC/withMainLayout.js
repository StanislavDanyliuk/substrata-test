import React from 'react';
import Header from "../Common/Header";
import Sidebar from "../Common/Sidebar";

const withMainLayout = (children) => {
    return (
        <>
            <Header/>
            <div className='content'>
                <Sidebar/>
                <main>{children}</main>
            </div>
        </>
    );
};

export default withMainLayout;
