import { Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Jenkins',
        role: 'Homeowner',
        content: 'The team at SKYSHAPEROOFING transformed our home. The attention to detail is unmatched.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Michael Ross',
        role: 'Architect',
        content: 'As an architect, I appreciate their structural expertise. They are my go-to for complex roofing projects.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Elena Rodriguez',
        role: 'Property Manager',
        content: 'Reliable, professional, and the end result is simply stunning. Highly recommended.',
        rating: 5,
    }
];

const Testimonials = () => {
    return (
        <section className="section" style={{ background: '#F9FAFB' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Client Trust</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {testimonials.map((t) => (
                        <div key={t.id} style={{
                            background: 'white',
                            padding: '2rem',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}>
                            <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem', color: '#FBBF24' }}>
                                {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: '#4B5563' }}>"{t.content}"</p>
                            <div>
                                <div style={{ fontWeight: 'bold' }}>{t.name}</div>
                                <div style={{ fontSize: '0.875rem', color: '#9CA3AF' }}>{t.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
