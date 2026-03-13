import React, { useRef, useEffect } from 'react';
import { MessageCircle, Phone, Smartphone, Mail, X } from 'lucide-react';
import { useContact } from '../../context/ContactContext';
import TextUsModal from './TextUsModal';
import EmailUsModal from './EmailUsModal';
import './StickyMenu.css';

const StickyMenu = () => {
    const {
        isTextModalOpen,
        isEmailModalOpen,
        toggleTextModal,
        toggleEmailModal,
        setIsTextModalOpen,
        setIsEmailModalOpen
    } = useContact();
    const menuRef = useRef(null);

    const openTextModal = (e) => {
        e.preventDefault();
        toggleTextModal();
    };

    const openEmailModal = (e) => {
        e.preventDefault();
        toggleEmailModal();
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
                    <a href="https://wa.me/17045848280" target="_blank" rel="noopener noreferrer" className="sticky-menu-item" title="WhatsApp">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                        </svg>
                        <span>WhatsApp</span>
                    </a>
                    <a href="tel:17045848280" className="sticky-menu-item" title="Call Us">
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
                    <a href="sms:17045848280"
                        className="sticky-menu-item"
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
