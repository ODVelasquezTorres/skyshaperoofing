import React from 'react';
import Hero from '../components/public/Hero';
import Specialties from '../components/public/Specialties';
import { Star, ShieldCheck, Award } from 'lucide-react';
import ReviewsSection from '../components/public/ReviewsSection';
import AboutUs from '../components/public/AboutUs';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <>
            {/* Hero Section */}
            <Hero />

            {/* Trust Bar */}
            <section className="trust-bar bg-white">
                <div className="container flex justify-between items-center">
                    <div className="trust-item flex items-center gap-sm">
                        <Star className="text-warning" size={20} fill="currentColor" />
                        <span>5-Star Rated</span>
                    </div>
                    <div className="vertical-divider"></div>
                    <div className="trust-item">
                        <span>50+ Projects</span>
                    </div>
                    <div className="vertical-divider"></div>
                    <div className="trust-item flex items-center gap-sm">
                        <Award size={20} />
                        <span>Licensed</span>
                    </div>
                    <div className="vertical-divider"></div>
                    <div className="trust-item flex items-center gap-sm">
                        <ShieldCheck size={20} />
                        <span>Insurance Verified</span>
                    </div>
                    <div className="vertical-divider"></div>
                    <div className="trust-item">
                        <span>Warranty Guaranteed</span>
                    </div>
                </div>
            </section>

            {/* Our Specialties */}
            <Specialties />

            {/* Process Section */}
            <section id="process" className="process-section section-padding bg-secondary">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Your home is our commitment.</h2>
                    </div>

                    <div className="process-content-wrapper">
                        {/* Left Column: Image (temporalremplazo) */}
                        <div className="process-image-container left-image">
                            <img src="/temporalremplazo.png?v=2" alt="Process details" className="process-image shadow-lg rounded-lg" />
                        </div>

                        {/* Right Column: Image */}
                        <div className="process-image-container">
                            <img src="/gestiondecaso.png?v=2" alt="Case Management Process" className="process-image shadow-lg rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us */}
            <AboutUs />

            {/* Testimonials */}
            <ReviewsSection />

        </>
    );
};

export default LandingPage;
