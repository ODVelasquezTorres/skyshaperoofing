import React from 'react';
import Hero from '../components/public/Hero';
import Specialties from '../components/public/Specialties';
import { Star, ShieldCheck, Award } from 'lucide-react';
import ReviewsSection from '../components/public/ReviewsSection';
import AboutUs from '../components/public/AboutUs';
import FAQSection from '../components/public/FAQSection';
import ProcessFlow from '../components/public/ProcessFlow';
import './LandingPage.css';

const BeforeAfterSlider = React.lazy(() => 
    import('../components/public/BeforeAfterSlider.jsx')
);

const LandingPage = () => {
    return (
        <>
            {/* Hero Section */}
            <Hero />

            {/* Trust Bar */}
            <section className="trust-bar bg-white">
                <div className="container flex justify-between items-center">
                    <div className="trust-item flex items-center gap-sm">
                        <Star className="text-warning" size={20} fill="currentColor" />
                        <span>5-Star Rated</span>
                    </div>
                    <div className="vertical-divider"></div>
                    <div className="trust-item">
                        <span>50+ Projects</span>
                    </div>
                    <div className="vertical-divider"></div>
                    <div className="trust-item flex items-center gap-sm">
                        <Award size={20} />
                        <span>Licensed</span>
                    </div>
                    <div className="vertical-divider"></div>
                    <div className="trust-item flex items-center gap-sm">
                        <ShieldCheck size={20} />
                        <span>Insurance Verified</span>
                    </div>
                    <div className="vertical-divider"></div>
                    <div className="trust-item">
                        <span>Warranty Guaranteed</span>
                    </div>
                </div>
            </section>

            {/* Our Specialties */}
            <Specialties />

            {/* Our Process Section */}
            <ProcessFlow />

            {/* About Us */}
            <AboutUs />

            {/* FAQs */}
            <FAQSection />


            {/* Before After Lazy Loaded */}
            <React.Suspense fallback={
                <div style={{ height: '400px', background: '#f1f5f9' }} />
            }>
                <BeforeAfterSlider />
            </React.Suspense>

            {/* Testimonials */}
            <ReviewsSection />

        </>
    );
};

export default LandingPage;
