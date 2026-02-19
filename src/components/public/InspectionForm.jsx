import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Phone, Send, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import './InspectionForm.css';

const InspectionForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        phone: '',
        serviceType: 'Residential Roofing',
        message: ''
    });

    const [status, setStatus] = useState('idle'); // idle, loading, success

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            navigate('/thank-you');
        }, 1500);
    };

    if (status === 'success') {
        return (
            <div className="inspection-card success-view fade-in-up">
                <div className="success-icon-wrapper">
                    <CheckCircle size={64} className="text-green-500" />
                </div>
                <h3>Request Received!</h3>
                <p>Thank you, {formData.fullName.split(' ')[0]}. We've received your inspection request.</p>
                <p className="success-subtext">A SkyShape specialist will verify your address and contact you shortly at {formData.phone}.</p>
                <button
                    className="btn-reset"
                    onClick={() => setStatus('idle')}
                >
                    Submit another request
                </button>
            </div>
        );
    }

    return (
        <div className="inspection-card fade-in-up" id="inspection-form">
            <div className="form-header">
                <h3>Get Your Free Inspection</h3>
                <p>Fill out the form below and a specialist will contact you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="inspection-form">
                {/* Full Name */}
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="form-input"
                    />
                </div>

                {/* Property Address */}
                <div className="form-group">
                    <label htmlFor="address">Property Address</label>
                    <div className="input-with-icon">
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="123 Main St, Charlotte, NC"
                            required
                            className="form-input"
                        />
                        <MapPin size={18} className="input-icon" />
                    </div>
                </div>

                {/* Phone & Service Grid */}
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <div className="input-with-icon">
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="(555) 123-4567"
                                required
                                className="form-input"
                            />
                            <Phone size={18} className="input-icon" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="serviceType">Service Type</label>
                        <div className="select-wrapper">
                            <select
                                id="serviceType"
                                name="serviceType"
                                value={formData.serviceType}
                                onChange={handleChange}
                                className="form-select"
                            >
                                <option value="Residential Roofing">Residential Roofing</option>
                                <option value="Commercial Roofing">Commercial Roofing</option>
                                <option value="Storm Damage Repair">Storm Damage Repair</option>
                                <option value="Gutter Installation">Gutter Installation</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Message */}
                <div className="form-group">
                    <label htmlFor="message">Message (Optional)</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us a bit about your roof's condition..."
                        className="form-textarea"
                        rows="3"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className={`btn-submit ${status === 'loading' ? 'loading' : ''}`}
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? 'Sending Request...' : (
                        <>
                            Send My Request <ArrowRight size={20} />
                        </>
                    )}
                </button>

                {/* Trust Indicators */}
                <div className="trust-indicators">
                    <div className="trust-item">
                        <ShieldCheck size={16} className="trust-icon" />
                        <span>Your data is 100% secure.</span>
                    </div>
                    <span className="trust-badge">Free & No Obligation</span>
                </div>
            </form>
        </div>
    );
};

export default InspectionForm;
