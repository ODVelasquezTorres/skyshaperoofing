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
    const [activeTab, setActiveTab] = useState('what-is');

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const tabs = [
        { id: 'what-is', label: '¿Qué es?', icon: <FileText size={18} /> },
        { id: 'mitigation', label: 'Mitigación y Restauración', icon: <Umbrella size={18} /> },
        { id: 'tree-removal', label: 'Tree Removal', icon: <TreeDeciduous size={18} /> },
        { id: 'replacement', label: 'Replacement', icon: <Home size={18} /> }
    ];

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
            <section className="tabs-navigation-section">
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
                            <div className="max-w-3xl mx-auto">
                                <Umbrella size={64} className="text-blue-500 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-6">Mitigation & Restoration</h2>
                                <p className="text-xl text-gray-600 mb-8">
                                    Immediate action to prevent further damage is critical. We provide emergency tarping, water damage mitigation, and full restoration services to secure your property while the claim is processed.
                                </p>
                                <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 mb-8">
                                    <h3 className="text-2xl font-bold mb-4">Emergency Services Available 24/7</h3>
                                    <p className="mb-0">For urgent tarping or leak stops, contact us immediately.</p>
                                </div>
                                <button className="cursor-pointer bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
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
                            <div className="max-w-3xl mx-auto">
                                <TreeDeciduous size={64} className="text-green-600 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-6">Emergency Tree Removal</h2>
                                <p className="text-xl text-gray-600 mb-8">
                                    Fallen trees on your roof pose a severe structural threat. Our team safely removes debris and trees caused by storms, ensuring no further damage occurs to your home during the process.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
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
                            <div className="max-w-3xl mx-auto">
                                <Home size={64} className="text-orange-500 mx-auto mb-6" />
                                <h2 className="text-4xl font-bold mb-6">Full Roof Replacement</h2>
                                <p className="text-xl text-gray-600 mb-8">
                                    When damage is extensive, a full replacement is often the only viable option. We work with your insurance to ensure the full value of the replacement is covered, upgrading you to modern, durable materials.
                                </p>
                                <Link to="/roof-replacement" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
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
