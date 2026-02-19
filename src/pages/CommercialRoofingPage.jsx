import React, { useState, useEffect } from 'react';
import { Building2, Sun, Shield, Droplets, ArrowRight, Search, Wrench, RefreshCw, CloudLightning, CheckCircle, Eye, AlertTriangle, Thermometer, DollarSign, Calendar, ShieldCheck, Factory, Warehouse, Store, Home } from 'lucide-react';
import './CommercialRoofingPage.css';

const whatWeOffer = [
    {
        icon: <Search size={24} strokeWidth={2} />,
        title: 'Free Roof Inspections & Quotes',
        description: 'Comprehensive assessments with detailed, no-obligation estimates — delivered transparently so you can plan ahead.',
    },
    {
        icon: <Wrench size={24} strokeWidth={2} />,
        title: 'Roof Leak Repairs',
        description: 'Fast, targeted leak detection and repair to stop water damage before it compounds into costly structural issues.',
    },
    {
        icon: <RefreshCw size={24} strokeWidth={2} />,
        title: 'Full Roof Replacement',
        description: 'Complete tear-off and installation using premium commercial-grade materials — built to last for decades.',
    },
    {
        icon: <CloudLightning size={24} strokeWidth={2} />,
        title: 'Storm Damage & Insurance Claims',
        description: 'End-to-end storm restoration with insurance claim support. We document, file, and advocate for your full compensation.',
    },
];

const repairSigns = [
    {
        icon: <Droplets size={20} strokeWidth={2} />,
        title: 'Visible Leaks or Water Stains',
        description: 'Water stains on ceilings or walls signal active leaks or poor roof drainage requiring immediate attention.',
    },
    {
        icon: <AlertTriangle size={20} strokeWidth={2} />,
        title: 'Sagging Roof Deck',
        description: 'A sagging roof indicates water accumulation or structural damage — this demands urgent professional assessment.',
    },
    {
        icon: <Eye size={20} strokeWidth={2} />,
        title: 'Cracked or Missing Materials',
        description: 'Cracks, splits, or missing sections expose underlying layers to weather, accelerating deterioration.',
    },
    {
        icon: <Droplets size={20} strokeWidth={2} />,
        title: 'Pooling Water',
        description: 'Standing water that won\'t drain causes long-term membrane damage, leaks, and mold growth.',
    },
    {
        icon: <AlertTriangle size={20} strokeWidth={2} />,
        title: 'Blistering or Bubbling',
        description: 'Surface blisters indicate trapped moisture or installation issues that compromise roof integrity.',
    },
    {
        icon: <Thermometer size={20} strokeWidth={2} />,
        title: 'Increased Energy Bills',
        description: 'Rising heating and cooling costs often point to declining insulation performance or hidden leaks in your roof.',
    },
    {
        icon: <DollarSign size={20} strokeWidth={2} />,
        title: 'Deteriorating Flashing',
        description: 'Cracked or corroded flashing around vents, chimneys, and skylights allows water to seep into the building.',
    },
    {
        icon: <Calendar size={20} strokeWidth={2} />,
        title: 'Roof Age (15–30 Years)',
        description: 'If your commercial roof is nearing end-of-life, a professional inspection can catch problems before they escalate.',
    },
];

