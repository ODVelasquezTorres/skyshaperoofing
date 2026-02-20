import React from 'react';
import { ArrowRight, Shield, Search, Award } from 'lucide-react';
import './Hero.css';
// import heroBg from '../../assets/hero-bg-final.png';

const Hero = () => {
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
                    <img src="/logo.png" alt="SkyShape Roofing" className="hero-logo-img" />
                    <h1 className="hero-title">
                        Everything you love lives under your roof. <br />
                        <span className="hero-highlight">Protect it with the best.</span>
                    </h1>
                    <p className="hero-description">
                        Experience matters. Quality covers. The best warranty in NC.
                    </p>

                    <div className="hero-actions">
                        <button className="btn btn-primary">
                            Get Free Estimate
                        </button>
                        <button className="btn btn-secondary">
                            View Our Work
                        </button>
                    </div>

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
