const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        entry.target.classList.remove("hidden");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => {
  el.classList.add("hidden");   // start hidden
  observer.observe(el);
});
