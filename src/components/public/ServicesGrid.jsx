import React from 'react';
import './ServicesGrid.css';

const services = [
    {
        title: 'Residential Roofing',
        image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Commercial Roofing',
        image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Roof Repair',
        image: 'https://images.unsplash.com/photo-1628124803934-2e680a6c02ac?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Siding & Gutters',
        image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Storm Damage',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Skylights',
        image: 'https://images.unsplash.com/photo-1596263576926-d621f30df042?q=80&w=2071&auto=format&fit=crop'
    },
    {
        title: 'Insulation',
        image: 'https://images.unsplash.com/photo-1510931535497-6a5b6f3a763c?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Solar Roofing',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop'
    }
];

const ServicesGrid = () => {
    return (
        <section className="services-grid-section">
            <div className="container">
                <div className="services-grid-header">
                    <h2>Soluciones Integrales en Ingeniería de Techos</h2>
                    <p>
                        Precision en cada detalle. Utilizamos materiales de primera calidad y
                        tecnología avanzada para garantizar la durabilidad y estética de su propiedad.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-grid-card">
                            <img src={service.image} alt={service.title} />
                            <div className="service-grid-overlay">
                                <h3>{service.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="services-grid-footer">
                    <button className="btn-more-info">MÁS INFORMACIÓN</button>
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
