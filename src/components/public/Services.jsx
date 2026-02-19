import { Home, Shield, PenTool, Layers } from 'lucide-react';

const services = [
    {
        icon: <Home size={32} />,
        title: 'Residential Roofing',
        description: 'Premium modern roofing solutions tailored for architectural homes. We specialize in metal, slate, and high-end composite materials.'
    },
    {
        icon: <Shield size={32} />,
        title: 'Structural Repairs',
        description: 'Advanced structural reinforcement and leak prevention. We restore integrity to your property with precision engineering.'
    },
    {
        icon: <Layers size={32} />,
        title: 'Commercial Systems',
        description: 'Durable, energy-efficient roofing for commercial properties. Built for longevity and minimal maintenance.'
    },
    {
        icon: <PenTool size={32} />,
        title: 'Design Consultation',
        description: 'Collaborative planning with architects and homeowners to ensure the roof complements the building’s aesthetic.'
    }
];

const Services = () => {
    return (
        <section className="section" id="services" style={{ background: '#F9FAFB' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Expertise</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#4B5563' }}>
                        We combine technical proficiency with design sensitivity to deliver superior results.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((service, index) => (
                        <div key={index} style={{
                            background: 'white',
                            padding: '2.5rem',
                            borderRadius: '8px',
                            border: '1px solid #E5E7EB',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{
                                color: 'var(--color-primary-blue)',
                                marginBottom: '1.5rem',
                                background: '#EFF6FF',
                                width: 'fit-content',
                                padding: '1rem',
                                borderRadius: '8px'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{service.title}</h3>
                            <p style={{ color: '#6B7280', lineHeight: '1.6' }}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
