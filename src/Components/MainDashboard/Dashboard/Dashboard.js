import React from 'react';
import Book from '../Book/Book';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div style={{minHeight: "100vh"}}>
            <Sidebar/>
            <Book/>
        </div>
    );
};

export default Dashboard;