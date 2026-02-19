import React from 'react';
import { Star } from 'lucide-react';
import './ReviewsSection.css';

// Mock Data simulating Google Places API response
const reviews = [
    {
        author_name: "Sarah Thompson",
        profile_photo_url: "https://lh3.googleusercontent.com/a-/ALV-UjWab1...=s128-c0x00000000-cc-rp-mo", // Placeholder logic in CSS
        rating: 5,
        relative_time_description: "2 months ago",
        text: "Skyshaperoofing transformed our home! The team was professional, cleaned up perfectly, and finished ahead of schedule. The new roof looks absolutely amazing. Highly recommended for anyone in Charlotte!",
        google_url: "#"
    },
    {
        author_name: "Michael Rodriguez",
        profile_photo_url: null, // Will use default avatar
        rating: 5,
        relative_time_description: "1 month ago",
        text: "Transparent pricing and excellent communication throughout the entire process. They handled the insurance claim directly with my adjuster, making it a stress-free experience. 5 stars!",
        google_url: "#"
    },
    {
        author_name: "Emily Jenkins",
        profile_photo_url: null,
        rating: 5,
        relative_time_description: "3 weeks ago",
        text: "We had a severe storm damage our shingles. Skyshape came out the next day, gave a fair estimate, and the repair was seamless. You can't even tell where the damage was. Thank you!",
        google_url: "#"
    }
];

const ReviewsSection = () => {
    return (
        <section className="reviews-section section-padding bg-white" id="testimonials">
            <div className="container">
                <div className="reviews-header text-center mb-16">
                    <div className="google-badge">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="google-logo" />
                        <span className="review-count">Excellent 5.0</span>
                        <div className="stars-row">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill="#F4B400" stroke="none" />
                            ))}
                        </div>
                    </div>
                    <h2 className="section-title">What Our Clients Say</h2>
                    <p className="section-subtitle">Real feedback from verified homeowners.</p>
                </div>

                <div className="reviews-grid">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <div className="review-header">
                                <div className="reviewer-avatar">
                                    {review.profile_photo_url && !review.profile_photo_url.includes('...') ? (
                                        <img src={review.profile_photo_url} alt={review.author_name} />
                                    ) : (
                                        <div className="avatar-placeholder">
                                            {review.author_name.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <div className="reviewer-info">
                                    <h4 className="reviewer-name">{review.author_name}</h4>
                                    <span className="review-date">{review.relative_time_description}</span>
                                </div>
                                <div className="google-icon-small">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="G" />
                                </div>
                            </div>

                            <div className="review-stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={14}
                                        fill={i < review.rating ? "#F4B400" : "#E0E0E0"}
                                        stroke="none"
                                    />
                                ))}
                            </div>

                            <div className="review-body">
                                <p>"{review.text}"</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="reviews-cta text-center mt-12">
                    <a href="#" className="btn-google-reviews" target="_blank" rel="noopener noreferrer">
                        See all reviews on Google
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
