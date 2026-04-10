document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const mobileNav = document.getElementById("mobile-nav");

    // Toggle mobile menu
    if (hamburgerBtn && mobileNav) {
        hamburgerBtn.addEventListener("click", () => {
            mobileNav.classList.toggle("open");
            hamburgerBtn.classList.toggle("open");
        });

        // Close mobile menu when a link is clicked
        const links = mobileNav.querySelectorAll("a");
        links.forEach(link => {
            link.addEventListener("click", () => {
                mobileNav.classList.remove("open");
                hamburgerBtn.classList.remove("open");
            });
        });

        // Close when clicking outside
        document.addEventListener("click", (e) => {
            if (!mobileNav.contains(e.target) && !hamburgerBtn.contains(e.target) && mobileNav.classList.contains("open")) {
                mobileNav.classList.remove("open");
                hamburgerBtn.classList.remove("open");
            }
        });
    }

    // Interactive Countdown
    // Target date: June 25, 2026 IST (Using strictly ISO format for cross-browser safety)
    const countDownDate = new Date("2026-06-25T00:00:00+05:30").getTime();

    // Update the count down every 1 second
    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        // Update all elements with the 'countdown' class (for both desktop and mobile views)
        const countdownElements = document.querySelectorAll(".countdown");

        countdownElements.forEach(el => {
            if (distance >= 0) {
                el.innerHTML = days + " DAYS TO GO!";
            } else {
                el.innerHTML = "TODAY IS THE DAY!";
            }
        });

        if (distance < 0) {
            clearInterval(x);
        }
    }, 1000);

    // Scroll Reveal Animation
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));


});
