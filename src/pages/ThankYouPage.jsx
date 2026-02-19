import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowLeft, MessageCircle } from 'lucide-react';
import './ThankYouPage.css';

const ThankYouPage = () => {
    // Simple confetti effect on mount
    useEffect(() => {
        const createConfetti = () => {
            const colors = ['#007BFF', '#10B981', '#F59E0B', '#EF4444'];
            const container = document.getElementById('confetti-container');

            if (!container) return;

            for (let i = 0; i < 30; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti-piece';
                confetti.style.left = `${Math.random() * 100}%`;
                confetti.style.animationDelay = `${Math.random() * 2}s`;
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                container.appendChild(confetti);
            }
        };

        createConfetti();
    }, []);

    return (
        <div className="thank-you-page">
            <div id="confetti-container" className="confetti-container"></div>

            <div className="thank-you-card fade-in-up">
                <div className="success-icon-container">
                    <Check size={48} strokeWidth={3} />
                </div>

                <h1 className="thank-you-title">Success! Your Request is in Good Hands.</h1>

                <p className="thank-you-body">
                    Thank you for trusting SkyShape. Our specialist team is reviewing your details and will call you within the next 24 business hours to confirm your inspection.
                </p>

                {/* Urgent Assistance Block */}
                <div className="urgent-assistance-box">
                    <p className="urgent-text">Need immediate assistance? Speak with us right now.</p>
                    <a
                        href="https://wa.me/17045848280?text=Hi%20SkyShape,%20I%20just%20requested%20a%20free%20inspection%20and%20have%20some%20urgent%20questions."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp pulse-animation"
                    >
                        <MessageCircle size={20} />
                        Chat with a Specialist Now
                    </a>
                </div>

                <Link to="/" className="return-link">
                    <ArrowLeft size={16} />
                    Return to Homepage
                </Link>
            </div>
        </div>
    );
};

export default ThankYouPage;
