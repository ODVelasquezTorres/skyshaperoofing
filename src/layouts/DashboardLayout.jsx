import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, Calendar, Settings, Briefcase, FileInput, UserCheck, Hammer } from 'lucide-react';
import './DashboardLayout.css';

const DashboardLayout = () => {
    return (
        <div className="dashboard-layout">
            {/* Sidebar */}
            <aside className="sidebar">
                <div className="sidebar-header">
                    <h1 className="logo-text">SKYSHAPE <span>OS</span></h1>
                </div>

                <nav className="sidebar-nav">
                    <ul>
                        <li>
                            <NavLink to="/dashboard" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                                <LayoutDashboard size={20} />
                                <span>Overview</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/leads" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                                <UserCheck size={20} />
                                <span>Leads</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/projects" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                                <Hammer size={20} />
                                <span>Projects</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/estimates" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                                <FileText size={20} />
                                <span>Estimates</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/clients" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                                <Users size={20} />
                                <span>Clients</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/calendar" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                                <Calendar size={20} />
                                <span>Calendar</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/invoices" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                                <FileInput size={20} />
                                <span>Invoices</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/team" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                                <Briefcase size={20} />
                                <span>Team</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="sidebar-footer">
                    <NavLink to="/dashboard/settings" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                        <Settings size={20} />
                        <span>Settings</span>
                    </NavLink>
                </div>
            </aside>

            {/* Main Content */}
            <div className="content-wrapper">
                {/* Topbar */}
                <header className="topbar">
                    <div className="breadcrumbs">
                        Dashboard / <span>Overview</span>
                    </div>
                    <div className="user-profile">
                        <div className="avatar">JD</div>
                        <span className="user-name">John Doe</span>
                    </div>
                </header>

                {/* Page Content */}
                <main className="main-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
