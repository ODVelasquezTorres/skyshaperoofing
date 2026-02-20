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
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80"
                                alt="Beautiful home protected by SkyShape roofing"
                                loading="lazy"
                            />
                        </div>

                        {/* Right: Content */}
                        <div className="about-content">
                            <p className="about-pre-headline">BEYOND CONSTRUCTION</p>
                            <h2 className="about-headline">
                                Everything you love lives under your roof.
                            </h2>
                            <p className="about-body-text">
                                <strong>Protect it with the best.</strong> At SkyShape, we understand that your home
                                is your most valuable asset. With <strong>5 years of deep industry experience</strong> in
                                North Carolina and over <strong>100+ projects completed</strong> in every specialty—from
                                precision roofing to emergency restoration—we bring more than just tools to the job.
                                We bring the <strong>best warranty in NC</strong> and a commitment to quality that
                                covers what matters most.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== BLOCK 2: IMPACT STATS ===== */}
            <section className="about-stats">
                <div className="about-stats-inner">
                    <div className="about-stats-divider"></div>
                    <div className="about-stats-grid">
                        <div className="about-stat-item">
                            <div className="about-stat-number">5+</div>
                            <div className="about-stat-label">Years of Local Expertise</div>
                        </div>
                        <div className="about-stats-vertical-divider"></div>
                        <div className="about-stat-item">
                            <div className="about-stat-number">1,000+</div>
                            <div className="about-stat-label">Total Projects — Delivering Excellence</div>
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
