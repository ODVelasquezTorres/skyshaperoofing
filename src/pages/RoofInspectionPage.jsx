import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import InspectionForm from '../components/public/InspectionForm';
import './RoofInspection.css';

const RoofInspectionPage = () => {
    const steps = [
        {
            id: '01',
            title: 'Drone Analysis',
            description: 'High-resolution aerial imagery to identify hidden structural weaknesses.'
        },
        {
            id: '02',
            title: 'Surface Audit',
            description: 'Physical walk-through to check for loose shingles and flashing gaps.'
        },
        {
            id: '03',
            title: 'Leak Detection',
            description: 'Thermal imaging to pinpoint moisture intrusion before it spreads.'
        },
        {
            id: '04',
            title: 'Digital Report',
            description: 'A comprehensive PDF with photos and graded urgency levels.'
        }
    ];

    const scrollToForm = () => {
        const formElement = document.getElementById('inspection-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="roof-inspection-page">
            <section className="inspection-section">
                <div className="container">
                    <div className="inspection-grid">

                        {/* Left Column: Content */}
                        <div className="inspection-content fade-in-left">
                            <h2 className="inspection-title">Thorough Inspections.<br />Total Transparency.</h2>

                            <div className="inspection-steps">
                                {steps.map((step) => (
                                    <div key={step.id} className="step-item">
                                        <div className="step-number">{step.id}</div>
                                        <div className="step-info">
                                            <h3 className="step-title">{step.title}</h3>
                                            <p className="step-desc">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* 50-Point Diagnostic Checklist */}
                            <div className="checklist-card fade-in-up">
                                <h4 className="checklist-header">The 50-Point Diagnostic Checklist</h4>
                                <div className="checklist-grid">
                                    {[
                                        "Shingle Integrity",
                                        "Flashings & Sealants",
                                        "Gutters & Drainage",
                                        "Vents & Penetrations",
                                        "Structural Decking",
                                        "Attic Ventilation"
                                    ].map((item, index) => (
                                        <div key={index} className="checklist-item" style={{ animationDelay: `${index * 0.1}s` }}>
                                            <div className="check-icon-circle">
                                                <CheckCircle2 size={14} strokeWidth={3} />
                                            </div>
                                            <span className="checklist-text">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button
                                className="btn-primary-solid"
                                style={{ marginTop: '32px' }}
                                onClick={scrollToForm}
                            >
                                Book My Free Inspection <ArrowRight size={20} />
                            </button>
                        </div>

                        {/* Right Column: Gallery */}
                        <div className="inspection-gallery fade-in-right">
                            <div className="gallery-layout">
                                {/* Tall Portrait Image (Left) */}
                                <div className="gallery-item portrait">
                                    <img
                                        src="https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                                        alt="Drone Roof Inspection"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Stacked Square Images (Right) */}
                                <div className="gallery-stack">
                                    <div className="gallery-item square">
                                        <img
                                            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                                            alt="Inspector Checking Roof"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="gallery-item square">
                                        <img
                                            src="https://images.unsplash.com/photo-1632759145351-1d592919f522?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                                            alt="Roof Shingle Detail"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Inspection Form Section */}
            {/* Inspection Form Section */}
            <section className="form-section">
                <div className="container">
                    <InspectionForm />
                </div>
            </section>
        </div>
    );
};

export default RoofInspectionPage;
