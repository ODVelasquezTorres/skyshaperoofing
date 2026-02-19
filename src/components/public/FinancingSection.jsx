import React from 'react';
import { CheckCircle } from 'lucide-react';
import './FinancingSection.css';

const FinancingSection = () => {
    return (
        <section className="financing-section">
            <div className="container">
                <div className="financing-banner">
                    {/* Left: Image */}
                    <div className="financing-image-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
                            alt="Investing in your home's future"
                            className="financing-image"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="financing-content">
                        <div className="financing-icon-wrapper">
                            <CheckCircle size={28} strokeWidth={1.5} />
                        </div>
                        <h2 className="financing-headline">Investing in Your Home&apos;s Future.</h2>
                        <p className="financing-text">
                            We believe premium protection should be accessible. SkyShape is currently finalizing partnerships with top-tier financial institutions to bring you flexible, low-interest payment plans.
                        </p>
                        <p className="financing-note">
                            Comprehensive financing options will be available very soon.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinancingSection;
