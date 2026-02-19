const projects = [
    {
        id: 1,
        title: 'Modern Villa',
        category: 'Residential',
        image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 2,
        title: 'Skyline Penthouse',
        category: 'Commercial',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 3,
        title: 'Coastal Retreat',
        category: 'Residential',
        image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 4,
        title: 'Urban Loft',
        category: 'Renovation',
        image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    }
];

const Projects = () => {
    return (
        <section className="section" id="projects">
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                    <div>
                        <h5 style={{ color: 'var(--color-primary-blue)', letterSpacing: '0.1em', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Selected Works</h5>
                        <h2 style={{ fontSize: '2.5rem' }}>Featured Projects</h2>
                    </div>
                    <button style={{ color: 'var(--color-primary-blue)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        View All Projects &rarr;
                    </button>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {projects.map((project) => (
                        <div key={project.id} className="group" style={{ position: 'relative', overflow: 'hidden', borderRadius: '8px', cursor: 'pointer', aspectRatio: '4/3' }}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-img"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                            />
                            <div
                                className="project-overlay"
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    padding: '2rem',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease'
                                }}
                            >
                                <span style={{ color: 'var(--color-primary-blue)', fontSize: '0.875rem', fontWeight: 'bold' }}>{project.category}</span>
                                <h3 style={{ color: 'white', fontSize: '1.5rem' }}>{project.title}</h3>
                            </div>
                            <style>{`
                .project-img:hover { transform: scale(1.05) !important; }
                .group:hover .project-overlay { opacity: 1 !important; }
              `}</style>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
