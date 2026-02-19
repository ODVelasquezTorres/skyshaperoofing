import React from 'react';
import {
    Sun, Search, Settings, ShieldCheck, Zap,
    CheckCircle, ArrowRight, DollarSign, Home,
    Drill, ToggleRight
} from 'lucide-react';
import './SolarPanelPage.css';

/* ───────────── Process Steps ───────────── */
const processSteps = [
    {
        icon: <Search size={28} strokeWidth={2} />,
        step: '01',
        title: 'Roof Health Audit',
        description: 'We certify your roof is solar-ready — inspecting structure, waterproofing, and remaining lifespan before a single panel is placed.',
    },
    {
        icon: <Settings size={28} strokeWidth={2} />,
        step: '02',
        title: 'Custom Energy Design',
        description: 'Engineered for max efficiency in NC\'s climate — panel placement, tilt angle, and system size optimized for your property.',
    },
    {
        icon: <Drill size={28} strokeWidth={2} />,
        step: '03',
        title: 'Integrated Installation',
        description: 'Zero-leak guarantee mounting with our proprietary Triple-Seal Waterproofing Flashing — because we\'re roofers first.',
    },
    {
        icon: <ToggleRight size={28} strokeWidth={2} />,
        step: '04',
        title: 'Activation & Savings',
        description: 'Grid interconnection, system testing, and full tax credit guidance — you start saving from day one.',
    },
];

/* ───────────── NC Incentives ───────────── */
const incentives = [
    'Federal Investment Tax Credit (ITC) eligibility — up to 30% of system cost.',
    'Duke Energy Solar Rebates guidance and application support.',
    'Increase property value without increased property taxes in NC.',
    'Net metering benefits — earn credits for excess energy you produce.',
    'Full documentation and support for all available financial programs.',
];

/* ───────────── Roof-First Advantages ───────────── */
const roofAdvantages = [
    'Complete waterproofing assessment before installation',
    'Proprietary Triple-Seal Flashing on every mount point',
    'Structural load analysis for optimal panel placement',
    'Roof warranty protection — we never void your coverage',
    'Single point of accountability for roof + solar',
];

const SolarPanelPage = () => {
    return (
        <div className="solar-page">

            {/* ═══════════ HERO ═══════════ */}
            <section className="solar-hero">
                <div className="solar-hero-overlay" />
                <div className="container solar-hero-content">
                    <div className="solar-hero-badge">
                        <Sun size={16} />
                        <span>SkyShape Solar Solutions</span>
                    </div>
                    <h1 className="solar-hero-headline">
                        Energy Independence,<br />Engineered by Roofers.
                    </h1>
                    <p className="solar-hero-subheadline">
                        SkyShape delivers integrated solar systems designed to protect your
                        roof while powering your life. Premium installation. Zero leaks. Guaranteed.
                    </p>
                    <a href="/roof-inspection" className="solar-hero-cta">
                        Get My Free Solar + Roof Analysis <ArrowRight size={20} />
                    </a>
                </div>
            </section>


            {/* ═══════════ ROOF-FIRST ADVANTAGE (Split) ═══════════ */}
            <section className="solar-advantage-section">
                <div className="container">
                    <div className="advantage-grid">
                        {/* Left: Copy */}
                        <div className="advantage-text">
                            <span className="advantage-label">The Roof-First Advantage</span>
                            <h2 className="advantage-title">
                                Why Trust a Roofer<br />with Your Solar?
                            </h2>
                            <p className="advantage-body">
                                Most solar companies are just electricians. They don't understand
                                waterproofing, load distribution, or flashing integrity. At SkyShape,
                                we ensure the structural integrity of your roof is the foundation of your
                                solar system's longevity. <strong>No leaks, guaranteed.</strong>
                            </p>
                            <ul className="advantage-list">
                                {roofAdvantages.map((item, i) => (
                                    <li key={i}>
                                        <CheckCircle size={18} strokeWidth={2.5} className="advantage-check" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: Technical Diagram */}
                        <div className="advantage-diagram">
                            <div className="diagram-card">
                                <div className="diagram-visual">
                                    {/* Cross-section illustration */}
                                    <div className="diagram-layer diagram-panel">
                                        <Sun size={20} className="diagram-icon-panel" />
                                        <span>Solar Panel</span>
                                    </div>
                                    <div className="diagram-connector" />
                                    <div className="diagram-layer diagram-mount">
                                        <Drill size={18} className="diagram-icon-mount" />
                                        <span>Rail Mounting System</span>
                                    </div>
                                    <div className="diagram-connector" />
                                    <div className="diagram-layer diagram-seal">
                                        <ShieldCheck size={18} className="diagram-icon-seal" />
                                        <span>Triple-Seal Waterproofing Flashing</span>
                                        <div className="seal-highlight" />
                                    </div>
                                    <div className="diagram-connector" />
                                    <div className="diagram-layer diagram-deck">
                                        <Home size={18} className="diagram-icon-deck" />
                                        <span>Roof Deck & Structure</span>
                                    </div>
                                </div>
                                <p className="diagram-caption">
                                    Cross-section: Every mount point receives our proprietary Triple-Seal
                                    Waterproofing Flashing — the layer most solar-only companies skip.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* ═══════════ PROCESS FLOW ═══════════ */}
            <section className="solar-process-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="process-section-title">Our Seamless Path to Power.</h2>
                        <p className="process-section-subtitle">
                            From roof assessment to grid activation — a streamlined 4-step process
                            designed for zero disruption and maximum savings.
                        </p>
                    </div>

                    <div className="process-flow">
                        {/* Connecting line */}
                        <div className="process-flow-line" />

                        {processSteps.map((step, index) => (
                            <div key={index} className="process-step-card">
                                <div className="step-number">{step.step}</div>
                                <div className="step-icon-wrapper">
                                    {step.icon}
                                </div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ═══════════ NC INCENTIVES ═══════════ */}
            <section className="solar-incentives-section">
                <div className="container">
                    <div className="incentives-card">
                        <div className="incentives-header">
                            <div className="incentives-icon-wrapper">
                                <DollarSign size={32} strokeWidth={2} />
                            </div>
                            <div>
                                <h2 className="incentives-title">Unlock North Carolina Solar Incentives.</h2>
                                <p className="incentives-subtitle">
                                    Take advantage of federal and state programs that make solar more
                                    affordable than ever. We guide you through every dollar of savings.
                                </p>
                            </div>
                        </div>

                        <ul className="incentives-list">
                            {incentives.map((item, index) => (
                                <li key={index}>
                                    <CheckCircle size={20} strokeWidth={2.5} className="incentive-check" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="incentives-cta-row">
                            <a href="/roof-inspection" className="btn-incentives-cta">
                                Learn About Your Savings <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            {/* ═══════════ FINAL CTA ═══════════ */}
            <section className="solar-final-cta-section">
                <div className="container text-center">
                    <Zap size={40} strokeWidth={1.5} className="final-cta-icon" />
                    <h2 className="final-cta-title">Ready to Power Your Home with Clean Energy?</h2>
                    <p className="final-cta-subtitle">
                        Get a comprehensive Solar + Roof Analysis from North Carolina's most trusted roofing engineers. Free. No obligation.
                    </p>
                    <a href="/roof-inspection" className="solar-final-cta-btn">
                        Get My Free Solar + Roof Analysis <ArrowRight size={20} />
                    </a>
                </div>
            </section>

        </div>
    );
};

export default SolarPanelPage;
