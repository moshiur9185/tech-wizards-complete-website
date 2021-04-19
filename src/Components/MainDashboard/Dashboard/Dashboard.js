import React from 'react';
import Book from '../Book/Book';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <Sidebar/>
            <Book/>
        </div>
    );
};

export default Dashboard;