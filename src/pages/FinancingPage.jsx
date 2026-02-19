import React from 'react';
import { CheckCircle } from 'lucide-react';
import './FinancingPage.css';

const FinancingPage = () => {
    return (
        <div className="financing-page">
            {/* Hero */}
            <section className="financing-hero">
                <div className="container">
                    <h1 className="financing-page-headline">Investing in Your Home&apos;s Future.</h1>
                    <p className="financing-page-subheadline">
                        Flexible payment plans designed for homeowners who value premium protection.
                    </p>
                </div>
            </section>

            {/* Banner */}
            <section className="financing-banner-section">
                <div className="container">
                    <div className="financing-banner">
                        <div className="financing-image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop"
                                alt="Investing in your home future"
                                className="financing-image"
                            />
                        </div>
                        <div className="financing-content">
                            <div className="financing-icon-wrapper">
                                <CheckCircle size={28} strokeWidth={1.5} />
                            </div>
                            <h2 className="financing-headline">Premium Protection, Made Accessible.</h2>
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
        </div>
    );
};

export default FinancingPage;
