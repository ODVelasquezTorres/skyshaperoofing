import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">

                {/* ===== ROW 1: Text Columns ===== */}
                <div className="footer-row-text">
                    {/* Branding */}
                    <div className="footer-column branding-column">
                        <h3 className="footer-heading">SkyShape Roofing</h3>
                        <p className="footer-description">
                            Premier roofing solutions across Arkansas & Oklahoma.
                            Committed to quality, integrity, and your home's protection.
                        </p>

                        <div className="social-icons">
                            <a href="https://www.facebook.com/profile.php?id=61588251332983" target="_blank" rel="noopener noreferrer" className="social-link">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/skyshaperoofingandsolutions?igsh=MWdpY2Z1Z3c3a2ptbw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-link">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.tiktok.com/@skyshaperoofingnc7" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-column links-column">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#process">Our Process</a></li>
                            <li><a href="#testimonials">Reviews</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-column contact-column">
                        <h3 className="footer-heading">Contact</h3>
                        <ul className="contact-list">
                            <li>
                                <a href="https://maps.google.com/?q=Rogers,+AR+72758" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <MapPin size={18} className="contact-icon" />
                                    <span>Rogers, AR 72758</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://maps.google.com/?q=Oklahoma+City,+OK+73122" target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <MapPin size={18} className="contact-icon" />
                                    <div className="contact-address-ok">
                                        <span>Oklahoma City, OK 73122</span>
                                        <span className="badge-new">NEW</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="tel:4792783764" className="contact-link">
                                    <Phone size={18} className="contact-icon" />
                                    <span>(479) 278-3764</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:skyshaperoofingnc@gmail.com" className="contact-link">
                                    <Mail size={18} className="contact-icon" />
                                    <span>skyshaperoofingnc@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ===== Divider ===== */}
                <div className="footer-divider"></div>

                {/* ===== ROW 2: Service Areas ===== */}
                <div className="footer-row-maps">
                    <h3 className="footer-heading footer-heading-centered">Service Areas</h3>
                    <div className="service-areas-grid">
                        <div className="service-area-card">
                            <div className="service-area-map">
                                <iframe
                                    src="https://www.google.com/maps?q=Rogers,AR+72758&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Rogers, Arkansas Location"
                                ></iframe>
                            </div>
                            <div className="service-area-info">
                                <h4>Arkansas</h4>
                                <p>Rogers & surrounding areas</p>
                            </div>
                        </div>
                        <div className="service-area-card service-area-new">
                            <div className="service-area-badge">NOW SERVING</div>
                            <div className="service-area-map">
                                <iframe
                                    src="https://www.google.com/maps?q=Oklahoma+City,OK+73122&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Oklahoma City, Oklahoma Location"
                                ></iframe>
                            </div>
                            <div className="service-area-info">
                                <h4>Oklahoma</h4>
                                <p>Oklahoma City & surrounding areas</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} SkyShape Roofing. All rights reserved. | Licensed &amp; Insured in AR &amp; OK.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
