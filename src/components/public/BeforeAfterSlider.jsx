import React, { useState } from 'react';
import antes1 from '../../assets/slider/antes-despues/antes1.png'
import antes2 from '../../assets/slider/antes-despues/antes2.png'
import resultado1 from '../../assets/slider/antes-despues/resultado1.png'
import resultado2 from '../../assets/slider/antes-despues/resultado2.png'
import { ArrowLeftRight } from 'lucide-react';
import './BeforeAfterSlider.css';

const projects = [
    {
        id: 1,
        before: antes1,
        after: resultado1,
        altText: "Project 1 Transformation"
    },
    {
        id: 2,
        before: antes2,
        after: resultado2,
        altText: "Project 2 Transformation"
    }
];

const FlipCard = ({ project }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        // Toggle flip exclusively for mobile tap interactions
        if (window.innerWidth <= 768) {
            setIsFlipped(!isFlipped);
        }
    };

    return (
        <div 
            className="ba-flip-card-container"
            onClick={handleFlip}
        >
            <div className="card-wrapper">
                <div className={`ba-flip-card ${isFlipped ? 'flipped' : ''}`}>
                    <div className="ba-flip-inner">
                        {/* Front Face: Before */}
                        <div className="ba-flip-front">
                            <img 
                                src={project.before} 
                                alt={`Before - ${project.altText}`} 
                                loading="lazy" 
                                decoding="async" 
                                fetchPriority="low" 
                                draggable="false"
                                width="800"
                                height="600"
                            />
                            <div className="ba-badge ba-badge-before">BEFORE</div>
                            <div className="ba-flip-indicator">
                                <ArrowLeftRight size={16} />
                                <span className="desktop-text">Hover to see result</span>
                                <span className="mobile-text">Tap to see result</span>
                            </div>
                        </div>

                        {/* Back Face: After */}
                        <div className="ba-flip-back">
                            <img 
                                src={project.after} 
                                alt={`After - ${project.altText}`} 
                                loading="lazy" 
                                decoding="async" 
                                fetchPriority="low" 
                                draggable="false"
                                width="800"
                                height="600"
                            />
                            <div className="ba-badge ba-badge-after">AFTER</div>
                            <div className="ba-flip-indicator">
                                <ArrowLeftRight size={16} />
                                <span className="desktop-text">Hover to see before</span>
                                <span className="mobile-text">Tap to see before</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const BeforeAfterSlider = () => {
    return (
        <section id="before-after" className="ba-section">
            <div className="container ba-container">
                <div className="ba-header">
                    <span className="ba-subtitle">REAL RESULTS</span>
                    <h2 className="ba-title">Our Work</h2>
                    <p className="ba-paragraph">
                        See the transformation we deliver on every project.
                    </p>
                </div>
                
                <div className="ba-grid">
                    {projects.map((project) => (
                        <FlipCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BeforeAfterSlider;
