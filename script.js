document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     1. SCROLL REVEAL (PRO)
  ========================= */

  const revealItems = document.querySelectorAll(".reveal-on-scroll");

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!prefersReducedMotion) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // performance
          }
        });
      },
      { threshold: 0.15 }
    );

    revealItems.forEach(el => revealObserver.observe(el));
  } else {
    // Accessibilité : animations désactivées
    revealItems.forEach(el => el.classList.add("visible"));
  }

  /* =========================
     2. ACTIVE NAV ON SCROLL
     (SIGNAL PRODUIT FORT)
  ========================= */

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-item");

  const setActiveNav = () => {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", setActiveNav);

  /* =========================
     3. SMOOTH SCROLL OFFSET
     (FIX NAV OVERLAP)
  ========================= */

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");

      if (targetId.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(targetId);

        if (target) {
          const offset = 120; // hauteur nav
          const top =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            offset;

          window.scrollTo({
            top,
            behavior: "smooth"
          });
        }
      }
    });
  });

  /* =========================
     4. MICRO-STAGGER PROJECTS
     (TRÈS SUBTIL)
  ========================= */

  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 60}ms`;
  });

});
const parallaxEls = document.querySelectorAll(".parallax-bg");

window.addEventListener("scroll", () => {
  parallaxEls.forEach(el => {
    const speed = el.dataset.speed;
    const offset = window.pageYOffset * speed;
    el.style.transform = `translateY(${offset}px)`;
  });
});


