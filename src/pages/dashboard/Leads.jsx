import React, { useState } from 'react';
import { Search, Filter, MoreHorizontal, FileText, Phone, Mail } from 'lucide-react';
import './Leads.css';

const initialLeads = [
    { id: 1, name: "Alice Johnson", address: "123 Maple Dr, Raleigh", date: "Oct 24, 2024", status: "New", amount: "$12,500" },
    { id: 2, name: "Bob Smith", address: "456 Oak Ln, Durham", date: "Oct 23, 2024", status: "Contacted", amount: "$8,200" },
    { id: 3, name: "Charlie Brown", address: "789 Pine St, Cary", date: "Oct 22, 2024", status: "Closed", amount: "$15,000" },
    { id: 4, name: "David Wilson", address: "321 Cedar Ave, Apex", date: "Oct 21, 2024", status: "New", amount: "$9,800" },
    { id: 5, name: "Eva Green", address: "654 Birch Rd, Chapel Hill", date: "Oct 20, 2024", status: "Contacted", amount: "$11,200" },
];

const Leads = () => {
    const [filterStatus, setFilterStatus] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredLeads = initialLeads.filter(lead => {
        const matchesStatus = filterStatus === 'All' || lead.status === filterStatus;
        const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lead.address.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    const getStatusBadge = (status) => {
        switch (status) {
            case 'New': return <span className="badge badge-blue">New</span>;
            case 'Contacted': return <span className="badge badge-gray">Contacted</span>;
            case 'Closed': return <span className="badge badge-black">Closed</span>;
            default: return <span className="badge">Unknown</span>;
        }
    };

    return (
        <div className="leads-page">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Leads Management</h2>
                <button className="btn btn-primary text-sm py-2 px-4 shadow-sm">
                    + Add Lead
                </button>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                {/* Filters */}
                <div className="p-4 border-b border-gray-200 flex flex-col md:flex-row gap-4 justify-between items-center bg-gray-50/50">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search by name or address..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                        <select
                            className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none"
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                        >
                            <option value="All">All Status</option>
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Closed">Closed</option>
                        </select>
                        <button className="border border-gray-300 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-50">
                            <Filter size={18} />
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Address</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Est. Value</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredLeads.map(lead => (
                                <tr key={lead.id} className="hover:bg-gray-50/80 transition-colors">
                                    <td className="px-6 py-4 font-medium text-gray-900">{lead.name}</td>
                                    <td className="px-6 py-4 text-gray-500">{lead.address}</td>
                                    <td className="px-6 py-4 text-gray-500">{lead.date}</td>
                                    <td className="px-6 py-4 text-gray-900 font-medium">{lead.amount}</td>
                                    <td className="px-6 py-4">{getStatusBadge(lead.status)}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <MoreHorizontal size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {filteredLeads.length === 0 && (
                        <div className="p-8 text-center text-gray-500">
                            No leads found matching your filters.
                        </div>
                    )}
                </div>

                {/* Pagination Placeholder */}
                <div className="p-4 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500">
                    <span>Showing {filteredLeads.length} of {initialLeads.length} leads</span>
                    <div className="flex gap-1">
                        <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leads;
