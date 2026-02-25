import './CV.css';

const experience = [
    {
        role: 'Full-Stack Developer',
        company: 'Freelance / Personal Projects',
        period: '2023 — Present',
        items: [
            'Designed and built multiple full-stack web applications using React, Node.js, and Python',
            'Implemented responsive, accessible UIs with a focus on performance and UX polish',
            'Collaborated with clients and teams to ship features end-to-end',
        ],
    },
    {
        role: 'Software Engineering Intern',
        company: 'Tech Company',
        period: '2022 — 2023',
        items: [
            'Developed REST APIs and microservices in Python and JavaScript',
            'Contributed to CI/CD pipelines, improving deployment reliability by 30 %',
            'Participated in code reviews and agile ceremonies with a cross-functional team',
        ],
    },
];

const education = [
    {
        degree: 'BSc Computer Science',
        school: 'University',
        period: '2020 — 2024',
        items: [
            'Graduated with First-Class Honours',
            'Specialised in software engineering and human-computer interaction',
            'Completed capstone project on real-time collaborative editing',
        ],
    },
];

const certifications = [
    'AWS Cloud Practitioner',
    'Meta Front-End Developer Certificate',
    'Google IT Automation with Python',
];

export default function CV() {
    return (
        <section id="cv" className="section cv">
            <h2 className="section-title">Curriculum Vitae</h2>
            <p className="section-subtitle">
                My professional journey so far — experience, education, and credentials.
            </p>

            <div className="cv__grid">
                {/* Experience */}
                <div className="cv__column">
                    <h3 className="cv__heading">
                        <span className="cv__heading-icon">💼</span> Experience
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

                {/* Education + Certs */}
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
                        <span className="cv__heading-icon">📜</span> Certifications
                    </h3>

                    <div className="cv__certs">
                        {certifications.map((c) => (
                            <div key={c} className="cv__cert">{c}</div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
