import React from 'react';
import { DollarSign, Briefcase, UserPlus, CheckSquare, TrendingUp, MoreHorizontal } from 'lucide-react';
import './Overview.css';

const Overview = () => {
    return (
        <div className="overview-page">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
                    <p className="text-gray-500 mt-1">Here's what's happening with your business today.</p>
                </div>
                <button className="btn btn-primary text-sm py-2 px-4 shadow-sm">
                    + New Estimate
                </button>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="kpi-card bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-blue-50 rounded-lg text-primary">
                            <DollarSign size={24} />
                        </div>
                        <span className="text-green-600 text-sm font-medium flex items-center bg-green-50 px-2 py-1 rounded-full">
                            <TrendingUp size={14} className="mr-1" /> +12.5%
                        </span>
                    </div>
                    <h3 className="text-gray-500 text-sm font-medium mb-1">Total Revenue</h3>
                    <p className="text-3xl font-bold text-gray-900">$124,500</p>
                </div>

                <div className="kpi-card bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-indigo-50 rounded-lg text-indigo-600">
                            <Briefcase size={24} />
                        </div>
                        <span className="text-gray-400 hover:text-gray-600 cursor-pointer">
                            <MoreHorizontal size={20} />
                        </span>
                    </div>
                    <h3 className="text-gray-500 text-sm font-medium mb-1">Active Projects</h3>
                    <p className="text-3xl font-bold text-gray-900">18</p>
                </div>

                <div className="kpi-card bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-orange-50 rounded-lg text-orange-600">
                            <UserPlus size={24} />
                        </div>
                        <span className="text-green-600 text-sm font-medium flex items-center bg-green-50 px-2 py-1 rounded-full">
                            <TrendingUp size={14} className="mr-1" /> +5.2%
                        </span>
                    </div>
                    <h3 className="text-gray-500 text-sm font-medium mb-1">New Leads</h3>
                    <p className="text-3xl font-bold text-gray-900">42</p>
                </div>

                <div className="kpi-card bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition-shadow hover:shadow-md">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-purple-50 rounded-lg text-purple-600">
                            <CheckSquare size={24} />
                        </div>
                        <span className="text-gray-400 hover:text-gray-600 cursor-pointer">
                            <MoreHorizontal size={20} />
                        </span>
                    </div>
                    <h3 className="text-gray-500 text-sm font-medium mb-1">Pending Tasks</h3>
                    <p className="text-3xl font-bold text-gray-900">7</p>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Revenue Chart Placeholder */}
                <div className="col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-gray-900">Revenue Overview</h3>
                        <select className="text-sm border-gray-300 rounded-md text-gray-600 bg-gray-50 border p-1">
                            <option>Last 30 Days</option>
                            <option>Last Quarter</option>
                            <option>This Year</option>
                        </select>
                    </div>
                    <div className="chart-placeholder h-72 w-full bg-gray-50 rounded-lg flex items-end justify-between px-8 pb-4">
                        {/* Fake bars */}
                        <div className="w-8 bg-blue-100 rounded-t h-1/3"></div>
                        <div className="w-8 bg-blue-200 rounded-t h-1/2"></div>
                        <div className="w-8 bg-blue-300 rounded-t h-2/3"></div>
                        <div className="w-8 bg-blue-400 rounded-t h-1/4"></div>
                        <div className="w-8 bg-blue-500 rounded-t h-3/4"></div>
                        <div className="w-8 bg-blue-600 rounded-t h-full"></div>
                        <div className="w-8 bg-blue-500 rounded-t h-2/3"></div>
                        <div className="w-8 bg-blue-400 rounded-t h-1/2"></div>
                    </div>
                </div>

                {/* Recent Leads / Tasks */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-6">Recent Activity</h3>
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">New lead from Website</p>
                                <p className="text-xs text-gray-500">2 minutes ago • John Smith</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">Estimate Approved</p>
                                <p className="text-xs text-gray-500">1 hour ago • Modern Villa Project</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">Inspection Scheduled</p>
                                <p className="text-xs text-gray-500">3 hours ago • 123 Maple Dr</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">Invoice Paid #4023</p>
                                <p className="text-xs text-gray-500">Yesterday • $4,200.00</p>
                            </div>
                        </div>
                    </div>
                    <button className="w-full mt-6 py-2 text-sm text-primary font-medium hover:bg-blue-50 rounded-lg transition-colors">
                        View All Activity
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Overview;
