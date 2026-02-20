import React, { useState } from 'react';
import './EmailUsModal.css';
import { X, ArrowLeft, User, Phone, Mail, MessageSquare } from 'lucide-react';

const EmailUsModal = ({ isOpen, onClose, isEmbedded = false }) => {
    if (!isOpen && !isEmbedded) return null;

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
        consent: 'text'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent("New Inquiry from Website - Skyshape Roofing");
        const bodyContent = `Name: ${formData.firstName} ${formData.lastName}
Phone: ${formData.phone}
Email: ${formData.email}
Prefer contact by: ${formData.consent === 'text' ? 'Text' : 'Other'}

Message:
${formData.message}`;

        const body = encodeURIComponent(bodyContent);
        window.location.href = `mailto:info@skyshaperoofing.com?subject=${subject}&body=${body}`;

        if (onClose) onClose();
    };

    const formContent = (
        <form className="email-us-form" onSubmit={handleSubmit}>

            {/* Logo Section for Embedded View */}
            {isEmbedded && (
                <div className="modal-logo-header">
                    <img src="/logo-factorizado.jpg" alt="SkyShape Roofing" className="modal-top-logo" />
                </div>
            )}

            <div className="email-us-intro" style={isEmbedded ? { textAlign: 'center', marginBottom: '24px' } : {}}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Send us an email</h2>
                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Please enter your name and contact info.</p>
            </div>

            <div className="form-row">
                <div className="input-group-icon">
                    <User size={18} className="input-icon" />
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name*"
                        className="email-us-input with-icon"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group-icon">
                    <User size={18} className="input-icon" />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name*"
                        className="email-us-input with-icon"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="input-group-icon">
                <Phone size={18} className="input-icon" />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    className="email-us-input with-icon"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="contact-pref-group">
                <label style={{ fontSize: '0.85rem', color: '#718096', marginBottom: '4px', display: 'block' }}>Can we text you?*</label>
                <div className="input-group-icon select-wrapper" style={{ marginTop: '0' }}>
                    <MessageSquare size={18} className="input-icon" />
                    <select
                        name="consent"
                        className="email-us-select with-icon"
                        value={formData.consent}
                        onChange={handleChange}
                    >
                        <option value="text">Yes, you can text me at this number</option>
                        <option value="call">No, please call/email instead</option>
                    </select>
                </div>
            </div>

            <div className="input-group-icon">
                <Mail size={18} className="input-icon" />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address*"
                    className="email-us-input with-icon"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="input-group-icon textarea-wrapper">
                <MessageSquare size={18} className="input-icon textarea-icon" />
                <textarea
                    name="message"
                    placeholder="Message*"
                    className="email-us-textarea with-icon"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>

            <div className="email-us-disclaimer" style={{ textAlign: 'center', fontSize: '0.7rem' }}>
                By submitting this form, you acknowledge and agree to our Privacy Policy.
            </div>

            {/* Footer Actions */}
            <div className="email-us-footer" style={{ borderTop: 'none', marginTop: '16px', paddingTop: '0' }}>
                {!isEmbedded ? (
                    <button type="button" className="email-back-btn back-btn" onClick={onClose}>
                        <ArrowLeft size={18} /> Back
                    </button>
                ) : null}

                <button type="submit" className="email-send-btn premium-gradient" style={{ width: '100%', borderRadius: '12px', padding: '16px' }}>
                    Send My Message
                </button>
            </div>
        </form>
    );

    if (isEmbedded) {
        return (
            <div className="email-us-modal embedded" onClick={(e) => e.stopPropagation()}>
                {formContent}
            </div>
        );
    }

    return (
        <div className="email-us-overlay" onClick={onClose}>
            <div className="email-us-modal" onClick={(e) => e.stopPropagation()}>
                {/* Fallback header */}
                <div className="email-us-header">
                    <img src="/logo-scrolled.png" alt="Skyshape Roofing Logo" className="email-us-logo" />
                    <button className="email-us-close-btn" onClick={onClose} aria-label="Close modal">
                        <X size={24} />
                    </button>
                </div>
                {formContent}
            </div>
        </div>
    );
};

export default EmailUsModal;
