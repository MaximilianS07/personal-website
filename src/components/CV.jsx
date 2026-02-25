import './CV.css';

const experience = [
    {
        role: 'Independent Futures Trader',
        company: 'Remote',
        period: 'Mar. 2024 — Present',
        items: [
            'Traded E-mini S&P 500 (ES) and Nasdaq (NQ) futures across five accounts, actively managing a portfolio valued at over $250,000',
            'Applied technical analysis with order flow insights to execute 150+ risk-adjusted long and short futures trades per month',
            'Leveraged performance tracking software and daily trade journaling to evaluate 20+ strategy iterations and 500+ trade outcomes',
        ],
    },
    {
        role: 'Caddy & Pro Shop Worker',
        company: 'Coronado Country Club — El Paso, TX',
        period: 'Sep. 2022 — Jul. 2025',
        items: [
            'Maintained golf cart, bags and range operations while facilitating member and guest tee times for 200+ players weekly',
            'Oversaw golf bags and equipment for 250+ members, ensuring seamless organization and a professional playing experience',
            'Developed strong relationships with golfers, fostering a welcoming and positive atmosphere encouraging engagement',
        ],
    },
    {
        role: 'Shadow',
        company: 'Eagle Bank — Bethesda, MD',
        period: 'Jun. 2024 — Jul. 2024',
        items: [
            'Shadowed 4 relationship and portfolio managers supporting 20+ small–mid size commercial lending clients across the DMV region',
            'Observed the lifecycle of a $46M data center financing, gaining exposure to complex multi-stakeholder commercial deals',
            'Attended 3+ director-level board meetings evaluating $100M+ in active loan portfolios, enhancing insight of portfolio management',
        ],
    },
];

const leadership = [
    {
        role: 'Founder — Operation Workout',
        company: 'E-Commerce Fitness Brand',
        period: 'Sep. 2022 — Dec. 2022',
        items: [
            'Founded and scaled an e-commerce fitness brand to $15,000 in revenue, overseeing all business operations and logistics',
            'Designed a high-conversion Shopify® storefront using SEO and custom web designs, enhancing customer experience and ratings',
            'Directed digital marketing campaigns on TikTok and Instagram, leveraging social media trends to scale brand publicity and sales',
        ],
    },
    {
        role: 'Chapter Founder & President — FBLA',
        company: 'Future Business Leaders of America',
        period: 'Sep. 2024 — Mar. 2025',
        items: [
            'Founded and successfully led school\'s first FBLA chapter, scaling membership from 5 to 30+ students within one academic year',
            'Developed and utilized 5+ recruitment and publicity campaigns, increasing engagement through social media and presentations',
            'Organized 7+ competitive preparation workshops and secured 3+ faculty and community partnerships, enhancing chapter growth',
        ],
    },
    {
        role: 'Entrepreneur — Video Game Coach',
        company: 'Fiverr®',
        period: 'Jun. 2021 — Jul. 2022',
        items: [
            'Marketed coaching services on Fiverr® by leveraging SEO and social media, attracting 50+ clients worldwide',
            'Designed and delivered 100+ personalized coaching sessions, maintaining a 95%+ client satisfaction rate with 30+ five-star reviews',
            'Generated $9,000+ in revenue while strengthening communication and digital collaboration skills through client engagement',
        ],
    },
];

const education = [
    {
        degree: 'Bachelor of Business Administration',
        school: 'The University of Texas at Austin — Canfield Business Honors, Finance',
        period: 'Aug. 2025 — May 2029',
        items: [
            'Overall GPA: 3.93 / 4.00 | SAT: 1560',
            'Woody L. Hunt Presidential Scholar',
            'International Baccalaureate Diploma Recipient',
        ],
    },
];

const honors = [
    '2× Top 5 Academic GPA',
    'International Baccalaureate Diploma Recipient',
    'Woody L. Hunt Presidential Scholar',
];

export default function CV() {
    return (
        <section id="cv" className="section cv">
            <h2 className="section-title">Curriculum Vitae</h2>
            <p className="section-subtitle">
                My professional journey — experience, leadership, education, and honors.
            </p>

            <div className="cv__grid">
                {/* Experience */}
                <div className="cv__column">
                    <h3 className="cv__heading">
                        <span className="cv__heading-icon">💼</span> Work Experience
                    </h3>

                    {experience.map((exp) => (
                        <div key={exp.role} className="cv__card">
                            <div className="cv__card-period">{exp.period}</div>
                            <h4 className="cv__card-role">{exp.role}</h4>
                            <p className="cv__card-company">{exp.company}</p>
                            <ul className="cv__card-list">
                                {exp.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Education + Leadership + Honors */}
                <div className="cv__column">
                    <h3 className="cv__heading">
                        <span className="cv__heading-icon">🎓</span> Education
                    </h3>

                    {education.map((edu) => (
                        <div key={edu.degree} className="cv__card">
                            <div className="cv__card-period">{edu.period}</div>
                            <h4 className="cv__card-role">{edu.degree}</h4>
                            <p className="cv__card-company">{edu.school}</p>
                            <ul className="cv__card-list">
                                {edu.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <h3 className="cv__heading cv__heading--mt">
                        <span className="cv__heading-icon">🏆</span> Honors
                    </h3>

                    <div className="cv__certs">
                        {honors.map((h) => (
                            <div key={h} className="cv__cert">{h}</div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Leadership full-width */}
            <h3 className="cv__heading" style={{ marginTop: '3rem' }}>
                <span className="cv__heading-icon">🚀</span> Leadership & Activities
            </h3>

            <div className="cv__grid">
                <div className="cv__column">
                    {leadership.slice(0, 2).map((l) => (
                        <div key={l.role} className="cv__card">
                            <div className="cv__card-period">{l.period}</div>
                            <h4 className="cv__card-role">{l.role}</h4>
                            <p className="cv__card-company">{l.company}</p>
                            <ul className="cv__card-list">
                                {l.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="cv__column">
                    {leadership.slice(2).map((l) => (
                        <div key={l.role} className="cv__card">
                            <div className="cv__card-period">{l.period}</div>
                            <h4 className="cv__card-role">{l.role}</h4>
                            <p className="cv__card-company">{l.company}</p>
                            <ul className="cv__card-list">
                                {l.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
