import { useState } from 'react';
import './Projects.css';

const projectData = [
    {
        id: 1,
        title: 'Operation Workout',
        description: 'Founded and scaled an e-commerce fitness brand to $15,000 in revenue. Designed a high-conversion Shopify storefront with SEO and ran viral TikTok/Instagram marketing campaigns.',
        tags: ['Shopify', 'SEO', 'E-Commerce', 'Marketing'],
        color: '#22c55e',
        icon: '💪',
        link: '#',
    },
    {
        id: 2,
        title: 'Futures Trading System',
        description: 'Built a systematic approach to trading E-mini S&P 500 (ES) and Nasdaq (NQ) futures, managing $250K+ across five accounts with 150+ risk-adjusted trades per month.',
        tags: ['Finance', 'Technical Analysis', 'Order Flow', 'Risk Management'],
        color: '#eab308',
        icon: '📈',
        link: '#',
    },
    {
        id: 3,
        title: 'FBLA Chapter',
        description: 'Founded my school\'s first Future Business Leaders of America chapter, scaling it from 5 to 30+ members with recruitment campaigns, workshops, and faculty partnerships.',
        tags: ['Leadership', 'Community', 'Education', 'Strategy'],
        color: '#3b82f6',
        icon: '🏛️',
        link: '#',
    },
    {
        id: 4,
        title: 'Video Game Coaching',
        description: 'Built a Fiverr coaching business generating $9,000+ in revenue with 50+ worldwide clients, 100+ sessions delivered, and a 95%+ satisfaction rate with 30+ five-star reviews.',
        tags: ['Fiverr', 'Coaching', 'SEO', 'Entrepreneurship'],
        color: '#a855f7',
        icon: '🎮',
        link: '#',
    },
    {
        id: 5,
        title: 'Portfolio Website',
        description: 'This very website — a React + Vite personal portfolio with particle animations, smooth scrolling, filterable project cards, and a glassmorphism design language.',
        tags: ['React', 'Vite', 'CSS3', 'Canvas API'],
        color: '#7c3aed',
        icon: '🌐',
        link: '#',
    },
    {
        id: 6,
        title: 'Trade Journal Analytics',
        description: 'Leveraged performance tracking software and daily trade journaling to evaluate 20+ strategy iterations and analyze 500+ trade outcomes for continuous improvement.',
        tags: ['Data Analysis', 'Excel', 'Strategy', 'Finance'],
        color: '#f43f5e',
        icon: '📊',
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
                Businesses I've built, markets I've traded, and communities I've grown.
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
