import React from 'react';
import { Search, FileText, Hammer, ClipboardCheck, ShieldCheck } from 'lucide-react';
import './ProcessFlow.css';

const ProcessFlow = () => {
    const steps = [
        {
            id: '01',
            title: 'Professional Inspection',
            description: 'A thorough assessment of roof conditions based on visual evidence, honesty, and ethics.',
            icon: <Search size={32} strokeWidth={1.5} />
        },
        {
            id: '02',
            title: 'Transparent Estimate',
            description: 'A detailed quote with no hidden fees, adaptable to material quality and budget.',
            icon: <FileText size={32} strokeWidth={1.5} />
        },
        {
            id: '03',
            title: 'Expert Installation',
            description: 'Professional execution utilizing premium materials with dedication to every detail.',
            icon: <Hammer size={32} strokeWidth={1.5} />
        },
        {
            id: '04',
            title: 'Documentation Delivery',
            description: 'Provision of all work details and a formal warranty certificate upon completion.',
            icon: <ClipboardCheck size={32} strokeWidth={1.5} />
        },
        {
            id: '05',
            title: 'Final Review',
            description: 'A comprehensive quality check to ensure 100% customer satisfaction.',
            icon: <ShieldCheck size={32} strokeWidth={1.5} />
        }
    ];

    return (
        <section className="process-flow-section">
            <div className="container">
                <div className="process-header">
                    <h2 className="process-main-title">Our Process: Simple, Transparent, and Efficient</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="process-steps-container">
                    {/* Connection Line (Desktop) */}
                    <div className="process-line-desktop"></div>

                    <div className="process-grid">
                        {steps.map((step, index) => (
                            <div key={step.id} className="process-step-card" style={{ '--delay': `${index * 0.1}s` }}>
                                <div className="step-number-bg">{step.id}</div>

                                <div className="step-icon-box">
                                    {step.icon}
                                </div>

                                <div className="step-content">
                                    <h3 className="step-title">
                                        <span className="step-id-prefix">{step.id}.</span> {step.title}
                                    </h3>
                                    <p className="step-description">{step.description}</p>
                                </div>

                                {index < steps.length - 1 && (
                                    <div className="mobile-connector">
                                        <div className="connector-dot"></div>
                                        <div className="connector-line"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessFlow;
