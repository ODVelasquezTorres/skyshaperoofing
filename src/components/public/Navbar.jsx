import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronDown, Search, Hammer, CloudLightning, Home, Image, Menu, X } from 'lucide-react';
import LoginModal from '../auth/LoginModal';
import './Navbar.css';

const Navbar = () => {
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
                            src={isScrolledState ? "/logo-scrolled.png" : "/new-logo-desktop.png"}
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

                                {/* Roofing Dropdown */}
                                <li className="nav-item-dropdown">
                                    <span className="nav-link-text">
                                        Roofing <ChevronDown size={16} className="dropdown-chevron" />
                                    </span>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link to="/roof-inspection" onClick={closeMobile}>
                                                <Search size={18} className="dropdown-icon" />
                                                <span>Roof Inspection</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/roof-repair" onClick={closeMobile}>
                                                <Hammer size={18} className="dropdown-icon" />
                                                <span>Roof Repair</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/storm-restoration" onClick={closeMobile}>
                                                <CloudLightning size={18} className="dropdown-icon" />
                                                <span>Storm Restoration</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/roof-replacement" onClick={closeMobile}>
                                                <Home size={18} className="dropdown-icon" />
                                                <span>Roof Replacement</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/projects" onClick={closeMobile}>
                                                <Image size={18} className="dropdown-icon" />
                                                <span>Projects</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li><Link to="/commercial-roofing" onClick={closeMobile}>Commercial Roofing</Link></li>
                                <li><Link to="/solar-panel" onClick={closeMobile}>Solar Panel</Link></li>
                                <li><Link to="/insurance-claim" onClick={closeMobile}>Insurance Claim</Link></li>
                                <li><Link to="/financing" onClick={closeMobile}>Financing</Link></li>
                            </ul>

                            <div className="nav-cta">
                                <button onClick={() => { setIsLoginOpen(true); closeMobile(); }} className="btn-login">
                                    Contact Us
                                </button>
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
