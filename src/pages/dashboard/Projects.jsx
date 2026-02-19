import React, { useState } from 'react';
import { LayoutGrid, List, MoreHorizontal, Calendar, Clock } from 'lucide-react';
import './Projects.css';

const projectsData = [
    { id: 1, title: "Modern Villa Roof", client: "John Doe", status: "In Progress", type: "Metal", date: "Due Oct 30" },
    { id: 2, title: "Downtown Commercial", client: "Business Corp", status: "New", type: "TPO", date: "Due Nov 15" },
    { id: 3, title: "Heritage Restoration", client: "City History", status: "Inspection", type: "Slate", date: "Due Nov 01" },
    { id: 4, title: "Suburban Shingles", client: "Jane Smith", status: "Completed", type: "Asphalt", date: "Completed" },
    { id: 5, title: "Lakeside Cabin", client: "Mike Wilson", status: "In Progress", type: "Wood Shake", date: "Due Dec 10" },
];

const Projects = () => {
    const [view, setView] = useState('kanban');

    const columns = ["New", "In Progress", "Inspection", "Completed"];

    return (
        <div className="projects-page">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
                <div className="flex items-center gap-4">
                    <div className="flex bg-gray-100 rounded-lg p-1">
                        <button
                            className={`p-2 rounded-md transition-colors ${view === 'kanban' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setView('kanban')}
                        >
                            <LayoutGrid size={18} />
                        </button>
                        <button
                            className={`p-2 rounded-md transition-colors ${view === 'list' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:text-gray-700'}`}
                            onClick={() => setView('list')}
                        >
                            <List size={18} />
                        </button>
                    </div>
                    <button className="btn btn-primary text-sm py-2 px-4 shadow-sm">
                        + New Project
                    </button>
                </div>
            </div>

            {view === 'kanban' ? (
                <div className="flex gap-6 overflow-x-auto pb-4">
                    {columns.map(col => (
                        <div key={col} className="kanban-column flex-shrink-0 w-80">
                            <div className="flex justify-between items-center mb-4 px-2">
                                <h3 className="font-semibold text-gray-700 text-sm">{col}</h3>
                                <span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full text-xs font-medium">
                                    {projectsData.filter(p => p.status === col).length}
                                </span>
                            </div>

                            <div className="space-y-3">
                                {projectsData.filter(p => p.status === col).map(project => (
                                    <div key={project.id} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-sm">{project.type}</span>
                                            <button className="text-gray-400 hover:text-gray-600">
                                                <MoreHorizontal size={16} />
                                            </button>
                                        </div>
                                        <h4 className="font-bold text-gray-900 mb-1">{project.title}</h4>
                                        <p className="text-sm text-gray-500 mb-3">{project.client}</p>
                                        <div className="flex items-center text-xs text-gray-400 gap-2 pt-3 border-t border-gray-100">
                                            <Calendar size={14} />
                                            <span>{project.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    {/* List View Placeholder - reusing styling from Leads roughly */}
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-4">Project Name</th>
                                <th className="px-6 py-4">Client</th>
                                <th className="px-6 py-4">Type</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Due Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {projectsData.map(project => (
                                <tr key={project.id} className="hover:bg-gray-50/80">
                                    <td className="px-6 py-4 font-medium text-gray-900">{project.title}</td>
                                    <td className="px-6 py-4 text-gray-500">{project.client}</td>
                                    <td className="px-6 py-4 text-gray-500">{project.type}</td>
                                    <td className="px-6 py-4"><span className="badge badge-gray">{project.status}</span></td>
                                    <td className="px-6 py-4 text-gray-500">{project.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Projects;
