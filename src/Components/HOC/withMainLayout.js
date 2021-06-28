import React from 'react';
import Header from "../Common/Header";
import Sidebar from "../Common/Sidebar";
import HistoryBar from "../Common/HistoryBar";

const withMainLayout = (children) => {
    return (
        <>
            <Header/>
            <div className='content'>
                <Sidebar/>
                <main>{children}</main>
                <HistoryBar/>
            </div>
        </>
    );
};

export default withMainLayout;
