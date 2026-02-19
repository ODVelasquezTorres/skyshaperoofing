import React, { useState } from 'react';
import { X, Building2, Home, ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
    const [role, setRole] = useState(null); // null, 'enterprise', 'homeowner'
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleRoleSelect = (selectedRole) => {
        setRole(selectedRole);
    };

    const handleBack = () => {
        setRole(null);
    };

    // Mock login - in a real app this would call an API
    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
        navigate('/dashboard'); // For demo purposes, redirect to dashboard
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    <X size={24} />
                </button>

                {!role ? (
                    /* Role Selection View */
                    <div className="role-selection">
                        <h2 className="text-2xl font-bold mb-2 text-center text-gray-900">Welcome to Skyshape</h2>
                        <p className="text-gray-500 mb-8 text-center">Please select your portal to continue.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button
                                className="role-card group"
                                onClick={() => handleRoleSelect('enterprise')}
                            >
                                <div className="icon-box bg-blue-50 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Building2 size={32} />
                                </div>
                                <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Enterprise</h3>
                                <p className="text-sm text-gray-500">Contractors, Staff & Partners</p>
                            </button>

                            <button
                                className="role-card group"
                                onClick={() => handleRoleSelect('homeowner')}
                            >
                                <div className="icon-box bg-green-50 text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                    <Home size={32} />
                                </div>
                                <h3 className="font-bold text-lg mb-1 group-hover:text-green-600 transition-colors">Homeowner</h3>
                                <p className="text-sm text-gray-500">Track your roof claim & project</p>
                            </button>
                        </div>

                        <div className="mt-8 text-center text-sm text-gray-500">
                            Need to create an account? <a href="#contact" className="text-primary hover:underline">Contact Support</a>
                        </div>
                    </div>
                ) : (
                    /* Login Form View */
                    <div className="login-form-view">
                        <button className="back-button" onClick={handleBack}>
                            <ArrowLeft size={16} className="mr-1" /> Back
                        </button>

                        <div className="text-center mb-6">
                            <div className={`inline-flex p-3 rounded-full mb-3 ${role === 'enterprise' ? 'bg-blue-50 text-primary' : 'bg-green-50 text-green-600'}`}>
                                {role === 'enterprise' ? <Building2 size={24} /> : <Home size={24} />}
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900">
                                {role === 'enterprise' ? 'Enterprise Login' : 'Homeowner Access'}
                            </h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {role === 'enterprise' ? (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                            placeholder="name@company.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                        <input
                                            type="password"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                            placeholder="••••••••"
                                            required
                                        />
                                    </div>
                                    <div className="flex justify-end">
                                        <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Claim Number</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                                            placeholder="CLM-2024-XXXX"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                                            placeholder="12345"
                                            pattern="[0-9]{5}"
                                            required
                                        />
                                    </div>
                                </>
                            )}

                            <button
                                type="submit"
                                className={`w-full py-3 px-4 rounded-lg text-white font-bold shadow-md transition-transform active:scale-95 flex justify-center items-center ${role === 'enterprise' ? 'bg-primary hover:bg-blue-700' : 'bg-green-600 hover:bg-green-700'}`}
                            >
                                {role === 'enterprise' ? 'Sign In' : 'View My Project'} <ArrowRight size={18} className="ml-2" />
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LoginModal;
