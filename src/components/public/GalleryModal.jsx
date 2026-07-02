import React from 'react';
import { X, Image } from 'lucide-react';
import './GalleryModal.css';

export const DEFAULT_PROJECTS = [
    {
        id: 1,
        title: "Mr. Armendariz's House — Full Roof Replacement",
        tag: "Roof Replacement",
        cover: "/carrusel/despues 1.jpeg",
        phases: {
            before: ["/carrusel/antes.jpeg"],
            inProgress: ["/carrusel/proceso 1.jpeg", "/carrusel/proceso 2.jpeg", "/carrusel/proceso 3.jpeg", "/carrusel/proceso 4.jpeg", "/carrusel/proceso 5.jpeg"],
            after: ["/carrusel/despues 1.jpeg", "/carrusel/despues 2.jpeg", "/carrusel/despues 3.jpeg"]
        },
        description: [
            "Mr. Armendáriz's home is located in the Windsor Park area of East Charlotte, in the city of Charlotte.",
            "This was an insurance-processed project, and we are very pleased to have completed his roof replacement. Due to its previous condition, the property was at high risk of leaks and potential structural damage in the future."
        ]
    },
    {
        id: 2,
        title: "Mrs. Lark’s House — Full Roof Replacement",
        tag: "Roof Replacement",
        cover: "/compare (3).jpeg",
        phases: {
            before: ["/compare (1).jpeg"],
            inProgress: ["/compare (2).jpeg"],
            after: ["/compare (3).jpeg", "/video.mp4"]
        },
        description: [
            "Mrs. Lark’s home is located in the Back Creek Church Road area of East Charlotte, in the city of Charlotte.",
            "This was a successful insurance-processed roof replacement project, completed in just one day by the SkyShape Roofing & Solutions team. We are very pleased to have helped Mrs. Lark through the insurance process and deliver a smooth, efficient installation from start to finish.",
            "The new roofing system not only refreshed the appearance of the home, but also added long-term value and protection for the property. Another successful project completed for a homeowner in the Charlotte area."
        ]
    },
    {
        id: 3,
        title: "Mrs. Armendáriz’s House — Full Roof Replacement",
        tag: "Roof Replacement",
        cover: "/6.jpeg",
        phases: {
            before: ["/1.jpeg", "/2.jpeg"],
            inProgress: ["/3.jpeg", "/4.jpeg", "/5.jpeg"],
            after: ["/6.jpeg", "/7.jpeg", "/8.jpeg"]
        },
        description: [
            "Mrs. Armendáriz’s home is located in the Windsor Park area of East Charlotte.",
            "This was a successful insurance-approved roof replacement project completed by the SkyShape Roofing & Solutions team. From the day the insurance claim was opened to the completion of the roof replacement, the process took approximately 6 to 8 weeks.",
            "What makes this project especially meaningful is that Mrs. Armendáriz was referred to us by a family member whose roof we had previously replaced through the insurance process. That recommendation reflects the trust we work hard to earn with every homeowner we serve.",
            "Through persistence, proper documentation, and close collaboration with the homeowner, the claim was successfully approved, allowing us to complete the roof replacement and provide lasting protection for the home.",
            "We are grateful for the trust the Armendáriz family placed in our team and proud to have helped another Charlotte homeowner navigate the insurance process from start to finish."
        ]
    },
    {
        id: 4,
        title: "Mrs. Pham’s House — Full Roof & Gutters Replacement",
        tag: "Roof & Gutters Replacement",
        cover: "/Finalll (1).jpeg",
        phases: {
            before: ["/Antess (1).jpeg", "/Antess (2).jpeg", "/Antess (3).jpeg", "/Antess (4).jpeg", "/Antess (5).jpeg", "/Antess (6).jpeg"],
            inProgress: ["/Procesos (1).jpeg", "/Procesos (2).jpeg"],
            after: ["/Finalll (1).jpeg", "/Finalll (2).jpeg", "/Finalll (3).jpeg", "/Finalll (4).jpeg", "/Finalll (5).jpeg", "/Finalll (6).jpeg", "/Finalll (7).jpeg", "/Finalll (8).jpeg"]
        },
        description: [
            "Mrs. Pham’s home is located in the Windsor Park area of East Charlotte.",
            "This was another successful insurance-approved roof replacement completed by the SkyShape Roofing & Solutions team.",
            "What makes this project especially meaningful is that it marks the third roof we have completed in the same neighborhood. To us, that reflects something very important: the trust we have earned from local homeowners and their referrals to friends and neighbors.",
            "Mrs. Pham was very happy with the roofing process and the final result. Because of that confidence, she also chose our team to replace her gutters, allowing us to further improve and protect her home.",
            "At SkyShape Roofing & Solutions, our goal is not only to help homeowners with their roofs, but also with their home’s exterior needs. We are proud to provide complete solutions that help protect, improve, and add value to every property we serve.",
            "We are grateful for the trust of the Windsor Park community and look forward to helping even more homeowners in the neighborhood."
        ]
    }
];

export const getMergedProjects = () => {
    const saved = localStorage.getItem('skyshape_projects');
    const additional = saved ? JSON.parse(saved) : [];
    return [...DEFAULT_PROJECTS, ...additional];
};

const GalleryModal = ({ onClose, onSelectProject }) => {
    // Prevent background scrolling when modal is open
    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const allProjects = getMergedProjects();

    return (
        <div className="gallery-modal-backdrop" onClick={handleBackdropClick}>
            <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="gallery-modal-close" onClick={onClose} aria-label="Close gallery">
                    <X size={28} />
                </button>

                <div className="gallery-modal-header">
                    <span className="gallery-modal-subtitle">CHOOSE A PROJECT</span>
                    <h2 className="gallery-modal-title">Our Portfolio</h2>
                    <p className="gallery-modal-desc">Select a project to see the full transformation process.</p>
                </div>

                <div className="gallery-modal-grid">
                    {allProjects.map(project => (
                        <div 
                            key={project.id} 
                            className="gallery-modal-card" 
                            onClick={() => onSelectProject(project)}
                        >

                            <div className="gallery-modal-card-image">
                                <img src={project.cover} alt={project.title} />
                                <div className="gallery-modal-card-overlay">
                                    <span className="gallery-modal-card-tag">{project.tag}</span>
                                </div>
                            </div>
                            <div className="gallery-modal-card-info">
                                <h3 className="gallery-modal-card-title">{project.title}</h3>
                                <span className="gallery-modal-card-action">View details →</span>
                            </div>
                        </div>
                    ))}

                    {/* Placeholders for future projects */}
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <div key={`placeholder-${idx}`} className="gallery-modal-card placeholder">
                            <div className="placeholder-content">
                                <Image size={16} className="placeholder-icon-img" />
                                <span className="placeholder-text">Coming Soon</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryModal;
