import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <p className="footer__copy">
                    © {new Date().getFullYear()} Maximilian Sandhu. Built with React & ☕
                </p>
                <div className="footer__links">
                    <a href="https://github.com/MaximilianS07" target="_blank" rel="noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/maximiliansandhu" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="mailto:maximiliansandhu@utexas.edu">Email</a>
                </div>
            </div>
        </footer>
    );
}