const CommercialRoofingPage = () => {
    const [activeTab, setActiveTab] = useState('flat-roof');

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const tabs = [
        { id: 'flat-roof', label: 'Flat Roof Systems', icon: <Building2 size={18} /> },
        { id: 'tpo', label: 'TPO Roofing', icon: <Sun size={18} /> },
        { id: 'pvc', label: 'PVC Roofing', icon: <Shield size={18} /> },
        { id: 'epdm', label: 'EPDM Roofing', icon: <Droplets size={18} /> }
    ];

    return (
        <div className="commercial-page">
            {/* ===== HERO SECTION ===== */}
            <section className="commercial-hero">
                <div className="container hero-content">
                    <div className="commercial-page-badge">
                        <Building2 size={16} />
                        <span>Commercial Roofing Solutions</span>
                    </div>
                    <h1 className="commercial-hero-headline">
                        Engineered Protection<br />for Commercial Properties.
                    </h1>
                    <p className="commercial-hero-subheadline">
                        From retail spaces to industrial complexes, we deliver roofing systems built
                        for durability, energy efficiency, and full code compliance across North Carolina.
                    </p>
                    <a href="/roof-inspection" className="btn-hero-primary">
                        Schedule a Free Site Assessment <ArrowRight size={20} />
                    </a>
                </div>
            </section>

            {/* ===== TABBED NAVIGATION ===== */}
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

            {/* ===== TAB CONTENT SECTIONS ===== */}
            <section className="commercial-systems-content section-padding bg-white">
                <div className="container">

                    {/* FLAT ROOF CONTENT */}
                    {activeTab === 'flat-roof' && (
                        <div className="tab-content fade-in">
                            <div className="system-detail-grid">
                                <div className="system-content">
                                    <div className="system-badge">Best for Industrial</div>
                                    <h2 className="system-title">Flat Roof Systems</h2>
                                    <h3 className="system-subtitle">Versatility & Drainage Management</h3>
                                    <p className="system-description">
                                        Purpose-built for commercial and industrial buildings, our flat roofing solutions deliver reliable waterproofing and optimized drainage. We handle repairs, replacements, and preventive maintenance with minimal downtime — so your operations never skip a beat.
                                    </p>
                                    <div className="system-benefits">
                                        <div className="benefit-item">
                                            <Factory className="text-blue-500 mt-1" size={24} />
                                            <div>
                                                <h4>Optimized Space</h4>
                                                <p>Ideal for HVAC units and rooftop equipment.</p>
                                            </div>
                                        </div>
                                        <div className="benefit-item">
                                            <ShieldCheck className="text-blue-500 mt-1" size={24} />
                                            <div>
                                                <h4>Leak Prevention</h4>
                                                <p>Advanced membranes ensure watertight integrity.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="system-image-wrapper">
                                    <img
                                        src="https://images.unsplash.com/photo-1629806499878-5e48aa442439?q=80&w=2070&auto=format&fit=crop"
                                        alt="Flat Roof Commercial Building"
                                        className="system-image"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* TPO CONTENT */}
                    {activeTab === 'tpo' && (
                        <div className="tab-content fade-in">
                            <div className="system-detail-grid">
                                <div className="system-content">
                                    <div className="system-badge">Best for Warehouse</div>
                                    <h2 className="system-title">TPO Roofing</h2>
                                    <h3 className="system-subtitle">Energy-Efficient Cool Roof</h3>
                                    <p className="system-description">
                                        TPO's reflective white surface significantly reduces cooling costs by bouncing heat instead of absorbing it — a critical advantage during North Carolina's intense summers. Paired with competitive pricing and our latest installation methods, TPO is the smart choice for energy-conscious businesses.
                                    </p>
                                    <div className="system-benefits">
                                        <div className="benefit-item">
                                            <Sun className="text-orange-500 mt-1" size={24} />
                                            <div>
                                                <h4>UV Reflection</h4>
                                                <p>Reflects up to 90% of UV rays, lowering AC costs.</p>
                                            </div>
                                        </div>
                                        <div className="benefit-item">
                                            <Warehouse className="text-orange-500 mt-1" size={24} />
                                            <div>
                                                <h4>Durability</h4>
                                                <p>Resistant to punctures, tears, and mold growth.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="system-image-wrapper">
                                    <img
                                        src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop"
                                        alt="TPO White Roof"
                                        className="system-image"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* PVC CONTENT */}
                    {activeTab === 'pvc' && (
                        <div className="tab-content fade-in">
                            <div className="system-detail-grid">
                                <div className="system-content">
                                    <div className="system-badge">Best for Retail & Restaurants</div>
                                    <h2 className="system-title">PVC Roofing</h2>
                                    <h3 className="system-subtitle">Chemical & UV Resistance</h3>
                                    <p className="system-description">
                                        PVC membranes offer unmatched resistance to grease, chemicals, and UV exposure — making them the go-to solution for restaurants, manufacturing plants, and facilities with specific environmental demands. Backed by expert installation, your PVC roof delivers decades of low-maintenance protection.
                                    </p>
                                    <div className="system-benefits">
                                        <div className="benefit-item">
                                            <Store className="text-red-500 mt-1" size={24} />
                                            <div>
                                                <h4>Chemical Resistant</h4>
                                                <p>Handles grease vents and industrial exhaust perfectly.</p>
                                            </div>
                                        </div>
                                        <div className="benefit-item">
                                            <Shield className="text-red-500 mt-1" size={24} />
                                            <div>
                                                <h4>Fire Safety</h4>
                                                <p>Self-extinguishing properties add a layer of safety.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="system-image-wrapper">
                                    <img
                                        src="https://images.unsplash.com/photo-1599690940523-2cb039c32f84?q=80&w=2070&auto=format&fit=crop"
                                        alt="PVC Commercial Roof"
                                        className="system-image"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* EPDM CONTENT */}
                    {activeTab === 'epdm' && (
                        <div className="tab-content fade-in">
                            <div className="system-detail-grid">
                                <div className="system-content">
                                    <div className="system-badge">Best for Durability</div>
                                    <h2 className="system-title">EPDM Roofing</h2>
                                    <h3 className="system-subtitle">Longevity & Climate Resilience</h3>
                                    <p className="system-description">
                                        Crafted from durable synthetic rubber, EPDM membranes excel in extreme temperature swings — from freezing winters to scorching summers. With a proven lifespan of 25–30+ years, easy repairability, and outstanding weather resistance, EPDM is the resilient choice for long-term commercial protection.
                                    </p>
                                    <div className="system-benefits">
                                        <div className="benefit-item">
                                            <Thermometer className="text-gray-800 mt-1" size={24} />
                                            <div>
                                                <h4>All-Weather</h4>
                                                <p>Expands and contracts without cracking in any season.</p>
                                            </div>
                                        </div>
                                        <div className="benefit-item">
                                            <Calendar className="text-gray-800 mt-1" size={24} />
                                            <div>
                                                <h4>Long Lifespan</h4>
                                                <p>Proven performance lasting over 30 years.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="system-image-wrapper">
                                    <img
                                        src="https://images.unsplash.com/photo-1541334057889-183e8a7195e3?q=80&w=2070&auto=format&fit=crop"
                                        alt="EPDM Black Rubber Roof"
                                        className="system-image"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* ===== WHAT WE OFFER ===== */}
            <section className="commercial-offer-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="offer-section-title">What We Offer for Your Commercial Roof</h2>
                        <p className="offer-section-subtitle">
                            From routine maintenance to full-scale replacement — no matter the condition of your roof, we have the solution.
                        </p>
                    </div>

                    <div className="offer-grid">
                        {whatWeOffer.map((item, index) => (
                            <div key={index} className="offer-card">
                                <div className="offer-icon-wrapper">
                                    {item.icon}
                                </div>
                                <div className="offer-card-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SIGNS YOUR ROOF NEEDS REPAIR ===== */}
            <section className="commercial-signs-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="signs-section-title">How Do You Know When Your Roof Needs Repair?</h2>
                        <p className="signs-section-subtitle">
                            Catching problems early prevents costly damage. Look for these warning signs — and call us if you spot any.
                        </p>
                    </div>

                    <div className="signs-grid">
                        {repairSigns.map((sign, index) => (
                            <div key={index} className="sign-card">
                                <div className="sign-number">{String(index + 1).padStart(2, '0')}</div>
                                <div className="sign-icon-wrapper">
                                    {sign.icon}
                                </div>
                                <h4 className="sign-title">{sign.title}</h4>
                                <p className="sign-desc">{sign.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== MAINTENANCE IMPORTANCE ===== */}
            <section className="commercial-maintenance-section">
                <div className="container">
                    <div className="maintenance-content">
                        <div className="maintenance-text-block">
                            <h2 className="maintenance-title">Why Regular Maintenance Matters</h2>
                            <p className="maintenance-lead">
                                Proactive maintenance doesn't just extend the life of your roof — it protects your people, your property, and your bottom line.
                            </p>
                            <ul className="maintenance-benefits">
                                <li>
                                    <CheckCircle size={20} strokeWidth={2} className="check-icon" />
                                    <span>Catch problems early with annual or bi-annual inspections</span>
                                </li>
                                <li>
                                    <CheckCircle size={20} strokeWidth={2} className="check-icon" />
                                    <span>Improve energy efficiency and reduce heating/cooling costs</span>
                                </li>
                                <li>
                                    <CheckCircle size={20} strokeWidth={2} className="check-icon" />
                                    <span>Enhance safety for building occupants</span>
                                </li>
                                <li>
                                    <CheckCircle size={20} strokeWidth={2} className="check-icon" />
                                    <span>Budget predictably — avoid sudden costly repairs</span>
                                </li>
                                <li>
                                    <CheckCircle size={20} strokeWidth={2} className="check-icon" />
                                    <span>Customized maintenance plans tailored to your facility</span>
                                </li>
                            </ul>
                        </div>
                        <div className="maintenance-cta-block">
                            <div className="maintenance-cta-card">
                                <ShieldCheck size={40} strokeWidth={1.5} className="maintenance-cta-icon" />
                                <h3 className="text-gray-900">Protect Your Investment</h3>
                                <p>Schedule a professional inspection and get a tailored maintenance plan for your commercial property.</p>
                                <a href="/roof-inspection" className="btn-maintenance-cta">
                                    Request a Commercial Site Assessment <ArrowRight size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CommercialRoofingPage;
