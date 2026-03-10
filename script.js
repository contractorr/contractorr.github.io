document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const menuButton = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const revealTargets = document.querySelectorAll("[data-reveal]");

    const setNavbarState = () => {
        if (!navbar) {
            return;
        }

        navbar.classList.toggle("scrolled", window.scrollY > 16);
    };

    setNavbarState();
    window.addEventListener("scroll", setNavbarState, { passive: true });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const targetId = anchor.getAttribute("href");
            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);
            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });

            if (navLinks?.classList.contains("open")) {
                navLinks.classList.remove("open");
                menuButton?.classList.remove("is-open");
                menuButton?.setAttribute("aria-expanded", "false");
            }
        });
    });

    menuButton?.addEventListener("click", () => {
        const isOpen = navLinks?.classList.toggle("open");
        menuButton.classList.toggle("is-open", Boolean(isOpen));
        menuButton.setAttribute("aria-expanded", String(Boolean(isOpen)));
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        revealTargets.forEach((element) => element.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.18,
            rootMargin: "0px 0px -40px 0px",
        }
    );

    revealTargets.forEach((element) => observer.observe(element));
});
