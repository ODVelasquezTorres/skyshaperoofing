import React, { useState, useEffect } from 'react';
import { DEFAULT_PROJECTS, getMergedProjects } from '../components/public/GalleryModal';
import { Lock, Unlock, Trash2, Edit, Plus, Eye, CheckCircle, AlertCircle } from 'lucide-react';
import './AdminPanel.css';

const AdminPanel = () => {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');
    const [projects, setProjects] = useState(getMergedProjects());
    
    // New Project Form State
    const [newProject, setNewProject] = useState({
        title: '',
        tag: '',
        cover: '',
        description: ''
    });
    
    // Auth persistence
    useEffect(() => {
        const authStatus = sessionStorage.getItem('admin_authenticated');
        if (authStatus === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    // Sync to localStorage
    const syncProjects = (updatedProjects) => {
        // Only save projects that are NOT in DEFAULT_PROJECTS
        const additional = updatedProjects.filter(p => !DEFAULT_PROJECTS.some(dp => dp.id === p.id));
        localStorage.setItem('skyshape_projects', JSON.stringify(additional));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const adminPass = import.meta.env.VITE_ADMIN_PASSWORD;
        console.log('DEBUG: Auth Attempt', { 
            inputLength: password.length,
            envVarDefined: typeof adminPass !== 'undefined',
            envVarValue: adminPass, // User requested this log
            match: password === adminPass 
        });
        
        if (password === adminPass) {
            setIsAuthenticated(true);
            sessionStorage.setItem('admin_authenticated', 'true');
            setError('');
        } else {
            setError('Incorrect password. Please try again.');
        }
    };

    const handleDelete = (id) => {
        const isDefault = DEFAULT_PROJECTS.some(p => p.id === id);
        if (isDefault) {
            alert('Cannot delete hardcoded base projects.');
            return;
        }

        if (window.confirm('Are you sure you want to delete this project?')) {
            const updated = projects.filter(p => p.id !== id);
            setProjects(updated);
            syncProjects(updated);
        }
    };

    const handlePublish = (e) => {
        e.preventDefault();
        if (!newProject.title || !newProject.tag || !newProject.cover) {
            alert('Please fill in title, tag, and cover image URL.');
            return;
        }

        const projectToAdd = {
            ...newProject,
            id: Date.now(), // Unique ID
            phases: { before: [], inProgress: [], after: [newProject.cover] },
            description: [newProject.description]
        };

        const updated = [...projects, projectToAdd];
        setProjects(updated);
        syncProjects(updated);
        
        // Reset form
        setNewProject({ title: '', tag: '', cover: '', description: '' });
        alert('Project published successfully!');
    };

    return (
        <div className="admin-container">
            <header className="admin-header">
                <div className="admin-header-title">
                    <h1>Admin Dashboard</h1>
                    <p>Projects & Portfolio Management</p>
                </div>
                {isAuthenticated && (
                    <button className="logout-btn" onClick={() => {
                        setIsAuthenticated(false);
                        sessionStorage.removeItem('admin_authenticated');
                    }}>
                        Logout
                    </button>
                )}
            </header>

            <main className="admin-main">
                {/* 1. Projects List (Public & Admin) */}
                <section className="admin-section">
                    <div className="section-header">
                        <h2>{isAuthenticated ? 'Manage Projects' : 'Published Projects'}</h2>
                        {isAuthenticated && (
                            <button className="btn-add">
                                <Plus size={18} />
                                Add New Project
                            </button>
                        )}
                    </div>

                    <div className="projects-grid">
                        {projects.map(project => (
                            <div key={project.id} className="admin-project-card">
                                <div className="card-image">
                                    <img src={project.cover} alt={project.title} />
                                    <span className="card-badge">{project.tag}</span>
                                </div>
                                <div className="card-content">
                                    <h3>{project.title}</h3>
                                    <div className="card-actions">
                                        <button className="action-btn view">
                                            <Eye size={16} />
                                            View
                                        </button>
                                        {isAuthenticated && (
                                            <>
                                                <button className="action-btn edit">
                                                    <Edit size={16} />
                                                    Edit
                                                </button>
                                                <button className="action-btn delete" onClick={() => handleDelete(project.id)}>
                                                    <Trash2 size={16} />
                                                    Delete
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 2. Login Section (If not authenticated) */}
                {!isAuthenticated && (
                    <section className="auth-section">
                        <div className="auth-card">
                            <div className="auth-icon">
                                <Lock size={32} />
                            </div>
                            <h3>🔒 Sign in to add or manage projects</h3>
                            <p>Enter the administrative password to unlock management tools.</p>
                            
                            <form onSubmit={handleLogin} className="auth-form">
                                <input 
                                    type="password" 
                                    placeholder="Enter password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={error ? 'error' : ''}
                                />
                                <button type="submit" className="unlock-btn">
                                    <Unlock size={18} />
                                    Unlock
                                </button>
                            </form>
                            {error && <div className="error-message"><AlertCircle size={14} /> {error}</div>}
                        </div>
                    </section>
                )}

                {/* 3. Add Project Form (Only if authenticated) */}
                {isAuthenticated && (
                    <section className="admin-section form-section">
                        <div className="section-header">
                            <h2>Add New Project</h2>
                        </div>
                        <form className="project-form" onSubmit={handlePublish}>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Project Title</label>
                                    <input 
                                        type="text" 
                                        placeholder="e.g. Modern Roof Replacement" 
                                        value={newProject.title}
                                        onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Category / Tag</label>
                                    <input 
                                        type="text" 
                                        placeholder="e.g. Roof Replacement" 
                                        value={newProject.tag}
                                        onChange={(e) => setNewProject({...newProject, tag: e.target.value})}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Cover Image URL</label>
                                    <input 
                                        type="text" 
                                        placeholder="/carrusel/image.jpg" 
                                        value={newProject.cover}
                                        onChange={(e) => setNewProject({...newProject, cover: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea 
                                    placeholder="Describe the project details..."
                                    value={newProject.description}
                                    onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                                ></textarea>
                            </div>
                            <div className="form-actions">
                                <button type="submit" className="publish-btn">
                                    <CheckCircle size={18} />
                                    Publish project
                                </button>
                            </div>
                        </form>
                    </section>
                )}

            </main>
        </div>
    );
};

export default AdminPanel;
