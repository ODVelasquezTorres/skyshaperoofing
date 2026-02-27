import React, { useEffect, useState } from 'react';
import { Star, ShieldCheck, Award, FileSearch, FileText, Users, Scale, CloudLightning, BadgeCheck, Zap, Umbrella, TreeDeciduous, Home, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import './InsuranceClaimPage.css';

const claimsData = [
    {
        title: "Inspection & Documentation",
        description: "Our team conducts a thorough inspection to assess the damage, accompanied by detailed documentation to support your claim. We make certain nothing is overlooked for maximum recovery.",
        icon: <FileSearch size={28} />
    },
    {
        title: "Filing the Claim",
        description: "We guide you through the paperwork, helping ensure all forms are meticulously completed and submitted. Our understanding of the process positions your claim effectively from the outset.",
        icon: <FileText size={28} />
    },
    {
        title: "Coordination with Adjusters",
        description: "We communicate effectively with adjusters, advocating for a fair assessment of your claim using negotiation techniques that protect your best interests.",
        icon: <Users size={28} />
    },
    {
        title: "Approval & Repairs",
        description: "Upon approval, we proceed with high-quality repairs backed by a three-year labor warranty and supported by certifications from leading manufacturers.",
        icon: <ShieldCheck size={28} />
    },
    {
        title: "Severe Weather Expertise",
        description: "We use local weather data to anticipate risks from Charlotte's intense thunderstorms and hail, proactively preparing your roof for our specific climate challenges.",
        icon: <CloudLightning size={28} />
    },
    {
        title: "Local Ordinances & Compliance",
        description: "We know Charlotte's building codes and permit requirements inside out, ensuring full compliance and a smooth, delay-free administrative process for your project.",
        icon: <Scale size={28} />
    }
];

const InsuranceClaimPage = () => {
    const tabs = [
        { id: 'what-is', label: 'What is it?', icon: <FileText size={18} strokeWidth={2} color="#0D223F" /> },
        { id: 'mitigation', label: 'Mitigation', icon: <Home size={18} strokeWidth={2} color="#0D223F" /> },
        { id: 'restoration', label: 'Restoration', icon: <ShieldCheck size={18} strokeWidth={2} color="#0D223F" /> },
        { id: 'tree-removal', label: 'Tree Removal', icon: <CloudLightning size={18} strokeWidth={2} color="#0D223F" /> }
    ];

    const [activeTab, setActiveTab] = useState('what-is');

    // Handle hash route for deep linking
    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash && tabs.some(t => t.id === hash)) {
            setActiveTab(hash);
            // Optional: scroll to the tabs section if needed
            const element = document.getElementById('claim-tabs-top');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    }, [window.location.hash]);

    // Scroll to top on mount
    useEffect(() => {
        if (!window.location.hash) {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <div className="insurance-page">
            {/* Hero Section */}
            <section className="insurance-hero">
                <div className="hero-overlay"></div>
                <div className="hero-content relative z-10">
                    <div className="insurance-badge">
                        <BadgeCheck size={16} />
                        <span>Professional Claims Assistance</span>
                    </div>
                    <h1 className="insurance-headline">Simplify Your Insurance Claim</h1>
                    <p className="insurance-subheadline">
                        Navigating property damage claims can be complex. We guide you every step of the way to ensure fair coverage and quality restoration.
                    </p>
                </div>
            </section>

            {/* Tab Navigation */}
            <section className="tabs-navigation-section" id="claim-tabs-top">
                <div className="container">
                    <div className="tabs-wrapper">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tab Content: What Is */}
            {activeTab === 'what-is' && (
                <div className="tab-content fade-in">
                    <section className="educational-service-section">
                        <div className="container">
                            <div className="educational-grid">
                                <div className="educational-content">
                                    <h2 className="educational-headline">What is an Insurance Claim?</h2>
                                    <p className="educational-body">
                                        An insurance claim is a formal request by a policyholder to an insurance company for coverage or compensation for a covered loss or policy event.
                                    </p>
                                    <p className="educational-body">
                                        In the roofing industry, this typically involves damage caused by unforeseen events such as <strong>hail storms, high winds, fallen trees, or severe weather</strong>. Instead of paying out-of-pocket for expensive repairs, your homeowner's insurance policy is designed to cover these restoration costs, minus your deductible.
                                    </p>
                                </div>
                                <div className="educational-media">
                                    <div className="media-placeholder-wrapper educational-media-16-9">
                                        <div className="insurance-logos-grid-wrapper">
                                            <div className="insurance-logos-grid compact">
                                                <div className="insurance-logo-item">
                                                    <img src="/state-farm.jpg" alt="State Farm" />
                                                </div>
                                                <div className="insurance-logo-item">
                                                    <img src="/allstate.png" alt="Allstate" />
                                                </div>
                                                <div className="insurance-logo-item">
                                                    <img src="/usaa.jpg" alt="USAA" />
                                                </div>
                                                <div className="insurance-logo-item">
                                                    <img src="/liberty-mutual.png" alt="Liberty Mutual" />
                                                </div>
                                                <div className="insurance-logo-item">
                                                    <img src="/farmers.png" alt="Farmers" />
                                                </div>
                                                <div className="insurance-logo-item">
                                                    <img src="/american-family.png" alt="American Family" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media-caption">Working with all major insurance carriers</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )}

            {/* Tab Content: Mitigation */}
            {activeTab === 'mitigation' && (
                <div className="tab-content fade-in">
                    <section className="educational-service-section">
                        <div className="container">
                            <div className="educational-grid">
                                <div className="educational-content">
                                    <h2 className="educational-headline">Mitigation: Your Legal Obligation as a Policyholder</h2>
                                    <p className="educational-body">
                                        Water damage is a time-critical emergency. Once moisture penetrates porous materials like drywall and wood, mold can begin to grow in less than 48 hours. Mitigation consists of emergency measures to stop active damage: standing water extraction, structural drying with industrial-grade equipment, and emergency roof sealing (tarping). It is your contractual obligation: most insurance policies include a "Property Preservation" clause requiring the owner to take reasonable steps to prevent further damage. Failing to mitigate gives the insurance company legal grounds to deny your claim or cancel your coverage due to negligence.
                                    </p>
                                </div>
                                <div className="educational-media">
                                    <div className="media-placeholder-wrapper educational-media-16-9">
                                        <img src="/emergency-mitigation.png" alt="On-site Emergency Mitigation & Tarping" className="educational-img" />
                                        <div className="media-caption">On-site Emergency Mitigation & Tarping</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )}

            {/* Tab Content: Restoration */}
            {activeTab === 'restoration' && (
                <div className="tab-content fade-in">
                    <section className="educational-service-section">
                        <div className="container">
                            <div className="educational-grid">
                                <div className="educational-content">
                                    <h2 className="educational-headline">Restoration: Recovering Your Home’s Integrity and Beauty</h2>
                                    <p className="educational-body">
                                        Restoration is the comprehensive process of returning your property to its pre-loss condition—or better. While mitigation stops the damage, restoration fixes the consequences. This phase involves everything from structural repairs and interior reconstruction (drywall, flooring, professional painting) to the installation of high-performance roofing and siding systems. Our goal is to ensure your home is not only aesthetically restored but structurally superior. We work under the strictest quality standards, ensuring every material installed enhances your home’s value and protection against future weather events.
                                    </p>
                                </div>
                                <div className="educational-media">
                                    <div className="media-placeholder-wrapper educational-media-16-9">
                                        <img src="/restoration-final.png" alt="Final Restoration Result / Completed Roof" className="educational-img" />
                                        <div className="media-caption">Final Restoration Result / Completed Roof</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )}

            {/* Tab Content: Tree Removal */}
            {activeTab === 'tree-removal' && (
                <div className="tab-content fade-in">
                    <section className="educational-service-section">
                        <div className="container">
                            <div className="educational-grid">
                                <div className="educational-content">
                                    <h2 className="educational-headline">Retiro Seguro de Escombros y Árboles</h2>
                                    <p className="educational-body">
                                        Eliminamos árboles caídos y escombros que comprometetan la estructura de tu hogar, garantizando un área de trabajo segura para la reconstrucción. Fallen trees on your roof pose a severe structural threat; our team safely removes debris using specialized equipment to ensure no further damage occurs.
                                    </p>
                                </div>
                                <div className="educational-media">
                                    <div className="media-placeholder-wrapper educational-media-16-9">
                                        <img src="/emergency-tree-removal.png" alt="Emergency Tree Removal Service" className="educational-img" />
                                        <div className="media-caption">Emergency Tree Removal & Cleanup</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )}

            {/* Why File a Claim? Section (Only visible on Overview) */}
            {activeTab === 'what-is' && (
                <>
                    <section className="why-section">
                        <div className="container">
                            <div className="info-grid why-content">
                                <div className="info-image-container order-2 lg:order-1">
                                    <img
                                        src="/storm-damage.png"
                                        alt="Storm Damage Repair"
                                        className="info-image"
                                    />
                                </div>

                                <div className="info-content order-1 lg:order-2">
                                    <h2 className="section-title-navy">Why file a claim?</h2>

                                    <div className="claim-reason-block">
                                        <div className="reason-icon-wrapper">
                                            <Home size={24} strokeWidth={1.5} />
                                        </div>
                                        <p>
                                            You may consider filing a claim when, after a storm, we identify that there may be damage to your property, whether to the roof, siding, gutters, or any other part of your home.
                                        </p>
                                    </div>

                                    <div className="claim-reason-block">
                                        <div className="reason-icon-wrapper">
                                            <FileSearch size={24} strokeWidth={1.5} />
                                        </div>
                                        <p>
                                            You can also file a claim when you authorize a company like ours to inspect your home and we find enough damage to consider that the insurance will cover some or all of the damage.
                                        </p>
                                    </div>

                                    <div className="claim-reason-block">
                                        <div className="reason-icon-wrapper">
                                            <ShieldCheck size={24} strokeWidth={1.5} />
                                        </div>
                                        <p>
                                            <strong>It is your right.</strong> You pay premiums precisely for this purpose. Using your coverage for legitimate damage is the reason you have insurance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="process-grid-section">
                        <div className="container">
                            <div className="text-center mb-16">
                                <h2 className="section-title text-4xl font-extrabold text-gray-900 mb-4">The Roofing Insurance Claims Process</h2>
                                <p className="section-subtitle text-xl text-gray-500">Handling claims can be daunting, but we make it straightforward.</p>
                            </div>

                            <div className="claims-grid-styled">
                                {claimsData.map((claim, index) => (
                                    <div key={index} className="claim-card-styled">
                                        <div className="icon-wrapper-styled">
                                            {claim.icon}
                                        </div>
                                        <h3>{claim.title}</h3>
                                        <p>{claim.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* Footer Note Section */}
            {(activeTab === 'mitigation' || activeTab === 'restoration' || activeTab === 'tree-removal') && (
                <section className="services-footer-banner">
                    <div className="container">
                        <div className="footer-banner-content">
                            <p>
                                <strong>Note:</strong> We are seasoned restoration professionals. You are not alone; our team will guide and support you through every single step of the process, from the initial inspection to the final delivery of your renovated home.
                            </p>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default InsuranceClaimPage;
