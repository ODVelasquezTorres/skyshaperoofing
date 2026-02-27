import React, { useEffect, useState } from 'react';
import { Star, ShieldCheck, Award, FileSearch, FileText, Users, Scale, CloudLightning, BadgeCheck, Zap, Umbrella, TreeDeciduous, Home, Wrench, Flame, Crane, TrendingUp } from 'lucide-react';
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
        { id: 'mitigation-restoration', label: 'Mitigation & Restoration', icon: <ShieldCheck size={18} strokeWidth={2.5} color="#0D223F" /> },
        { id: 'tree-removal', label: 'Tree Removal', icon: <Crane size={18} strokeWidth={2.5} color="#0D223F" /> },
        { id: 'replacement', label: 'Replacement', icon: <TrendingUp size={18} strokeWidth={2.5} color="#0D223F" /> },
        { id: 'fire-damage', label: 'Fire Damage', icon: <Flame size={18} strokeWidth={2.5} color="#0D223F" /> }
    ];

    const [activeTab, setActiveTab] = useState('mitigation-restoration');

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

            {/* Tab Content: Mitigation & Restoration (Combined) */}
            {activeTab === 'mitigation-restoration' && (
                <div className="tab-content fade-in">
                    <section className="educational-service-section">
                        <div className="container">
                            <div className="educational-grid">
                                <div className="educational-content">
                                    <h2 className="educational-headline">Mitigation: Your Legal Obligation as a Policyholder</h2>
                                    <p className="educational-body">
                                        Water damage is a time-critical emergency. Once moisture penetrates porous materials like drywall and wood, mold can begin to grow in less than 48 hours. Mitigation consists of emergency measures to stop active damage: standing water extraction, structural drying with industrial-grade equipment, and emergency roof sealing (tarping). It is your contractual obligation: most insurance policies include a "Property Preservation" clause requiring the owner to take reasonable steps to prevent further damage. Failing to mitigate gives the insurance company legal grounds to deny your claim or cancel your coverage due to negligence.
                                    </p>
                                    <h2 className="educational-headline mt-12">Restoration: Recovering Your Home’s Integrity and Beauty</h2>
                                    <p className="educational-body">
                                        Restoration is the comprehensive process of returning your property to its pre-loss condition—or better. While mitigation stops the damage, restoration fixes the consequences. Our goal is to ensure your home is not only aesthetically restored but structurally superior. We work under the strictest quality standards, ensuring every material installed enhances your home’s value and protection against future weather events.
                                    </p>
                                </div>
                                <div className="educational-media">
                                    <div className="media-placeholder-wrapper educational-media-16-9 mb-8">
                                        <img src="/emergency-mitigation.png" alt="On-site Emergency Mitigation & Tarping" className="educational-img" />
                                        <div className="media-caption">Upload Professional Mitigation / Restoration Image</div>
                                    </div>
                                    <div className="media-placeholder-wrapper educational-media-16-9">
                                        <img src="/restoration-final.png" alt="Final Restoration Result / Completed Roof" className="educational-img" />
                                        <div className="media-caption">Upload Final Restored Property Image</div>
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
                                        Eliminamos árboles caídos y escombros que comprometetan la estructura de tu hogar, garantizando un área de trabajo segura para la reconstrucción. Fallen trees on your roof pose a severe structural threat; our team safely removes debris using specialized equipment to ensure no further damage occurs. We specialize in complex removals where precision is required to protect the remaining property value.
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

            {/* Tab Content: Replacement */}
            {activeTab === 'replacement' && (
                <div className="tab-content fade-in">
                    <section className="educational-service-section">
                        <div className="container">
                            <div className="educational-grid">
                                <div className="educational-content">
                                    <h2 className="educational-headline">High-Performance Roof Replacement</h2>
                                    <p className="educational-body">
                                        When damage is extensive, a full replacement is often the only viable option. We upgrade your home with materials of the latest generation, ensuring a roof that is not just a replacement, but a significant improvement in performance and longevity. Our replacements come with the strongest warranties in North Carolina.
                                    </p>
                                </div>
                                <div className="educational-media">
                                    <div className="media-placeholder-wrapper educational-media-16-9">
                                        <img src="/replacement-roof.png" alt="Full Roof Replacement" className="educational-img" />
                                        <div className="media-caption">Full Systematic Roof Replacement</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )}

            {/* Tab Content: Fire Damage */}
            {activeTab === 'fire-damage' && (
                <div className="tab-content fade-in">
                    <section className="educational-service-section">
                        <div className="container">
                            <div className="educational-grid">
                                <div className="educational-content">
                                    <h2 className="educational-headline">Comprehensive Fire Damage & Smoke Restoration</h2>
                                    <p className="educational-body">
                                        Fire leaves a complex path of destruction that requires specialized expertise. We provide total fire restoration services, starting with immediate structural stabilization and smoke deodorization. Our process eliminates hazardous soot and ash from surfaces and air systems, cleanses deeply embedded smoke odors, and rebuilds charred framing or roof structures. We manage the entire rebuild, from replacing drywall and insulation to installing new high-performance roofing and siding, ensuring your home is fully restored to a safe, healthy, and pristine condition.
                                    </p>
                                </div>
                                <div className="educational-media">
                                    <div className="media-placeholder-wrapper educational-media-16-9">
                                        <img src="/fire-damage-restoration.png" alt="Fire Damage Restoration Before & After" className="educational-img" />
                                        <div className="media-caption">Upload Fire Damage Restoration Image here</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )}

            {/* Footer Note Section */}
            {(activeTab === 'mitigation-restoration' || activeTab === 'tree-removal' || activeTab === 'replacement' || activeTab === 'fire-damage') && (
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
