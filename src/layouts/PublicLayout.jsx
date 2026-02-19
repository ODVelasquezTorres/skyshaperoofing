import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/public/Navbar';
import StickyMenu from '../components/public/StickyMenu';
import Footer from '../components/public/Footer';

const PublicLayout = () => {
    return (
        <div className="public-layout">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            <StickyMenu />
        </div>
    );
};

export default PublicLayout;
