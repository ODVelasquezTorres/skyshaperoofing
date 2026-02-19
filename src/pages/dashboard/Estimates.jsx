import React from 'react';
import { FileText, Download, Send, Printer } from 'lucide-react';
import './Estimates.css';

const Estimates = () => {
    return (
        <div className="estimates-page flex flex-col h-full overflow-hidden">
            <div className="flex justify-between items-center mb-6 px-1">
                <h2 className="text-2xl font-bold text-gray-900">Estimate #EST-2024-001</h2>
                <div className="flex gap-2">
                    <button className="btn btn-secondary text-sm py-2 px-3 shadow-sm bg-white text-gray-600 border-gray-300 hover:bg-gray-50 flex items-center gap-2">
                        <Printer size={16} /> Print
                    </button>
                    <button className="btn btn-secondary text-sm py-2 px-3 shadow-sm bg-white text-gray-600 border-gray-300 hover:bg-gray-50 flex items-center gap-2">
                        <Download size={16} /> Export PDF
                    </button>
                    <button className="btn btn-primary text-sm py-2 px-4 shadow-sm flex items-center gap-2">
                        <Send size={16} /> Send to Client
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 h-full overflow-hidden">
                {/* Left: Detail Estimate */}
                <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm overflow-y-auto p-8">
                    <div className="flex justify-between items-start mb-8 pb-8 border-b border-gray-100">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">Skyshaperoofing NC</h3>
                            <p className="text-sm text-gray-500">123 Roofing Lane, Raleigh NC 27601</p>
                            <p className="text-sm text-gray-500">info@skyshaperoofing.com</p>
                        </div>
                        <div className="text-right">
                            <h3 className="text-lg font-bold text-gray-900 mb-1">Bill To:</h3>
                            <p className="text-sm text-gray-500">John Doe</p>
                            <p className="text-sm text-gray-500">456 Oak Street, Durham NC 27701</p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h4 className="text-sm font-bold text-gray-700 uppercase mb-4 tracking-wide">Line Items</h4>
                        <table className="w-full text-sm text-left">
                            <thead>
                                <tr className="border-b border-gray-200 text-gray-500">
                                    <th className="py-2 w-1/2">Description</th>
                                    <th className="py-2 text-right">Qty</th>
                                    <th className="py-2 text-right">Unit Price</th>
                                    <th className="py-2 text-right">Total</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr>
                                    <td className="py-4 font-medium text-gray-900">
                                        Architectural Shingles (Owens Corning Duration)
                                        <p className="text-xs text-gray-500 font-normal">Color: Estate Gray, 30 Year Warranty</p>
                                    </td>
                                    <td className="py-4 text-right">32 sq</td>
                                    <td className="py-4 text-right">$125.00</td>
                                    <td className="py-4 text-right font-medium">$4,000.00</td>
                                </tr>
                                <tr>
                                    <td className="py-4 font-medium text-gray-900">
                                        Underlayment (Synthetic)
                                        <p className="text-xs text-gray-500 font-normal">High performance moisture barrier</p>
                                    </td>
                                    <td className="py-4 text-right">32 sq</td>
                                    <td className="py-4 text-right">$45.00</td>
                                    <td className="py-4 text-right font-medium">$1,440.00</td>
                                </tr>
                                <tr>
                                    <td className="py-4 font-medium text-gray-900">
                                        Labor & Installation
                                    </td>
                                    <td className="py-4 text-right">1</td>
                                    <td className="py-4 text-right">$3,500.00</td>
                                    <td className="py-4 text-right font-medium">$3,500.00</td>
                                </tr>
                                <tr>
                                    <td className="py-4 font-medium text-gray-900">
                                        Waste Removal & Cleanup
                                    </td>
                                    <td className="py-4 text-right">1</td>
                                    <td className="py-4 text-right">$450.00</td>
                                    <td className="py-4 text-right font-medium">$450.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                        <p className="text-sm text-gray-500 mb-2"><strong>Notes:</strong> Estimate valid for 30 days. Includes 10-year workmanship warranty.</p>
                    </div>
                </div>

                {/* Right: Financial Summary */}
                <div className="w-full lg:w-1/3 flex flex-col gap-6">
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-6">Summary</h3>

                        <div className="space-y-3 text-sm mb-6 pb-6 border-b border-gray-100">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>$9,390.00</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Tax (4.75%)</span>
                                <span>$446.02</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Discounts</span>
                                <span className="text-green-600">-$0.00</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center mb-8">
                            <span className="text-lg font-bold text-gray-900">Total</span>
                            <span className="text-2xl font-bold text-primary">$9,836.02</span>
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">
                                <span>Payment Schedule</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Deposit (50%)</p>
                                    <p className="text-xs text-gray-500">Due upon signing</p>
                                </div>
                                <span className="font-medium text-gray-900">$4,918.01</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Completion</p>
                                    <p className="text-xs text-gray-500">Due upon completion</p>
                                </div>
                                <span className="font-medium text-gray-900">$4,918.01</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex-1">
                        <h3 className="text-sm font-bold text-gray-700 uppercase mb-4 tracking-wide">Estimate Status</h3>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <span className="text-sm font-medium text-gray-900">Draft / Review</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-6">This estimate is currently in draft mode. Send to client to start the approval process.</p>

                        <button className="w-full btn btn-secondary text-sm py-2 border-gray-300 hover:bg-gray-50 text-gray-600">
                            View History
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estimates;
