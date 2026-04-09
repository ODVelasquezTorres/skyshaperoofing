import React, { useState } from 'react';
import { ArrowRight, Shield, Search, Award } from 'lucide-react';
import { useContact } from '../../context/ContactContext';
import './Hero.css';
import OurWorkModal from './OurWorkModal';
// import heroBg from '../../assets/hero-bg-final.png';

const Hero = () => {
    const { openEmailModal } = useContact();
    const [isOurWorkOpen, setIsOurWorkOpen] = useState(false);
    return (
        <section
            className="hero-section"
            style={{
                backgroundImage: 'url(/fondo.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <div className="hero-text-container">
                    <img src="/logocambio.png" alt="Skyshape Roofing" className="mobile-only-logo" />
                    <h1 className="hero-title">
                        <span className="hero-highlight">Everything you love lives under your roof.</span> <br />
                        Protect it with the best.
                    </h1>
                    <p className="hero-description">
                        Experience matters. Quality covers. The best warranty in NC.
                    </p>

                    <div className="hero-actions">
                        <button className="btn btn-primary" onClick={openEmailModal}>
                            Get Free Estimate
                        </button>
                        <button className="btn btn-secondary" onClick={() => setIsOurWorkOpen(true)}>
                            View Our Work
                        </button>
                    </div>

                    {isOurWorkOpen && <OurWorkModal onClose={() => setIsOurWorkOpen(false)} />}

                    <div className="hero-trust-badges">
                        <span className="badge-item"><Shield size={20} className="badge-icon" /> Licensed & Insured</span>
                        <span className="separator">•</span>
                        <span className="badge-item"><Search size={20} className="badge-icon" /> Free Inspection</span>
                        <span className="separator">•</span>
                        <span className="badge-item"><Award size={20} className="badge-icon" /> 10+ Years Experience</span>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Hero;
