import React, { useState } from 'react';
const antes1 = "https://placehold.co/800x600/e2e8f0/475569?text=Before+1";
const antes2 = "https://placehold.co/800x600/e2e8f0/475569?text=Before+2";
const resultado1 = "https://placehold.co/800x600/f8fafc/0f172a?text=After+1";
const resultado2 = "https://placehold.co/800x600/f8fafc/0f172a?text=After+2";
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

    const handleClick = () => {
        if (window.matchMedia('(hover: none)').matches) {
            setIsFlipped(!isFlipped);
        }
    };

    const handleMouseEnter = () => {
        if (!window.matchMedia('(hover: none)').matches) {
            setIsFlipped(true);
        }
    };

    const handleMouseLeave = () => {
        if (!window.matchMedia('(hover: none)').matches) {
            setIsFlipped(false);
        }
    };

    return (
        <div 
            className="ba-flip-card-container"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="card-wrapper">
                <div className={`ba-flip-card ${isFlipped ? 'flipped' : ''}`}>
                    <div className="ba-flip-inner">
                        {/* After image is UNDER the before image since it reveals */}
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
                        </div>

                        {/* Before image is ON TOP, masking its way out */}
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
                        </div>
                        
                        <div className="ba-flip-indicator">
                            <span className="text-rest">→ See the result</span>
                            <span className="text-revealed">← See before</span>
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
            </div>
        </section>
    );
};

export default BeforeAfterSlider;
