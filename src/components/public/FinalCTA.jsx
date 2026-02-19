const FinalCTA = () => {
    return (
        <section className="section" style={{ background: 'var(--color-primary-blue)', color: 'white', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to Elevate Your Project?</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', opacity: '0.9' }}>
                    Schedule a consultation with our structural experts today.
                </p>
                <button style={{
                    background: 'white',
                    color: 'var(--color-primary-blue)',
                    padding: '1rem 2.5rem',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    fontSize: '1.125rem'
                }}>
                    Get a Quote
                </button>
            </div>
        </section>
    );
};

export default FinalCTA;
