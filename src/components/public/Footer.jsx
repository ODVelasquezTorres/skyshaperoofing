import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-content">
                    {/* Left Block: Information */}
                    <div className="footer-info">
                        {/* Branding */}
                        <div className="footer-column branding-column">
                            <h3 className="footer-heading">SkyShape Roofing</h3>
                            <p className="footer-description">
                                Premier roofing solutions in North Carolina.
                                Committed to quality, integrity, and your home's protection.
                            </p>

                            <div className="social-icons">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <Facebook size={20} />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <Instagram size={20} />
                                </a>
                                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                    {/* TikTok Icon (Lucide might not have it, using SVG) */}
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
                                    <a href="https://maps.google.com/?q=615+S+College+St,+Charlotte,+NC+28202" target="_blank" rel="noopener noreferrer" className="contact-link">
                                        <MapPin size={18} className="contact-icon" />
                                        <span>615 S College St,<br />Charlotte, NC 28202</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:7045848280" className="contact-link">
                                        <Phone size={18} className="contact-icon" />
                                        <span>(704) 584-8280</span>
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

                    {/* Right Block: Map */}
                    <div className="footer-map">
                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.545812971239!2d-80.8431267!3d35.2229569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a02f0c765c3b%3A0x6e8e8f8f8f8f8f8f!2s615%20S%20College%20St%2C%20Charlotte%2C%20NC%2028202!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="SkyShape Roofing Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} SkyShape Roofing. All rights reserved. | Licensed & Insured in NC.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
