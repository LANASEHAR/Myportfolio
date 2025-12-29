document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".reveal-on-scroll");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  items.forEach(el => observer.observe(el));
});
.project-card {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 48px rgba(0,0,0,0.08);
}

.project-image img {
  transition: transform 0.6s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.04);
}

