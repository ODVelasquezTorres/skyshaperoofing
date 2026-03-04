import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './FAQSection.css';

const faqs = [
    {
        question: "How do I know if I need a roof repair or a full replacement?",
        answer: "Missing shingles, noticeable leaks, and granules in your gutters are key signs of wear. However, the best way to determine the extent of the damage is through a professional inspection. We offer free, zero-obligation assessments to give you an honest and transparent recommendation."
    },
    {
        question: "Will my insurance cover the cost of my new roof?",
        answer: "If your roof was damaged by an unforeseen event like a storm, high winds, or fallen trees, your homeowner's insurance typically covers the restoration. As seasoned professionals, we guide you through the entire claims process—from the initial inspection and meticulous documentation to meeting with your adjuster—ensuring you get the coverage you deserve."
    },
    {
        question: "How long does a typical roof replacement take?",
        answer: "Most residential roof replacements are seamlessly completed in just 1 to 2 days. We pride ourselves on executing an efficient process that minimizes disruption to your daily routine, and we always ensure an immaculate site clean-up before we consider the job done."
    },
    {
        question: "Do you handle the necessary city permits and code compliance?",
        answer: "Absolutely. We manage all local Charlotte permits and inspections behind the scenes. Our engineering strictly adheres to the North Carolina State Building Code, so you can have complete peace of mind knowing your new roofing system is installed perfectly to spec without risking city delays."
    },
    {
        question: "What types of roofing materials do you offer?",
        answer: "We offer a variety of high-performance materials, from cost-effective Architectural Asphalt Shingles to premium Metal, Slate, and Tile systems. During your consultation, we'll help you select the absolute best option that fits your investment goals, enhances your home's aesthetic, and maximizes durability."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0); // First item open by default

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq-section bg-slate-50">
            <div className="container faq-container">
                <div className="faq-header text-center">
                    <div className="faq-badge">
                        <HelpCircle size={16} />
                        <span>Common Questions</span>
                    </div>
                    <h2 className="faq-title">Frequently Asked Questions.</h2>
                    <p className="faq-subtitle">
                        Everything you need to know about our process, materials, and how we handle your roofing project with unwavering professionalism.
                    </p>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`faq-item ${isOpen ? 'is-open' : ''}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="faq-question-wrapper">
                                    <h3 className="faq-question">{faq.question}</h3>
                                    <div className="faq-icon-wrapper">
                                        <ChevronDown size={20} className="faq-icon" strokeWidth={2.5} />
                                    </div>
                                </div>
                                <div className="faq-answer-wrapper">
                                    <div className="faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
