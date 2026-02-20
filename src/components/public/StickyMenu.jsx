import React, { useRef, useEffect } from 'react';
import { MessageCircle, Phone, Smartphone, Mail, X } from 'lucide-react';
import TextUsModal from './TextUsModal';
import EmailUsModal from './EmailUsModal';
import './StickyMenu.css';

const StickyMenu = () => {
    const [isTextModalOpen, setIsTextModalOpen] = React.useState(false);
    const [isEmailModalOpen, setIsEmailModalOpen] = React.useState(false);
    const menuRef = useRef(null);

    const openTextModal = (e) => {
        e.preventDefault();
        setIsEmailModalOpen(false); // Close other if open
        setIsTextModalOpen(!isTextModalOpen); // Toggle
    };

    const openEmailModal = (e) => {
        e.preventDefault();
        setIsTextModalOpen(false); // Close other if open
        setIsEmailModalOpen(!isEmailModalOpen); // Toggle
    };

    // Close on click outside if needed, though they cover the interaction area
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                // Optional: logic to close panels if clicking elsewhere on the page
                // But since panels are "modal-like", we usually want explicit close.
                // Leaving this empty for now unless user requests auto-close on bg click.
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [menuRef]);

    return (
        <>
            {/* The Sticky Menu Container */}
            <div className="sticky-menu-wrapper" ref={menuRef}>

                {/* Panels (Positioned absolutely relative to wrapper) */}
                <div className={`sticky-panel-container ${isTextModalOpen ? 'active' : ''}`}>
                    <div className="panel-header-mobile">
                        <span>Send us a text</span>
                        <button onClick={() => setIsTextModalOpen(false)}><X size={20} /></button>
                    </div>
                    {/* We pass a prop to Modal to render inline if supported, OR we just use the Modal component
                       BUT since the user wants it to open "over the menu" like a popover, 
                       we might need to adjust the Modal CSS to be relative or controlled here.
                       
                       Strategy: Use the existing Modals but override their CSS via a prop or class 
                       to make them behave like popovers attached to the bottom. 
                   */}
                    <TextUsModal
                        isOpen={true}
                        onClose={() => setIsTextModalOpen(false)}
                        isEmbedded={true}
                    />
                </div>

                <div className={`sticky-panel-container ${isEmailModalOpen ? 'active' : ''}`}>
                    <div className="panel-header-mobile">
                        <span>Send us an email</span>
                        <button onClick={() => setIsEmailModalOpen(false)}><X size={20} /></button>
                    </div>
                    <EmailUsModal
                        isOpen={true}
                        onClose={() => setIsEmailModalOpen(false)}
                        isEmbedded={true}
                    />
                </div>

                {/* The Bar */}
                <div className="sticky-menu-bar">

                    {/* Left Group */}
                    <a href="#chat" className="sticky-menu-item" onClick={(e) => e.preventDefault()} title="Start a Chat">
                        <MessageCircle size={22} />
                        <span>Chat</span>
                    </a>
                    <a href="https://wa.me/17045848280" target="_blank" rel="noopener noreferrer" className="sticky-menu-item" title="WhatsApp Emergency">
                        <Phone size={22} />
                        <span>Call</span>
                    </a>

                    {/* Center Logo */}
                    <div className="sticky-menu-logo-container">
                        <div className="sticky-logo-circle">
                            <img src="/logo-scrolled.png" alt="SkyShape" className="sticky-logo-img"
                                onError={(e) => { e.target.onerror = null; e.target.src = '/vite.svg' }}
                            />
                        </div>
                    </div>

                    {/* Right Group */}
                    <a href="#text"
                        onClick={openTextModal}
                        className={`sticky-menu-item ${isTextModalOpen ? 'active' : ''}`}
                        title="Send a Text">
                        <Smartphone size={22} />
                        <span>Text</span>
                    </a>
                    <a href="#email"
                        onClick={openEmailModal}
                        className={`sticky-menu-item ${isEmailModalOpen ? 'active' : ''}`}
                        title="Send an Email">
                        <Mail size={22} />
                        <span>Email</span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default StickyMenu;
