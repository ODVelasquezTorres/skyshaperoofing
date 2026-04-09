import React from 'react';
import { Star } from 'lucide-react';
import './ReviewsSection.css';
import qrCode from '../../assets/slider/qr.png';

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
                                    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                    </svg>
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
                    <a href="https://maps.app.goo.gl/Gnfgv3zbwoZzHP4R7" className="btn-google-reviews" target="_blank" rel="noopener noreferrer">
                        See all reviews on Google
                    </a>
                    <a href="https://g.page/r/CdZPg2lG0FNDEAE/review" className="btn-leave-review" target="_blank" rel="noopener noreferrer">
                        Leave a Review
                    </a>
                </div>

                <div className="qr-review-block">
                    <div className="qr-divider" />
                    <p className="qr-title">
                        Happy with our work?
                    </p>
                    <p className="qr-sub">
                        Scan the QR code and leave us a review on Google
                    </p>
                    <img
                        src={qrCode}
                        alt="QR Google Reviews SkyShape Roofing"
                        className="qr-image"
                        loading="lazy"
                        width="180"
                        height="180"
                    />
                    <p className="qr-footer">
                        📍 SkyShape Roofing — Charlotte, NC
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
