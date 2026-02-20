import React, { useState } from 'react';
import './Specialties.css';
import {
    FileText,
    Home,
    PanelTop,
    LayoutTemplate,
    CloudRain,
    Siren,
    Wrench,
    Trees,
    Flame,
    CloudLightning
} from 'lucide-react';

const specialties = [
    {
        id: 1,
        title: "Insurance Claim Expert",
        icon: FileText,
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop&q=80"
    },
    {
        id: 2,
        title: "Roofing Systems",
        icon: Home,
        image: "/roof.jpg"
    },
    {
        id: 3,
        title: "Siding Installation",
        icon: PanelTop,
        image: "/siding.jpg"
    },
    {
        id: 4,
        title: "Soffit & Fascia",
        icon: LayoutTemplate,
        image: "/soffit-fascia.jpg"
    },
    {
        id: 5,
        title: "Gutter Systems",
        icon: CloudRain,
        image: "/gutters.jpg"
    },
    {
        id: 6,
        title: "Emergency Mitigation",
        icon: Siren,
        image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=400&h=300&fit=crop&q=80"
    },
    {
        id: 7,
        title: "Full Restoration",
        icon: Wrench,
        image: "/restauracion.jpg"
    },
    {
        id: 8,
        title: "Tree Removal",
        icon: Trees,
        image: "/tree-damage.jpg"
    },
    {
        id: 9,
        title: "Fire Damage Repair",
        icon: Flame,
        image: "/fire-damage.jpg"
    },
    {
        id: 10,
        title: "Storm Damage",
        icon: CloudLightning,
        image: "/storm-damage.png"
    }
];

const Specialties = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className="specialties-section">
            <div className="specialties-container">
                <h2 className="specialties-heading">
                    Our Specialties
                </h2>

                <div className="specialties-grid">
                    {specialties.map((item) => (
                        <div
                            key={item.id}
                            className={`specialty-card ${hoveredId === item.id ? 'is-hovered' : ''}`}
                            onMouseEnter={() => setHoveredId(item.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            {/* Hover Image */}
                            <div className="specialty-hover-image">
                                <img src={item.image} alt={item.title} loading="lazy" />
                            </div>

                            {/* Content */}
                            <div className="specialty-content">
                                <div className="specialty-icon-wrapper">
                                    <item.icon
                                        className="specialty-icon"
                                        strokeWidth={2}
                                    />
                                </div>
                                <span className="specialty-label">
                                    {item.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specialties;
