import React, { useState } from 'react';
import './TextUsModal.css';
import { X, ArrowLeft, User, Phone, MessageSquare, CheckCircle } from 'lucide-react';

const TextUsModal = ({ isOpen, onClose, isEmbedded = false }) => {
    if (!isOpen && !isEmbedded) return null;

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        message: '',
        consent: 'yes'
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

        // Construct SMS body with proper line breaks
        const messageBody = `New Inquiry from Website:\n\n` +
            `Name: ${formData.firstName} ${formData.lastName}\n` +
            `Phone: ${formData.phone}\n` +
            `Message: ${formData.message}\n` +
            `Consent: ${formData.consent === 'yes' ? 'Yes' : 'No'}`;

        // Robust encoding for all devices
        const encodedBody = encodeURIComponent(messageBody);

        // Open SMS app
        window.location.href = `sms:+17045848280?body=${encodedBody}`;

        if (onClose) onClose();
    };

    const formContent = (
        <form className="text-us-form" onSubmit={handleSubmit}>

            {/* Logo Section for Embedded View */}
            {isEmbedded && (
                <div className="modal-logo-header">
                    <img src="/logo-factorizado.jpg" alt="SkyShape Roofing" className="modal-top-logo" />
                </div>
            )}

            <div className="text-us-intro" style={isEmbedded ? { textAlign: 'center', marginBottom: '24px' } : {}}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Send us a text</h2>
                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Let us know what you need, and we'll get back to you as soon as we can.</p>
            </div>

            <div className="form-row">
                <div className="input-group-icon">
                    <User size={18} className="input-icon" />
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name*"
                        className="text-us-input with-icon"
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
                        className="text-us-input with-icon"
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
                    className="text-us-input with-icon"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="input-group-icon select-wrapper">
                <CheckCircle size={18} className="input-icon" />
                <select
                    name="consent"
                    className="text-us-select with-icon"
                    value={formData.consent}
                    onChange={handleChange}
                >
                    <option value="yes">Yes, you can text me at this number</option>
                    <option value="no">No, please call me instead</option>
                </select>
            </div>

            <div className="input-group-icon textarea-wrapper">
                <MessageSquare size={18} className="input-icon textarea-icon" />
                <textarea
                    name="message"
                    placeholder="Message*"
                    className="text-us-textarea with-icon"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>

            {/* Disclaimer */}
            <div className="text-us-disclaimer" style={{ textAlign: 'center', fontSize: '0.7rem' }}>
                By submitting this form, you acknowledge and agree to our Privacy Policy.
                Msg & data rates may apply. Reply STOP to opt out.
            </div>

            {/* Footer Actions */}
            <div className="text-us-footer" style={{ borderTop: 'none', marginTop: '16px', paddingTop: '0' }}>
                {!isEmbedded ? (
                    <button type="button" className="text-us-close-btn back-btn" onClick={onClose}>
                        <ArrowLeft size={18} /> Back
                    </button>
                ) : null}

                <button type="submit" className="send-btn premium-gradient" style={{ width: '100%', borderRadius: '12px', padding: '16px' }}>
                    Send My Message
                </button>
            </div>
        </form>
    );

    if (isEmbedded) {
        return (
            <div className="text-us-modal embedded" onClick={(e) => e.stopPropagation()}>
                {formContent}
            </div>
        );
    }

    return (
        <div className="text-us-overlay" onClick={onClose}>
            <div className="text-us-modal" onClick={(e) => e.stopPropagation()}>
                {/* Fallback header for non-embedded view */}
                <div className="text-us-header">
                    <img src="/logo-scrolled.png" alt="Skyshape Roofing Logo" className="text-us-logo" />
                    <button className="text-us-close-btn" onClick={onClose} aria-label="Close modal">
                        <X size={24} />
                    </button>
                </div>
                {formContent}
            </div>
        </div>
    );
};

export default TextUsModal;
