import './About.css';

const skills = [
    { name: 'JavaScript', level: 90, color: '#f7df1e' },
    { name: 'React', level: 85, color: '#61dafb' },
    { name: 'Python', level: 80, color: '#3776ab' },
    { name: 'Node.js', level: 78, color: '#339933' },
    { name: 'TypeScript', level: 75, color: '#3178c6' },
    { name: 'CSS / Design', level: 88, color: '#e44d26' },
];

const stats = [
    { number: '10+', label: 'Projects Built' },
    { number: '3+', label: 'Years Coding' },
    { number: '5+', label: 'Technologies' },
    { number: '∞', label: 'Curiosity' },
];

export default function About() {
    return (
        <section id="about" className="section about">
            <div className="about__grid">
                <div className="about__text">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">
                        Passionate developer who loves crafting elegant solutions
                    </p>
                    <p className="about__bio">
                        I'm Maximilian Sandhu — a developer, tinkerer, and lifelong learner.
                        I thrive at the intersection of design and engineering, building
                        products that are as delightful to use as they are robust under the hood.
                        Whether it's a full-stack web app, a creative side project, or a deep
                        dive into a new technology, I'm always chasing that next spark of
                        inspiration.
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
