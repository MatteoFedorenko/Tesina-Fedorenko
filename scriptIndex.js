document.addEventListener("DOMContentLoaded", function() {
    
    if (typeof tsParticles !== "undefined") {
        tsParticles.load("tsparticles", {
            fpsLimit: 60,
            particles: {
                number: { value: 75, density: { enable: true, area: 800 } },
                color: { value: "#15ff00" },
                links: {
                    enable: true,
                    distance: 180,
                    color: "#00ff15",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 0.7,
                    direction: "none",
                    outModes: "out"
                },
                size: { value: 1.5 },
                opacity: { value: 0.4 }
            },
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "grab" },
                    resize: true
                },
                modes: {
                    grab: { distance: 300, links: { opacity: 0.6 } }
                }
            },
            detectRetina: true
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-in, .neon-divider').forEach(el => {
        observer.observe(el);
    });
});