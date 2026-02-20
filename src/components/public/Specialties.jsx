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
        image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=400&h=300&fit=crop&q=80"
    },
    {
        id: 3,
        title: "Siding Installation",
        icon: PanelTop,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop&q=80"
    },
    {
        id: 4,
        title: "Soffit & Fascia",
        icon: LayoutTemplate,
        image: "https://images.unsplash.com/photo-1513880989635-6eb491ce7f5b?w=400&h=300&fit=crop&q=80"
    },
    {
        id: 5,
        title: "Gutter Systems",
        icon: CloudRain,
        image: "https://images.unsplash.com/photo-1562259920-513a8f55d49b?w=400&h=300&fit=crop&q=80"
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
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&q=80"
    },
    {
        id: 8,
        title: "Tree Removal",
        icon: Trees,
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop&q=80"
    },
    {
        id: 9,
        title: "Fire Damage Repair",
        icon: Flame,
        image: "https://images.unsplash.com/photo-1486551937199-baf066858de7?w=400&h=300&fit=crop&q=80"
    },
    {
        id: 10,
        title: "Storm Damage",
        icon: CloudLightning,
        image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=400&h=300&fit=crop&q=80"
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
