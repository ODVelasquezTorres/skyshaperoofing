import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CloudLightning, Home, Wrench, CheckCircle2 } from 'lucide-react';
import './RoofingProcess.css';

const RoofingProcess = () => {
    const [showRetail, setShowRetail] = useState(false);

    const handleScheduleClick = () => {
        document.querySelector('.btn-login')?.click();
    };

    const componentsList = [
        "Roofing",
        "Siding",
        "Soffit",
        "Fascia",
        "Gutters",
        "Windows"
    ];

    return (
        <div className="roofing-process-wrapper">
            {/* 1. Introduction Section */}
            <section className="rp-intro text-center">
                <span className="rp-badge">OUR PROCESS</span>
                <h1 className="rp-title">Which service do I need?</h1>
                <p className="rp-description">
                    To determine the right solution your home deserves, we must first understand the path ahead. Analyze the following process to see how we care for your property.
                </p>
            </section>

            {/* 2. Storm Damage Section */}
            <section className="rp-section rp-storm">
                <div className="rp-container grid-2-col">
                    <div className="rp-content">
                        <div className="rp-icon-wrapper blue-icon">
                            <CloudLightning size={32} />
                        </div>
                        <h2>Storm Damage Assessment</h2>
                        <p>
                            Storms are the primary cause for interpreting whether a property needs basic maintenance, a targeted repair, or a <strong>Full Replacement</strong>. High winds and large hail can compromise the integrity of your exterior systems long before leaks appear inside.
                        </p>
                        <p className="rp-action-call">
                            <em>The first step is scheduling an inspection with Skyshape.</em>
                        </p>
                        <button className="btn btn-primary mt-4" onClick={handleScheduleClick}>
                            Schedule Inspection
                        </button>
                    </div>
                    <div className="rp-image-box">
                        <img src="/storm-damage.png" alt="House with storm damage" className="rp-img" />
                    </div>
                </div>
            </section>

            {/* 3. Professional Inspection Section (Inverted) */}
            <section className="rp-section rp-inspection bg-slate-50">
                <div className="rp-container grid-2-col inverted">
                    <div className="rp-image-box">
                        <img src="/roofrepairs.jpg" alt="Professional roofing inspector" className="rp-img" />
                    </div>
                    <div className="rp-content">
                        <div className="rp-icon-wrapper dark-icon">
                            <ShieldCheck size={32} />
                        </div>
                        <h2>Professional Inspection</h2>
                        <p>
                            Our certified team conducts an exhaustive review of your entire exterior envelope. We meticulously document the condition of all critical components to ensure nothing is overlooked:
                        </p>
                        <ul className="rp-component-list">
                            {componentsList.map((item, idx) => (
                                <li key={idx}><CheckCircle2 size={18} className="check-icon" /> {item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 4. The Decision Point */}
            <section className="rp-section rp-decision">
                <div className="rp-container text-center">
                    <span className="rp-badge dark">THE DECISION</span>
                    <h2>Ethics & Honesty First</h2>
                    <p className="rp-decision-text">
                        The path to take depends on two factors: <strong>the magnitude of the damage and your economy</strong>.
                    </p>
                    <p className="rp-decision-subtext">
                        This is where the honesty and ethics that characterize Skyshape come into play. One of our professionals will sit down with you to thoroughly explain the inspection results and present transparent, viable options.
                    </p>

                    <div className="rp-decision-actions">
                        <Link to="/insurance-claim" className="btn-decision btn-insurance">
                            Insurance Claim
                        </Link>
                        <button
                            className={`btn-decision btn-retail ${showRetail ? 'active' : ''}`}
                            onClick={() => setShowRetail(!showRetail)}
                        >
                            Retail Solution
                        </button>
                    </div>
                </div>
            </section>

            {/* 5. Retail Details (Toggleable) */}
            {showRetail && (
                <section className="rp-section rp-retail-details fade-in">
                    <div className="rp-container">
                        <div className="rp-retail-grid">

                            {/* Repair Block */}
                            <div className="rp-retail-card">
                                <div className="card-icon-box">
                                    <Wrench size={28} />
                                </div>
                                <h3>Roof Repair</h3>
                                <p className="card-desc">
                                    Minimum replacement of affected areas to leave your property in pre-loss conditions.
                                </p>
                                <div className="card-components">
                                    <strong>Scope covers affected:</strong>
                                    <div className="pill-list">
                                        {componentsList.map((item, idx) => (
                                            <span key={idx} className="pill">{item}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Full Replacement Block */}
                            <div className="rp-retail-card highlight-card">
                                <div className="card-icon-box">
                                    <Home size={28} />
                                </div>
                                <h3>Full Replacement</h3>
                                <p className="card-desc">
                                    Complete system replacement according to local IRC standards, guaranteeing long-term protection.
                                </p>
                                <div className="card-components">
                                    <strong>Complete overhaul of:</strong>
                                    <div className="pill-list">
                                        {componentsList.map((item, idx) => (
                                            <span key={idx} className="pill">{item}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <button className="btn btn-quote-action" onClick={handleScheduleClick}>
                                Get a Free Quote
                            </button>
                        </div>
                    </div>
                </section>
            )}

        </div>
    );
};

export default RoofingProcess;
