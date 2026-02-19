import React from 'react';
import { Droplets, ShieldAlert, AlignCenter, Trash2, Sprout, AlertTriangle, CalendarClock, ArrowRight } from 'lucide-react';
import './RoofRepairSigns.css';

const signsData = [
    {
        title: "The Silent Leak",
        description: "Stains on your ceiling aren't just cosmetic—they are red flags. We trace the water path to stop hidden rot before it spreads.",
        icon: <Droplets size={32} />,
        highlight: "Water Stains"
    },
    {
        title: "Compromised Armor",
        description: "A roof without shingles is like a knight without a shield. We restore your home's defense system immediately.",
        icon: <ShieldAlert size={32} />,
        highlight: "Missing Shingles"
    },
    {
        title: "Structural Fatigue",
        description: "A dipping roofline warns of deep structural distress. Our engineers stabilize and reinforce your home's skeleton.",
        icon: <AlignCenter size={32} />, // Using AlignCenter to represent alignment/sagging lines
        highlight: "Sagging Roof"
    },
    {
        title: "Material Exhaustion",
        description: "Finding 'sand' in your gutters? Your shingles are shedding their skin. We assess if it's time for a rejuvenation.",
        icon: <Trash2 size={32} />,
        highlight: "Granules in Gutters"
    },
    {
        title: "Moisture Traps",
        description: "Green isn't good on a roof. Moss acts as a sponge, rotting your deck from the top down. We urge immediate removal.",
        icon: <Sprout size={32} />,
        highlight: "Moss Growth"
    },
    {
        title: "Seal Failure",
        description: "Chimneys and vents are weak points. If the metal seal cracks, water walks right in. We reseal with precision.",
        icon: <AlertTriangle size={32} />,
        highlight: "Cracked Flashing"
    },
    {
        title: "The Age Factor",
        description: "Even a good roof retires. If yours is older than 20 years, it may be nearing the end of its lifespan. Consider having it inspected.",
        icon: <CalendarClock size={32} />,
        highlight: "20+ Years Old"
    }
];

const RoofRepairSigns = () => {
    return (
        <section className="repair-section section-padding">
            <div className="container">
                <div className="repair-header">
                    <h2 className="section-title">7 Signs Your Roof Needs Help</h2>
                    <p className="section-subtitle">Don't wait for a catastrophe. Recognize the warning signs early.</p>
                </div>

                <div className="repair-grid">
                    {signsData.map((sign, index) => (
                        <div key={index} className="repair-card">
                            <div className="repair-icon-wrapper">
                                {sign.icon}
                            </div>
                            <div className="repair-content">
                                <span className="repair-highlight">{sign.highlight}</span>
                                <h3 className="repair-title">{sign.title}</h3>
                                <p className="repair-description">{sign.description}</p>
                            </div>
                        </div>
                    ))}

                    {/* Call to Action Card in the grid */}
                    <div className="repair-card cta-card">
                        <div className="cta-content">
                            <h3>Not Sure?</h3>
                            <p>If you spot any of these signs, don't gamble with your home.</p>
                            <a href="/contact" className="btn-repair-cta">
                                Free Inspection <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoofRepairSigns;
