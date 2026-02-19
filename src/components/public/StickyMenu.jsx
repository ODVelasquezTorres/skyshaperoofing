import React from 'react';
import { MessageCircle, Phone, Smartphone, HelpCircle } from 'lucide-react';
import './StickyMenu.css';

const StickyMenu = () => {
    return (
        <div className="sticky-menu-container">
            <a href="#chat" className="sticky-menu-item" onClick={(e) => e.preventDefault()} title="Start a Chat">
                <MessageCircle size={24} />
                <span>Chat Now</span>
            </a>
            <a href="tel:+19191234567" className="sticky-menu-item" title="Call for Emergency">
                <Phone size={24} />
                <span>Emergency</span>
            </a>
            <a href="sms:+19191234567" className="sticky-menu-item" title="Send a Text">
                <Smartphone size={24} />
                <span>Text Us</span>
            </a>
            <a href="mailto:info@skyshaperoofing.com" className="sticky-menu-item" title="Frequently Asked Questions">
                <HelpCircle size={24} />
                <span>FAQ</span>
            </a>
        </div>
    );
};

export default StickyMenu;
