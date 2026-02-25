import { useState } from 'react';
import './Contact.css';

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormState({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="section contact">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
                Have a project in mind, a question about markets, or just want to connect? Drop me a message!
            </p>

            <div className="contact__grid">
                {/* Info cards */}
                <div className="contact__info">
                    <div className="contact__info-card">
                        <div className="contact__info-icon">📧</div>
                        <div>
                            <h4>Email</h4>
                            <p>maximiliansandhu@utexas.edu</p>
                        </div>
                    </div>
                    <div className="contact__info-card">
                        <div className="contact__info-icon">📞</div>
                        <div>
                            <h4>Phone</h4>
                            <p>(915) 494-9817</p>
                        </div>
                    </div>
                    <div className="contact__info-card">
                        <div className="contact__info-icon">📍</div>
                        <div>
                            <h4>Location</h4>
                            <p>Austin, TX / El Paso, TX</p>
                        </div>
                    </div>
                    <div className="contact__info-card">
                        <div className="contact__info-icon">🔗</div>
                        <div>
                            <h4>Socials</h4>
                            <div className="contact__socials">
                                <a href="https://linkedin.com/in/maximiliansandhu" target="_blank" rel="noreferrer" className="contact__social">LinkedIn</a>
                                <a href="https://github.com/MaximilianS07" target="_blank" rel="noreferrer" className="contact__social">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <form className="contact__form" onSubmit={handleSubmit}>
                    <div className="contact__field">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="contact__field">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            value={formState.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="contact__field">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Tell me about your project..."
                            value={formState.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="contact__submit" disabled={submitted}>
                        {submitted ? '✓  Message Sent!' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
}
