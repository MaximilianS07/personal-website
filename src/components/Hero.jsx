import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
    const canvasRef = useRef(null);

    // Animated particle background
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationId;
        let particles = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.4 + 0.1;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(124, 58, 237, ${this.opacity * 1.5})`;
                ctx.fill();
            }
        }

        const init = () => {
            resize();
            particles = Array.from({ length: 60 }, () => new Particle());
        };

        const connectParticles = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 140) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(168, 85, 247, ${0.14 * (1 - dist / 140)})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => { p.update(); p.draw(); });
            connectParticles();
            animationId = requestAnimationFrame(animate);
        };

        init();
        animate();
        window.addEventListener('resize', resize);
        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <section id="hero" className="hero">
            <canvas ref={canvasRef} className="hero__canvas" />

            <div className="hero__content">
                <div className="hero__badge animate-fade-in-up">
                    <span className="hero__badge-dot" />
                    UT Austin · Business Honors · Finance
                </div>

                <h1 className="hero__title animate-fade-in-up delay-1">
                    Hi, I'm <span className="hero__name">Maximilian</span>
                </h1>

                <p className="hero__subtitle animate-fade-in-up delay-2">
                    Finance student, independent futures trader, and entrepreneur.
                    I build businesses, trade markets, and chase big ideas.
                </p>

                <div className="hero__actions animate-fade-in-up delay-3">
                    <a href="#projects" className="hero__btn hero__btn--primary" onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                        View Projects
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
                        </svg>
                    </a>
                    <a href="#cv" className="hero__btn hero__btn--secondary" onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#cv')?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                        View CV
                    </a>
                </div>

                <div className="hero__scroll-indicator animate-fade-in-up delay-5">
                    <div className="hero__scroll-mouse">
                        <div className="hero__scroll-wheel" />
                    </div>
                    <span>Scroll to explore</span>
                </div>
            </div>
        </section>
    );
}
