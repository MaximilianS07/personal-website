import './About.css';

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
            </div>
        </section>
    );
}
