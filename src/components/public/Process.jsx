const steps = [
    { id: '01', title: 'Consultation', description: 'We assess your needs and property structure to recommend the best roofing system.' },
    { id: '02', title: 'Planning', description: 'Detailed architectural planning and material selection to match your aesthetic.' },
    { id: '03', title: 'Installation', description: 'Precision installation by our certified structural teams with minimal disruption.' },
    { id: '04', title: 'Warranty', description: 'Comprehensive final inspection and long-term structural warranty protection.' },
];

const Process = () => {
    return (
        <section className="section" style={{ background: '#111827', color: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Process</h2>
                    <p style={{ color: '#9CA3AF' }}>Seamless execution from start to finish.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    position: 'relative'
                }}>
                    {steps.map((step) => (
                        <div key={step.id} style={{ position: 'relative', zIndex: 1 }}>
                            <div style={{
                                fontSize: '4rem',
                                fontWeight: 'bold',
                                color: 'rgba(255,255,255,0.1)',
                                marginBottom: '-1rem',
                                fontFamily: 'var(--font-heading)'
                            }}>
                                {step.id}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary-blue)' }}>{step.title}</h3>
                            <p style={{ color: '#D1D5DB', lineHeight: '1.6' }}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
