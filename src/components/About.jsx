import './About.css';

const skills = [
    { name: 'Futures Trading', level: 92, color: '#eab308' },
    { name: 'MS Excel & Office Suite', level: 88, color: '#22c55e' },
    { name: 'SEO & Digital Marketing', level: 85, color: '#f43f5e' },
    { name: 'Web Development', level: 80, color: '#06b6d4' },
    { name: 'E-Commerce (Shopify)', level: 82, color: '#a855f7' },
    { name: 'Financial Analysis', level: 78, color: '#3b82f6' },
];

const stats = [
    { number: '$250K+', label: 'Portfolio Managed' },
    { number: '3.93', label: 'GPA' },
    { number: '$24K+', label: 'Revenue Generated' },
    { number: '150+', label: 'Trades / Month' },
];

export default function About() {
    return (
        <section id="about" className="section about">
            <div className="about__grid">
                <div className="about__text">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">
                        Finance student, futures trader, and serial entrepreneur
                    </p>
                    <p className="about__bio">
                        I'm Maximilian Sandhu — a Business Honors Finance student at
                        The University of Texas at Austin, independent futures trader,
                        and serial entrepreneur. From scaling an e-commerce brand to $15K
                        in revenue to actively managing a $250K+ futures portfolio, I thrive
                        at the intersection of markets, technology, and hustle. I'm passionate
                        about financial markets, digital marketing, and building things that
                        make an impact.
                    </p>

                    <div className="about__stats">
                        {stats.map((s) => (
                            <div key={s.label} className="about__stat">
                                <span className="about__stat-number">{s.number}</span>
                                <span className="about__stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="about__skills">
                    <h3 className="about__skills-title">Core Skills</h3>
                    {skills.map((skill) => (
                        <div key={skill.name} className="about__skill">
                            <div className="about__skill-header">
                                <span className="about__skill-name">{skill.name}</span>
                                <span className="about__skill-pct">{skill.level}%</span>
                            </div>
                            <div className="about__skill-bar">
                                <div
                                    className="about__skill-fill"
                                    style={{
                                        '--skill-level': `${skill.level}%`,
                                        '--skill-color': skill.color,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
