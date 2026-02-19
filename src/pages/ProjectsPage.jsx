import React, { useState } from 'react';
import { MapPin, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import BeforeAfterSlider from '../components/public/BeforeAfterSlider';
import './ProjectsPage.css';

// Mock Data
const projectsData = [
    {
        id: 1,
        category: 'Residential',
        title: 'Luxury Shingle Install',
        location: 'Charlotte, NC',
        image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 2,
        category: 'Commercial',
        title: 'Flat Roof System',
        location: 'Raleigh, NC',
        image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 3,
        category: 'Storm Damage',
        title: 'Emergency Storm Repair',
        location: 'Concord, NC',
        image: 'https://images.unsplash.com/photo-1623161049386-4f7f50233633?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 4,
        category: 'Residential',
        title: 'Slate Roof Restoration',
        location: 'Asheville, NC',
        image: 'https://images.unsplash.com/photo-1517487227926-6a5669b369db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 5,
        category: 'Commercial',
        title: 'TPO Installation',
        location: 'Greensboro, NC',
        image: 'https://images.unsplash.com/photo-1598000780211-14c4495764d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 6,
        category: 'Repair & Maintenance', // Updated Category
        title: 'Luxury Estate Maintenance',
        location: 'Wilmington, NC',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
];

// Transformation Data
const transformations = [
    {
        id: 1,
        title: 'Historic Restoration',
        before: 'https://images.unsplash.com/photo-1623161049386-4f7f50233633?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
        after: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
        labelBefore: 'BEFORE (Damaged Slate)',
        labelAfter: 'AFTER (Restored Slate)'
    },
    {
        id: 2,
        title: 'Commercial Flat Roof',
        before: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80', // Using a generic roof for now as placeholder
        after: 'https://images.unsplash.com/photo-1598000780211-14c4495764d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
        labelBefore: 'BEFORE (Leaking TPO)',
        labelAfter: 'AFTER (New PVC System)'
    },
    {
        id: 3,
        title: 'Storm Damage Repair',
        before: 'https://images.unsplash.com/photo-1517487227926-6a5669b369db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80', // Using generic old house
        after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
        labelBefore: 'BEFORE (Hail Damage)',
        labelAfter: 'AFTER (Impact Resistant)'
    }
];

const ProjectsPage = () => {
    const [filter, setFilter] = useState('All');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeTransformation, setActiveTransformation] = useState(transformations[0]);

    const categories = ['All', 'Residential', 'Commercial', 'Storm Damage', 'Repair & Maintenance'];

    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % filteredProjects.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    };

    return (
        <div className="projects-page">
            {/* Hero Section */}
            <section className="projects-hero">
                <div className="container">
                    <h1 className="projects-title">Our Craft in North Carolina</h1>
                    <p className="projects-subtitle">A showcase of engineering excellence and durable roofing solutions.</p>

                    {/* Filter Bar */}
                    <div className="filter-bar">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Featured Component: Before & After Slider */}
                    <div style={{ marginTop: '60px' }}>
                        <BeforeAfterSlider
                            beforeImage={activeTransformation.before}
                            afterImage={activeTransformation.after}
                            beforeLabel={activeTransformation.labelBefore}
                            afterLabel={activeTransformation.labelAfter}
                        />

                        {/* Thumbnail Selector */}
                        <div className="transformation-thumbnails">
                            {transformations.map((item) => (
                                <button
                                    key={item.id}
                                    className={`transformation-thumb ${activeTransformation.id === item.id ? 'active' : ''}`}
                                    onClick={() => setActiveTransformation(item)}
                                >
                                    <div className="thumb-image-wrapper">
                                        <img src={item.after} alt={item.title} />
                                    </div>
                                    <span className="thumb-label">{item.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="projects-gallery section-padding">
                <div className="container">
                    <div className="projects-grid">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="project-card fade-up"
                                onClick={() => openLightbox(index)}
                            >
                                <div className="project-image-wrapper">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image"
                                        loading="lazy"
                                    />
                                    <div className="project-overlay">
                                        <div className="project-info">
                                            <span className="project-category">{project.category}</span>
                                            <h3 className="project-name">{project.title}</h3>
                                            <div className="project-location">
                                                <MapPin size={16} />
                                                <span>{project.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>
                        <X size={32} />
                    </button>

                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-nav prev" onClick={prevImage}>
                            <ChevronLeft size={48} />
                        </button>

                        <img
                            src={filteredProjects[currentImageIndex].image}
                            alt={filteredProjects[currentImageIndex].title}
                            className="lightbox-image"
                        />

                        <div className="lightbox-details">
                            <h3>{filteredProjects[currentImageIndex].title}</h3>
                            <p>{filteredProjects[currentImageIndex].location}</p>
                        </div>

                        <button className="lightbox-nav next" onClick={nextImage}>
                            <ChevronRight size={48} />
                        </button>
                    </div>
                </div>
            )}

            {/* Final CTA Section */}
            <section className="projects-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Your roof could be next. Get your free inspection today.</h2>
                        <button className="btn-cta-blue">
                            Get Free Inspection <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;
