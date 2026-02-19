import React from 'react';
import { Hammer, ArrowRight, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import RoofRepairSigns from '../components/public/RoofRepairSigns';
import './RoofRepairPage.css';

const RoofRepairPage = () => {
    return (
        <div className="repair-page">
            {/* Hero Section */}
            <section className="repair-hero">
                <div className="container hero-content">
                    <div className="service-badge">
                        <Hammer size={16} />
                        <span>Professional Roof Repair</span>
                    </div>

                    <h1 className="repair-headline">Stop Leaks Before They Stop You.<br />Expert Repairs, Done Right.</h1>
                    <p className="repair-subheadline">
                        Meticulous leak detection and structural reinforcement. We don't just patch problems; we solve them for good.
                    </p>

                    <div className="hero-actions">
                        <button className="btn-repair-primary">
                            Schedule Inspection <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>

            {/* 7 Signs Section */}
            <RoofRepairSigns />

            {/* Repair Process / Why Us Section */}
            <section className="repair-details-section">
                <div className="container">
                    <div className="details-grid">
                        <div className="detail-item">
                            <ShieldCheck size={40} className="detail-icon" />
                            <h3>Certified Experts</h3>
                            <p>Our team is trained to handle all roofing materials, from asphalt shingles to slate and metal.</p>
                        </div>
                        <div className="detail-item">
                            <Clock size={40} className="detail-icon" />
                            <h3>Rapid Response</h3>
                            <p>We understand that a leak is an emergency. We prioritize urgent repair requests.</p>
                        </div>
                        <div className="detail-item">
                            <CheckCircle size={40} className="detail-icon" />
                            <h3>Warranty Backed</h3>
                            <p>We stand behind our work. All repairs come with a workmanship guarantee.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RoofRepairPage;
