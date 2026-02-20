import React from 'react';
import './AboutUs.css';

const teamMembers = [
    {
        id: 1,
        name: 'Director Name',
        role: 'Managing Director',
        description: 'Expert in insurance restoration with a focus on structural integrity and client advocacy.',
        photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face&q=80'
    },
    {
        id: 2,
        name: 'Director Name',
        role: 'Operations Director',
        description: 'Specialist in project management and quality assurance across residential and commercial roofing.',
        photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&q=80'
    },
    {
        id: 3,
        name: 'Director Name',
        role: 'Field Director',
        description: 'Hands-on leadership in emergency restoration and storm damage response across North Carolina.',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&q=80'
    }
];

const AboutUs = () => {
    return (
        <>
            {/* ===== BLOCK 1: THE MISSION ===== */}
            <section className="about-mission" id="about">
                <div className="about-container">
                    <div className="about-mission-grid">
                        {/* Left: Image */}
                        <div className="about-image-wrapper">
                            <img
                                src="/tarjeta-presentacion.png"
                                alt="SkyShape Roofing corporate mockup"
                                loading="lazy"
                            />
                        </div>

                        {/* Right: Content */}
                        <div className="about-content">
                            <p className="about-pre-headline">THE SKYSHAPE LEGACY</p>
                            <h2 className="about-headline">
                                Beyond Construction: We Build Peace of Mind.
                            </h2>
                            <p className="about-sub-headline" style={{ fontStyle: 'italic', fontSize: '1.2rem', color: '#64748b', marginBottom: '24px' }}>
                                "Because a roof is more than a structure—it’s the guardian of your family’s history."
                            </p>

                            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>🤝 Our Essence</h3>
                            <p className="about-body-text">
                                At SkyShape Roofing & Solutions, we don't just see shingles, gutters, or siding. We see the laughter in your living room, the safety of your children’s sleep, and the investment of a lifetime.
                            </p>
                            <p className="about-body-text">
                                For the past 5 years, we’ve rooted ourselves in the North Carolina community, not as contractors, but as neighbors. With over 100+ projects successfully completed in every specialty, our experience isn't just a number—it’s a promise that we’ve seen it all and fixed it all with the same care we’d give our own homes.
                            </p>

                            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a', marginTop: '24px', marginBottom: '8px' }}>Why We Do It</h3>
                            <p className="about-body-text">
                                We bring more than just tools to your driveway. We bring a commitment to quality that covers what matters most. Whether it’s a meticulous restoration or a precision installation, we work so that when the storm hits, the only thing you have to worry about is which movie to watch with your loved ones.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== BLOCK 3: THE EXECUTIVE TEAM ===== */}
            <section className="about-team">
                <div className="about-team-container">
                    <div className="about-team-header">
                        <p className="about-team-pre">LEADERSHIP</p>
                        <h2 className="about-team-title">The Hands Behind the Standard</h2>
                    </div>

                    <div className="about-team-grid">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="about-team-card">
                                <div className="about-team-photo-wrapper">
                                    <img
                                        src={member.photo}
                                        alt={`${member.name} - ${member.role}`}
                                        loading="lazy"
                                    />
                                </div>
                                <h3 className="about-team-name">{member.name}</h3>
                                <p className="about-team-role">{member.role}</p>
                                <p className="about-team-desc">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
