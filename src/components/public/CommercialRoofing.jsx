import React from 'react';
import { Building2, Sun, Shield, Droplets } from 'lucide-react';
import './CommercialRoofing.css';

const roofingSystems = [
    {
        icon: <Building2 size={32} strokeWidth={2} />,
        title: 'Flat Roof Systems',
        concept: 'Versatility & Drainage Management',
        keyBenefit: 'Optimized space and structural integrity.',
        badge: 'Best for Industrial',
        description:
            'Purpose-built for commercial and industrial buildings, our flat roofing solutions deliver reliable waterproofing and optimized drainage. We handle repairs, replacements, and preventive maintenance with minimal downtime — so your operations never skip a beat.',
    },
    {
        icon: <Sun size={32} strokeWidth={2} />,
        title: 'TPO Roofing',
        concept: 'Energy-Efficient Cool Roof',
        keyBenefit: 'Heat-reflective and highly resistant to UV rays.',
        badge: 'Best for Warehouse',
        description:
            'TPO\'s reflective white surface significantly reduces cooling costs by bouncing heat instead of absorbing it — a critical advantage during North Carolina\'s intense summers. Paired with competitive pricing and our latest installation methods, TPO is the smart choice for energy-conscious businesses.',
    },
    {
        icon: <Shield size={32} strokeWidth={2} />,
        title: 'PVC Roofing',
        concept: 'Chemical & UV Resistance',
        keyBenefit: 'Ideal for restaurants and industrial plants — grease & chemical resistant.',
        badge: 'Best for Retail',
        description:
            'PVC membranes offer unmatched resistance to grease, chemicals, and UV exposure — making them the go-to solution for restaurants, manufacturing plants, and facilities with specific environmental demands. Backed by expert installation, your PVC roof delivers decades of low-maintenance protection.',
    },
    {
        icon: <Droplets size={32} strokeWidth={2} />,
        title: 'EPDM Roofing',
        concept: 'Longevity & Climate Resilience',
        keyBenefit: 'Exceptional performance in extreme temperature fluctuations.',
        badge: 'Best for Industrial',
        description:
            'Crafted from durable synthetic rubber, EPDM membranes excel in extreme temperature swings — from freezing winters to scorching summers. With a proven lifespan of 25–30+ years, easy repairability, and outstanding weather resistance, EPDM is the resilient choice for long-term commercial protection.',
    },
];

const CommercialRoofing = () => {
    return (
        <section id="commercial-roofing" className="commercial-roofing-section section-padding">
            <div className="container">
                {/* Section Header */}
                <div className="commercial-header text-center">
                    <h2 className="commercial-title">
                        Commercial Excellence: Industrial-Grade Protection.
                    </h2>
                    <p className="commercial-subtitle">
                        From retail spaces to industrial complexes, we engineer roofing systems
                        designed for durability, energy efficiency, and full code compliance in
                        North Carolina.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="commercial-grid">
                    {roofingSystems.map((system, index) => (
                        <div key={index} className="commercial-card">
                            {/* Hover Badge */}
                            <span className="commercial-badge">{system.badge}</span>

                            <div className="commercial-icon-wrapper">
                                {system.icon}
                            </div>
                            <span className="commercial-concept">{system.concept}</span>
                            <h3 className="commercial-card-title">{system.title}</h3>
                            <p className="commercial-key-benefit">{system.keyBenefit}</p>
                            <p className="commercial-card-desc">{system.description}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="commercial-cta-wrapper">
                    <a href="/roof-inspection" className="btn btn-primary commercial-cta-btn">
                        Request a Commercial Site Assessment
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CommercialRoofing;
