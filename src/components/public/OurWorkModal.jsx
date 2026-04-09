import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './OurWorkModal.css';

const OurWorkModal = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState('antes');
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = {
        antes: [
            "/carrusel/antes.jpeg"
        ],
        proceso: [
            "/carrusel/proceso 1.jpeg",
            "/carrusel/proceso 2.jpeg",
            "/carrusel/proceso 3.jpeg",
            "/carrusel/proceso 4.jpeg",
            "/carrusel/proceso 5.jpeg"
        ],
        despues: [
            "/carrusel/despues 1.jpeg",
            "/carrusel/despues 2.jpeg",
            "/carrusel/despues 3.jpeg"
        ]
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setCurrentIndex(0);
    };

    const handlePrevious = () => {
        const currentImages = images[activeTab];
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        const currentImages = images[activeTab];
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

    const currentImagesList = images[activeTab];

    return (
        <div className="our-work-backdrop" onClick={handleBackdropClick}>
            <div className="our-work-modal">
                <button className="our-work-close" onClick={onClose} aria-label="Close modal">
                    <X size={24} />
                </button>
                
                <div className="our-work-header">
                    <h2 className="our-work-title">Mr. Armendariz's House — Full Roof Replacement</h2>
                </div>

                <div className="our-work-tabs">
                    <button 
                        className={`our-work-tab ${activeTab === 'antes' ? 'active' : ''}`}
                        onClick={() => handleTabChange('antes')}
                    >
                        Before
                    </button>
                    <button 
                        className={`our-work-tab ${activeTab === 'proceso' ? 'active' : ''}`}
                        onClick={() => handleTabChange('proceso')}
                    >
                        In Progress
                    </button>
                    <button 
                        className={`our-work-tab ${activeTab === 'despues' ? 'active' : ''}`}
                        onClick={() => handleTabChange('despues')}
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
                        <p>Mr. Armendáriz's home is located in the <span className="highlight-text">Windsor Park</span> area of <span className="highlight-text">East Charlotte</span>, in the city of Charlotte.</p>
                        <p>This was an <span className="highlight-text">insurance-processed</span> project, and we are very pleased to have completed his roof replacement. Due to its previous condition, the property was at high risk of leaks and potential structural damage in the future.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWorkModal;
