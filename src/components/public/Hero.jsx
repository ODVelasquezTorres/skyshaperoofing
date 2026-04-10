import React, { useState } from 'react';
import { ArrowRight, Shield, Search, Award } from 'lucide-react';
import { useContact } from '../../context/ContactContext';
import './Hero.css';
import OurWorkModal from './OurWorkModal';
import GalleryModal from './GalleryModal';

const Hero = () => {
    const { openEmailModal } = useContact();
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleSelectProject = (project) => {
        setSelectedProject(project);
        setIsGalleryOpen(false);
    };

    const handleBackToGallery = () => {
        setSelectedProject(null);
        setIsGalleryOpen(true);
    };

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
                        <button className="btn btn-secondary" onClick={() => setIsGalleryOpen(true)}>
                            View Our Work
                        </button>
                    </div>

                    {isGalleryOpen && (
                        <GalleryModal 
                            onClose={() => setIsGalleryOpen(false)} 
                            onSelectProject={handleSelectProject} 
                        />
                    )}

                    {selectedProject && (
                        <OurWorkModal 
                            onClose={() => setSelectedProject(null)} 
                            onBack={handleBackToGallery}
                            project={selectedProject} 
                        />
                    )}

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

