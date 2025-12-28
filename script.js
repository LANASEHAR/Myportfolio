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

