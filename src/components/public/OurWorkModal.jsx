import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './OurWorkModal.css';

const OurWorkModal = ({ onClose, onBack, project }) => {
    const [activeTab, setActiveTab] = useState('before');
    const [currentIndex, setCurrentIndex] = useState(0);

    const safeProject = project || {
        id: 1,
        title: "Mr. Armendariz's House — Full Roof Replacement",
        tag: "Roof Replacement",
        cover: "/carrusel/despues 1.jpeg",
        phases: {
            before: ["/carrusel/antes.jpeg"],
            inProgress: ["/carrusel/proceso 1.jpeg", "/carrusel/proceso 2.jpeg", "/carrusel/proceso 3.jpeg", "/carrusel/proceso 4.jpeg", "/carrusel/proceso 5.jpeg"],
            after: ["/carrusel/despues 1.jpeg", "/carrusel/despues 2.jpeg", "/carrusel/despues 3.jpeg"]
        },
        description: [
            "Mr. Armendáriz's home is located in the Windsor Park area of East Charlotte, in the city of Charlotte.",
            "This was an insurance-processed project, and we are very pleased to have completed his roof replacement. Due to its previous condition, the property was at high risk of leaks and potential structural damage in the future."
        ]
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setCurrentIndex(0);
    };

    const handlePrevious = () => {
        const currentImages = safeProject.phases[activeTab];
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        const currentImages = safeProject.phases[activeTab];
        setCurrentIndex((prevIndex) => 
            prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Close modal when clicking outside
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const currentImagesList = safeProject.phases[activeTab] || safeProject.phases.before;

    return (
        <div className="our-work-backdrop" onClick={handleBackdropClick}>
            <div className="our-work-modal">
                <button className="our-work-close" onClick={onClose} aria-label="Close modal">
                    <X size={24} />
                </button>
                
                <div className="our-work-header">
                    <div className="our-work-navigation">
                        <button className="back-to-gallery" onClick={onBack}>
                            <ChevronLeft size={18} />
                            Back to gallery
                        </button>
                    </div>
                    <h2 className="our-work-title">{safeProject.title}</h2>
                </div>

                <div className="our-work-tabs">
                    <button 
                        className={`our-work-tab ${activeTab === 'before' ? 'active' : ''}`}
                        onClick={() => handleTabChange('before')}
                    >
                        Before
                    </button>
                    <button 
                        className={`our-work-tab ${activeTab === 'inProgress' ? 'active' : ''}`}
                        onClick={() => handleTabChange('inProgress')}
                    >
                        In Progress
                    </button>
                    <button 
                        className={`our-work-tab ${activeTab === 'after' ? 'active' : ''}`}
                        onClick={() => handleTabChange('after')}
                    >
                        After
                    </button>
                </div>

                <div className="our-work-content">
                    <div className="our-work-carousel">
                        {currentImagesList.length > 1 && (
                            <button className="carousel-nav prev" onClick={handlePrevious} aria-label="Previous image">
                                <ChevronLeft size={24} />
                            </button>
                        )}
                        
                        <img 
                            src={currentImagesList[currentIndex]} 
                            alt={`Slide ${currentIndex + 1} de la etapa ${activeTab}`} 
                            key={currentImagesList[currentIndex]}
                        />
                        
                        {currentImagesList.length > 1 && (
                            <button className="carousel-nav next" onClick={handleNext} aria-label="Next image">
                                <ChevronRight size={24} />
                            </button>
                        )}
                    </div>

                    {currentImagesList.length > 1 && (
                        <div className="carousel-dots-container">
                            {currentImagesList.map((_, idx) => (
                                <span key={idx} className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}></span>
                            ))}
                        </div>
                    )}

                    <div className="our-work-description">
                        {safeProject.id === 1 ? (
                            <>
                                <p>Mr. Armendáriz's home is located in the <span className="highlight-text">Windsor Park</span> area of <span className="highlight-text">East Charlotte</span>, in the city of Charlotte.</p>
                                <p>This was an <span className="highlight-text">insurance-processed</span> project, and we are very pleased to have completed his roof replacement. Due to its previous condition, the property was at high risk of leaks and potential structural damage in the future.</p>
                            </>
                        ) : (
                            safeProject.description.map((parag, idx) => (
                                <p key={idx}>{parag}</p>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWorkModal;
