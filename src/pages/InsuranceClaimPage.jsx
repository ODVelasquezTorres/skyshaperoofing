import React, { useEffect, useState } from 'react';
import { Star, ShieldCheck, Award, FileSearch, FileText, Users, Scale, CloudLightning, BadgeCheck, Zap, Umbrella, TreeDeciduous, Home, Wrench, Flame, Construction, TrendingUp } from 'lucide-react';
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
        { id: 'what-is', label: 'What is it?', icon: <FileText size={18} strokeWidth={2.5} color="#0D223F" /> },
        { id: 'mitigation', label: 'Mitigation', icon: <Home size={18} strokeWidth={2.5} color="#0D223F" /> },
        { id: 'restoration', label: 'Restoration', icon: <ShieldCheck size={18} strokeWidth={2.5} color="#0D223F" /> },
        { id: 'tree-removal', label: 'Tree Removal', icon: <Construction size={18} strokeWidth={2.5} color="#0D223F" /> },
        { id: 'replacement', label: 'Replacement', icon: <Home size={18} strokeWidth={2.5} fill="#0A192F" color="#0A192F" /> },
        { id: 'fire-damage', label: 'Fire Damage', icon: <Flame size={18} strokeWidth={2.5} color="#0D223F" /> }
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
                                        <div className="insurance-logos-grid-wrapper" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
                                            <div className="insurance-logos-grid compact" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', width: '100%' }}>
                                                <div className="insurance-logo-item"><img src="/state-farm.jpg" alt="State Farm" /></div>
                                                <div className="insurance-logo-item"><img src="/allstate.png" alt="Allstate" /></div>
                                                <div className="insurance-logo-item"><img src="/usaa.jpg" alt="USAA" /></div>
                                                <div className="insurance-logo-item"><img src="/liberty-mutual.png" alt="Liberty Mutual" /></div>
                                                <div className="insurance-logo-item"><img src="/farmers.png" alt="Farmers" /></div>
                                                <div className="insurance-logo-item"><img src="/american-family.png" alt="American Family" /></div>
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
                                        <div className="media-caption">Upload Professional Mitigation Image</div>
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
                                        Restoration is the comprehensive process of returning your property to its pre-loss condition—or better. While mitigation stops the damage, restoration fixes the consequences. Our goal is to ensure your home is not only aesthetically restored but structurally superior. We work under the strictest quality standards, ensuring every material installed enhances your home’s value and protection against future weather events.
                                    </p>
                                </div>
                                <div className="educational-media">
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
                                    <h2 className="educational-headline">Emergency Tree Removal & Structural Stabilization</h2>
                                    <p className="educational-body">
                                        When a storm brings a tree down on your home, the clock is ticking against structural failure and water intrusion. Our specialized Emergency Tree Removal team does more than just clear debris; we perform precision crane operations to lift weight off your roof without causing secondary impact damage.
                                    </p>
                                    <p className="educational-body">
                                        We understand that a fallen tree is a "Major Peril" in insurance terms. Our process includes full photographic documentation of the damage for your adjuster, followed by immediate structural shoring and tarping once the tree is cleared. By using heavy-duty specialized equipment, we ensure that the removal process itself doesn't compromise the remaining integrity of your property, protecting your investment and your family’s safety.
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
                                    <h2 className="educational-headline">Full Roof Replacement: Architectural Excellence & Durability</h2>
                                    <p className="educational-body">
                                        A roof replacement is the most significant investment you will make in your property’s protection. We don’t just install shingles; we engineer a complete roofing system designed to exceed North Carolina’s building codes. Our replacement process integrates high-grade synthetic underlayments, advanced ventilation systems to regulate attic temperature, and ice/water shields in critical leak-prone areas.
                                    </p>
                                    <p className="educational-body">
                                        Whether you are upgrading due to age or as the final phase of an insurance restoration, we provide architectural-grade materials that enhance your home’s curb appeal while significantly increasing its market value. Every replacement is backed by our industry-leading warranty, ensuring that your home remains the safest place for your family for decades to come.
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
                                    <h2 className="educational-headline">Comprehensive Fire & Smoke Damage Restoration</h2>
                                    <p className="educational-body">
                                        Fire damage requires a specialized scientific approach to restoration. Beyond the visible charring, we address the invisible threats: toxic soot, corrosive ash, and deeply embedded smoke odors. Our team handles the entire recovery—from structural stabilization and air quality remediation to the full architectural rebuild. We ensure that every trace of the fire is erased, restoring your home to a condition that is not only beautiful but safe and healthy to inhabit once again.
                                    </p>
                                </div>
                                <div className="educational-media">
                                    <div className="media-placeholder-wrapper educational-media-16-9">
                                        <img src="/fire-damage-restoration.png" alt="Fire Damage Restoration Before & After" className="educational-img" />
                                        <div className="media-caption">Upload Fire Restoration Before/After Image</div>
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
                                    <h2 className="educational-headline">Why file a claim?</h2>

                                    <div className="claim-reason-block">
                                        <div className="reason-icon-wrapper" style={{ backgroundColor: '#E3F2FD', padding: '12px', borderRadius: '12px', marginBottom: '16px', display: 'inline-block' }}>
                                            <Home size={24} strokeWidth={2.5} color="#0D223F" />
                                        </div>
                                        <p className="educational-body">
                                            You may consider filing a claim when, after a storm, we identify that there may be damage to your property, whether to the roof, siding, gutters, or any other part of your home.
                                        </p>
                                    </div>

                                    <div className="claim-reason-block">
                                        <div className="reason-icon-wrapper" style={{ backgroundColor: '#E3F2FD', padding: '12px', borderRadius: '12px', marginBottom: '16px', display: 'inline-block' }}>
                                            <FileSearch size={24} strokeWidth={2.5} color="#0D223F" />
                                        </div>
                                        <p className="educational-body">
                                            You can also file a claim when you authorize a company like ours to inspect your home and we find enough damage to consider that the insurance will cover some or all of the damage.
                                        </p>
                                    </div>

                                    <div className="claim-reason-block">
                                        <div className="reason-icon-wrapper" style={{ backgroundColor: '#E3F2FD', padding: '12px', borderRadius: '12px', marginBottom: '16px', display: 'inline-block' }}>
                                            <ShieldCheck size={24} strokeWidth={2.5} color="#0D223F" />
                                        </div>
                                        <p className="educational-body">
                                            <strong>It is your right.</strong> You pay premiums precisely for this purpose. Using your coverage for legitimate damage is the reason you have insurance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="process-grid-section" style={{ backgroundColor: '#f8fafc', padding: '100px 0' }}>
                        <div className="container">
                            <div className="text-center mb-16">
                                <h2 className="educational-headline">The Roofing Insurance Claims Process</h2>
                                <p className="educational-body">Handling claims can be daunting, but we make it straightforward.</p>
                            </div>

                            <div className="claims-grid-styled">
                                {claimsData.map((claim, index) => (
                                    <div key={index} className="claim-card-styled" style={{ backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(13, 34, 63, 0.05)', border: '1px solid #e2e8f0' }}>
                                        <div className="icon-wrapper-styled" style={{ marginBottom: '24px', color: '#0D223F' }}>
                                            {React.cloneElement(claim.icon, { strokeWidth: 2.5 })}
                                        </div>
                                        <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0D223F', marginBottom: '16px' }}>{claim.title}</h3>
                                        <p style={{ color: '#4A4A4A', fontSize: '18px', lineHeight: '1.6' }}>{claim.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* Footer Note Section */}
            {(activeTab !== 'what-is') && (
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
