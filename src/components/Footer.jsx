import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <p className="footer__copy">
                    © {new Date().getFullYear()} Maximilian Sandhu. Built with React & ☕
                </p>
                <div className="footer__links">
                    <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="mailto:hello@maximilian.dev">Email</a>
                </div>
            </div>
        </footer>
    );
}
