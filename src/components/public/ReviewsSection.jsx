import React, { useEffect } from 'react';
import './ReviewsSection.css';

const ReviewsSection = () => {
    useEffect(() => {
        // Ensure Elfsight initializes when component mounts
        if (window.ElfsightPlatform && typeof window.ElfsightPlatform.init === 'function') {
            window.ElfsightPlatform.init();
        }
    }, []);

    return (
        <section className="reviews-section section-padding bg-white" id="testimonials">
            <div className="container">
                <div
                    className="elfsight-app-6a2369f4-18c0-45c6-86e4-7b24014fed8c"
                    data-elfsight-app-lazy
                ></div>
            </div>
        </section>
    );
};

export default ReviewsSection;
