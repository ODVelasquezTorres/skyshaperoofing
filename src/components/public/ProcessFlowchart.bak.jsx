import React from 'react';
import './ProcessFlowchart.css';
import { ShieldCheck } from 'lucide-react';

const ProcessFlowchart = () => {
    return (
        <section id="process" className="process-flowchart-section">
            <div className="process-flowchart-container">
                <div className="process-header">
                    <h2>Our Expert Process</h2>
                    <p>From assessment to total protection. See how we care for your home.</p>
                </div>

                <div className="flowchart">
                    {/* LEVEL 1: Entry */}
                    <div className="level level-1">
                        <div className="flow-node entry-node tooltip-trigger">
                            <h3>Natural Wear</h3>
                            <span className="tooltip-text">Assessment of age-related deterioration to prevent future leaks.</span>
                        </div>
                        <div className="flow-node entry-node tooltip-trigger">
                            <h3>Storm Damage</h3>
                            <span className="tooltip-text">Immediate evaluation of Hail, Wind, or Tree damage to secure your property.</span>
                        </div>
                    </div>

                    {/* Connecting Lines Level 1 to 2 */}
                    <div className="connector-level split-4">
                        <div className="line pulse-line"></div>
                        <div className="line pulse-line"></div>
                        <div className="line pulse-line"></div>
                        <div className="line pulse-line"></div>
                    </div>

                    {/* LEVEL 2: Branches */}
                    <div className="level level-2">
                        {/* Natural Wear Branches */}
                        <div className="branch-group">
                            <div className="flow-node split-node">
                                <h4>Roof Repair</h4>
                            </div>
                            <div className="flow-node split-node">
                                <h4>Full Roof Replacement</h4>
                            </div>
                        </div>

                        {/* Storm Damage Branches */}
                        <div className="branch-group triple">
                            <div className="flow-node split-node">
                                <h4>Hail Damage</h4>
                            </div>
                            <div className="flow-node split-node">
                                <h4>Wind Damage</h4>
                            </div>
                            <div className="flow-node split-node">
                                <h4>Tree Removal</h4>
                            </div>
                        </div>
                    </div>

                    {/* Connecting Lines Level 2 to 3 (Storm Damage merges to Financing) */}
                    <div className="connector-level storm-to-finance">
                        <div className="line pulse-line merge-left"></div>
                        <div className="line pulse-line merge-center"></div>
                        <div className="line pulse-line merge-right"></div>
                    </div>

                    {/* LEVEL 3: Financing (Only under Storm Damage side initially, but we'll center them for visual flow) */}
                    <div className="level level-3">
                        <div className="flow-node finance-node tooltip-trigger">
                            <h3>Insurance Claim</h3>
                            <span className="tooltip-text">Professional assistance to document damage and maximize your policy coverage.</span>
                        </div>
                        <div className="flow-node finance-node tooltip-trigger">
                            <h3>Retail</h3>
                            <span className="tooltip-text">Flexible payment and financing options for projects not covered by insurance.</span>
                        </div>
                    </div>

                    {/* Connecting Lines Level 3 & Natural Wear to Level 4 */}
                    <div className="connector-level converge-to-center">
                        <div className="line pulse-line converge-left"></div>
                        <div className="line pulse-line converge-middle-left"></div>
                        <div className="line pulse-line converge-middle-right"></div>
                        <div className="line pulse-line converge-right"></div>
                    </div>

                    {/* LEVEL 4: Convergence */}
                    <div className="level level-4">
                        <div className="flow-node inspection-node tooltip-trigger main-action">
                            <ShieldCheck size={32} className="inspection-icon" />
                            <h2>Professional Inspection</h2>
                            <span className="tooltip-text">Our comprehensive 50-point check. This is where we define the best path for your home.</span>

                            <button className="schedule-action-btn" onClick={() => document.querySelector('.btn-login')?.click()}>
                                Schedule Now
                            </button>
                        </div>
                    </div>

                    {/* Connecting Line Level 4 to 5 */}
                    <div className="connector-level simple-down">
                        <div className="line pulse-line main-pulse"></div>
                    </div>

                    {/* LEVEL 5: Closing */}
                    <div className="level level-5">
                        <div className="closing-node">
                            <img src="/logo-flowchart.png" alt="Skyshape Roofing & Solutions" className="closing-logo" />
                            <p className="closing-slogan">Specialists in protecting what you love most: <strong>Your Home!</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessFlowchart;
