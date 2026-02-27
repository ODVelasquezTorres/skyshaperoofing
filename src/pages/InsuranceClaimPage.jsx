import React, { useEffect, useState } from 'react';
import { Star, ShieldCheck, Award, FileSearch, FileText, Users, Scale, CloudLightning, BadgeCheck, Zap, Umbrella, TreeDeciduous, Home } from 'lucide-react';
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
        { id: 'what-is', label: 'What is it?', icon: <FileText size={18} /> },
        { id: 'mitigation', label: 'Mitigation & Restoration', icon: <Umbrella size={18} /> },
        { id: 'tree-removal', label: 'Tree Removal', icon: <TreeDeciduous size={18} /> },
        { id: 'replacement', label: 'Replacement', icon: <Home size={18} /> }
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
                    {/* What Is An Insurance Claim? */}
                    <section className="info-section">
                        <div className="container">
                            <div className="info-grid">
                                <div className="info-content">
                                    <h2>What is an Insurance Claim?</h2>
                                    <p>
                                        An insurance claim is a formal request by a policyholder to an insurance company for coverage or compensation for a covered loss or policy event.
                                    </p>
                                    <p>
                                        In the roofing industry, this typically involves damage caused by unforeseen events such as <strong>hail storms, high winds, fallen trees, or severe weather</strong>. Instead of paying out-of-pocket for expensive repairs, your homeowner's insurance policy is designed to cover these restoration costs, minus your deductible.
                                    </p>
                                </div>
                                <div className="info-image-container">
                                    <div className="insurance-logos-grid">
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
                            </div>
                        </div>
                    </section>

                    {/* Why File a Claim? */}
                    <section className="why-section">
                        <div className="container">
                            <div className="info-grid why-content">
                                {/* Image Column (Left on Desktop) */}
                                <div className="info-image-container order-2 lg:order-1">
                                    <img
                                        src="/storm-damage.png"
                                        alt="Storm Damage Repair"
                                        className="info-image"
                                    />
                                </div>

                                {/* Content Column (Right on Desktop) */}
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

                    {/* The Process Section (Moved from Home) */}
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
                </div>
            )}

            {/* Tab Content: Mitigation */}
            {activeTab === 'mitigation' && (
                <div className="tab-content fade-in">
                    <section className="info-section">
                        <div className="container text-center">
                            <div className="max-w-4xl mx-auto">
                                <Umbrella size={64} strokeWidth={2} className="text-blue-500 mx-auto mb-8 specialty-tab-icon" />
                                <h2 className="specialty-tab-title">Protección Inmediata Post-Tormenta</h2>
                                <p className="specialty-tab-text">
                                    Ante daños críticos, cada minuto cuenta. Aplicamos lonas de emergencia y mitigación de humedad para frenar el deterioro mientras gestionamos tu reclamo.
                                </p>

                                <div className="emergency-banner-wrapper">
                                    <div className="emergency-badge-banner">
                                        EMERGENCY SERVICES AVAILABLE 24/7
                                    </div>
                                </div>

                                <button className="cursor-pointer bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors mt-8">
                                    Request Emergency Service
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            )}

            {/* Tab Content: Tree Removal */}
            {activeTab === 'tree-removal' && (
                <div className="tab-content fade-in">
                    <section className="info-section">
                        <div className="container text-center">
                            <div className="max-w-4xl mx-auto">
                                <TreeDeciduous size={64} strokeWidth={2} className="text-green-600 mx-auto mb-8 specialty-tab-icon" />
                                <h2 className="specialty-tab-title">Retiro Seguro de Escombros y Árboles</h2>
                                <p className="specialty-tab-text">
                                    Eliminamos árboles caídos y escombros que comprometan la estructura de tu hogar, garantizando un área de trabajo segura para la reconstrucción.
                                </p>

                                <div className="emergency-banner-wrapper">
                                    <div className="emergency-badge-banner">
                                        EMERGENCY SERVICES AVAILABLE 24/7
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-12">
                                    <div className="p-6 bg-white shadow-md rounded-lg border border-gray-100">
                                        <h3 className="font-bold text-lg mb-2">Safe Extraction</h3>
                                        <p className="text-gray-600">Specialized equipment to lift trees without crushing your structure.</p>
                                    </div>
                                    <div className="p-6 bg-white shadow-md rounded-lg border border-gray-100">
                                        <h3 className="font-bold text-lg mb-2">Debris Cleanup</h3>
                                        <p className="text-gray-600">We haul away all wood and debris, leaving your property clean.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )}

            {/* Tab Content: Replacement */}
            {activeTab === 'replacement' && (
                <div className="tab-content fade-in">
                    <section className="info-section">
                        <div className="container text-center">
                            <div className="max-w-4xl mx-auto">
                                <Home size={64} strokeWidth={2} className="text-orange-500 mx-auto mb-8 specialty-tab-icon" />
                                <h2 className="specialty-tab-title">Instalación de Techo de Alto Rendimiento</h2>
                                <p className="specialty-tab-text">
                                    No solo reemplazamos; mejoramos tu hogar con materiales de última generación y la garantía más sólida de Carolina del Norte.
                                </p>

                                <div className="emergency-banner-wrapper">
                                    <div className="emergency-badge-banner">
                                        EMERGENCY SERVICES AVAILABLE 24/7
                                    </div>
                                </div>

                                <Link to="/roof-replacement" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors mt-8">
                                    View Roof Replacement Details
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            )}

        </div>
    );
};

export default InsuranceClaimPage;
