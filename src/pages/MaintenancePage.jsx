import React from 'react';
import './MaintenancePage.css';
import { BadgeCheck, Calendar, Droplets, Leaf, Scissors, SprayCan } from 'lucide-react';

const MaintenancePage = () => {
    return (
        <div className="maintenance-page">
            {/* Hero Section */}
            <section className="maintenance-hero">
                <div className="container hero-content">
                    <h1 className="maintenance-headline">Comprehensive Home Maintenance</h1>
                    <p className="maintenance-subheadline">
                        Protect your investment with our professional exterior maintenance services. We ensure your property looks great and functions perfectly all year round.
                    </p>
                </div>
            </section>

            {/* Gutter Cleaning Section (Image Left) */}
            <section className="maintenance-service-section bg-white">
                <div className="container">
                    <div className="service-card image-left">
                        <div className="service-image-container">
                            <div className="service-image-placeholder gutter-img">
                                <div className="service-badge-img">
                                    <Droplets size={16} /> Gutters
                                </div>
                            </div>
                        </div>
                        <div className="service-content">
                            <span className="category-label">EXTERIOR SERVICES</span>
                            <h2>Gutter Cleaning & Maintenance</h2>
                            <p className="service-description">
                                Protect your home's foundation and exterior with professional gutter cleaning and maintenance. Our thorough cleaning process ensures water flows efficiently away from your property, preventing costly water damage and foundation issues.
                            </p>
                            <ul className="service-benefits">
                                <li><BadgeCheck size={18} className="check-icon" /> <strong>Debris Removal:</strong> Complete clearing of leaves, twigs, and buildup</li>
                                <li><BadgeCheck size={18} className="check-icon" /> <strong>Downspout Flushing:</strong> Ensuring proper drainage away from your home</li>
                                <li><BadgeCheck size={18} className="check-icon" /> <strong>System Inspection:</strong> Checking for leaks and structural integrity</li>
                            </ul>
                            <button className="btn-get-estimate">
                                <Calendar size={18} /> Get Free Estimate
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Roof Cleaning Section (Image Right) */}
            <section className="maintenance-service-section bg-light">
                <div className="container">
                    <div className="service-card image-right">
                        <div className="service-content">
                            <span className="category-label">ROOFING SERVICES</span>
                            <h2>Professional Roof Cleaning</h2>
                            <p className="service-description">
                                Extend the lifespan of your roof by removing harmful moss, algae, lichen, and debris. Our gentle soft-washing technique restores your roof's original beauty without damaging the shingles or compromising your warranty.
                            </p>
                            <ul className="service-benefits">
                                <li><BadgeCheck size={18} className="check-icon" /> <strong>Algae & Moss Removal:</strong> Eliminate dark streaks and harmful growth</li>
                                <li><BadgeCheck size={18} className="check-icon" /> <strong>Damage Prevention:</strong> Prevent root structures from lifting shingles</li>
                                <li><BadgeCheck size={18} className="check-icon" /> <strong>Curb Appeal:</strong> Instantly transform the look of your home's exterior</li>
                            </ul>
                            <button className="btn-get-estimate">
                                <Calendar size={18} /> Get Free Estimate
                            </button>
                        </div>
                        <div className="service-image-container">
                            <div className="service-image-placeholder roof-img">
                                <div className="service-badge-img">
                                    <SprayCan size={16} /> Roof Cleaning
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tree Trimming Section (Image Left) */}
            <section className="maintenance-service-section bg-white">
                <div className="container">
                    <div className="service-card image-left">
                        <div className="service-image-container">
                            <div className="service-image-placeholder tree-img">
                                <div className="service-badge-img">
                                    <Scissors size={16} /> Tree Services
                                </div>
                            </div>
                        </div>
                        <div className="service-content">
                            <span className="category-label">LANDSCAPE & SAFETY</span>
                            <h2>Tree Trimming Solutions</h2>
                            <p className="service-description">
                                Protect your property from overhanging branches and potential storm damage. Our expert tree trimming enhances safety, improves sunlight exposure to your roof, and prevents costly structural damage caused by falling limbs.
                            </p>
                            <ul className="service-benefits">
                                <li><BadgeCheck size={18} className="check-icon" /> <strong>Safety Pruning:</strong> Removal of dead, diseased, or hazardous branches</li>
                                <li><BadgeCheck size={18} className="check-icon" /> <strong>Roof Clearance:</strong> Keeping branches away from your shingles and gutters</li>
                                <li><BadgeCheck size={18} className="check-icon" /> <strong>Tree Health:</strong> Promoting healthy growth and structural integrity</li>
                            </ul>
                            <button className="btn-get-estimate">
                                <Calendar size={18} /> Get Free Estimate
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Driveway Power Washing Section (Image Right) */}
            <section className="maintenance-service-section bg-light">
                <div className="container">
                    <div className="service-card image-right">
                        <div className="service-content">
                            <span className="category-label">SURFACE CLEANING</span>
                            <h2>Driveway Power Washing</h2>
                            <p className="service-description">
                                Revitalize your home's curb appeal with our professional power washing services. We utilize advanced pressure washing equipment to safely and effectively remove stubborn dirt, oil stains, mold, and buildup from your driveway and walkways.
                            </p>
                            <ul className="service-benefits">
                                <li><BadgeCheck size={18} className="check-icon" /> <strong>Deep Stain Removal:</strong> Eliminating oil, rust, and tire marks</li>
                                <li><BadgeCheck size={18} className="check-icon" /> <strong>Safety Enhancement:</strong> Reducing slip hazards by removing algae and mildew</li>
                                <li><BadgeCheck size={18} className="check-icon" /> <strong>Surface Preservation:</strong> Extending the life of your concrete or asphalt</li>
                            </ul>
                            <button className="btn-get-estimate">
                                <Calendar size={18} /> Get Free Estimate
                            </button>
                        </div>
                        <div className="service-image-container">
                            <div className="service-image-placeholder power-wash-img">
                                <div className="service-badge-img">
                                    <Droplets size={16} /> Power Washing
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default MaintenancePage;
