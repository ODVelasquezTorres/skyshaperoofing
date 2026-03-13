import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ArrowRight, ChevronDown, Search, Hammer, CloudLightning, Home, Image, Menu, X } from 'lucide-react';
import { useContact } from '../../context/ContactContext';
import LoginModal from '../auth/LoginModal';
import './Navbar.css';

// Deployment trigger - reset vercel queue
const Navbar = () => {
    const { openEmailModal } = useContact();
    const [scrolled, setScrolled] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    // Close mobile menu on route change
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMobileOpen(false);
    }, [location.pathname]);

    // Determine if we should apply the "scrolled" style (White BG, Dark Text)
    const isScrolledState = scrolled || !isHomePage;

    const closeMobile = () => setMobileOpen(false);

    return (
        <>
            <header className={`navbar-wrapper ${isScrolledState ? 'scrolled' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
                {/* Logo Section */}
                <div className="logo-outer-container">
                    <Link to="/" onClick={closeMobile}>
                        <img
                            src={isScrolledState ? "/logo-scrolled.png" : "/logocambio.png"}
                            alt="Skyshape Roofing"
                            className="navbar-logo"
                        />
                    </Link>
                </div>

                {/* Hamburger Toggle */}
                <button
                    className="hamburger-btn"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <div className={`navbar-inner-container ${mobileOpen ? 'mobile-show' : ''}`}>
                    <div className="menu-column">
                        <div className="main-nav-row">
                            <ul className="nav-links">
                                <li><Link to="/" onClick={closeMobile}>Home</Link></li>
                                <li><Link to="/insurance-claim" onClick={closeMobile}>Insurance Claim</Link></li>

                                <li><Link to="/roofing" onClick={closeMobile}>Roofing</Link></li>
                                <li><Link to="/maintenance" onClick={closeMobile}>Maintenance</Link></li>

                                <li><Link to="/commercial-roofing" onClick={closeMobile}>Commercial Roofing</Link></li>
                                <li><Link to="/solar-panel" onClick={closeMobile}>Solar Panel</Link></li>
                                <li><Link to="/financing" onClick={closeMobile}>Financing</Link></li>
                            </ul>

                            <div className="nav-cta">
                                <a href="tel:17045848280" className="btn-login" onClick={closeMobile}>
                                    <Phone size={18} /> Call us: (704) 584-8280
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </>
    );
};

export default Navbar;
