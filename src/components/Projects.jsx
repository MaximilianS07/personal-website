import { useState } from 'react';
import './Projects.css';

const projectData = [
    {
        id: 1,
        title: 'Portfolio Website',
        description: 'This very website — a React-based personal portfolio with particle animations, smooth scrolling, and a glassmorphism design language.',
        tags: ['React', 'Vite', 'CSS3', 'Canvas API'],
        color: '#4f46e5',
        icon: '🌐',
        link: '#',
    },
    {
        id: 2,
        title: 'Task Flow',
        description: 'A productivity app with drag-and-drop Kanban boards, real-time updates, and smart task prioritisation powered by a custom algorithm.',
        tags: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
        color: '#059669',
        icon: '📋',
        link: '#',
    },
    {
        id: 3,
        title: 'Weather Pulse',
        description: 'A beautifully animated weather dashboard that shows forecasts, historical trends, and air-quality data with interactive charts.',
        tags: ['JavaScript', 'REST API', 'Chart.js', 'CSS'],
        color: '#0ea5e9',
        icon: '🌤️',
        link: '#',
    },
    {
        id: 4,
        title: 'CodeSnap',
        description: 'A developer tool that lets you create gorgeous screenshots of your code snippets with customisable themes and export options.',
        tags: ['TypeScript', 'React', 'HTML Canvas', 'Figma'],
        color: '#8b5cf6',
        icon: '📸',
        link: '#',
    },
    {
        id: 5,
        title: 'BudgetBuddy',
        description: 'A personal finance tracker with smart categorisation, spending insights, and monthly budget visualisations.',
        tags: ['Python', 'Flask', 'SQLite', 'Chart.js'],
        color: '#f59e0b',
        icon: '💰',
        link: '#',
    },
    {
        id: 6,
        title: 'MusicViz',
        description: 'An audio visualiser that turns any music file into immersive, real-time 3D animations using Web Audio API and Three.js.',
        tags: ['Three.js', 'Web Audio', 'GLSL', 'JavaScript'],
        color: '#ec4899',
        icon: '🎵',
        link: '#',
    },
];

const allTags = ['All', ...new Set(projectData.flatMap((p) => p.tags))];

export default function Projects() {
    const [filter, setFilter] = useState('All');
    const [hoveredId, setHoveredId] = useState(null);

    const filtered = filter === 'All'
        ? projectData
        : projectData.filter((p) => p.tags.includes(filter));

    return (
        <section id="projects" className="section projects">
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
                A selection of things I've built — from utilities to creative experiments.
            </p>

            <div className="projects__filters">
                {allTags.map((tag) => (
                    <button
                        key={tag}
                        className={`projects__filter ${filter === tag ? 'projects__filter--active' : ''}`}
                        onClick={() => setFilter(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div className="projects__grid">
                {filtered.map((project) => (
                    <a
                        key={project.id}
                        href={project.link}
                        className={`project-card ${hoveredId && hoveredId !== project.id ? 'project-card--dimmed' : ''}`}
                        onMouseEnter={() => setHoveredId(project.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        style={{ '--card-accent': project.color }}
                    >
                        <div className="project-card__header">
                            <span className="project-card__icon">{project.icon}</span>
                            <svg className="project-card__arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
                            </svg>
                        </div>
                        <h3 className="project-card__title">{project.title}</h3>
                        <p className="project-card__desc">{project.description}</p>
                        <div className="project-card__tags">
                            {project.tags.map((t) => (
                                <span key={t} className="project-card__tag">{t}</span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
