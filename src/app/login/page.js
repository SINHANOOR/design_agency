import Footer from '@/component/Footer';
import Login from '@/component/Login';
import NavBar from '@/component/NavBar';
import React from 'react';

const page = () => {
    return (
        <div>
            <NavBar/>
            <Login/>
            <Footer/>
        </div>
    );
};

export default page;