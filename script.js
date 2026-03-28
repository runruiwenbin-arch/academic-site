const nav = document.querySelector(".site-nav");
const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("site-menu");

if (toggle && nav && menu) {
  const setExpanded = (expanded) => {
    toggle.setAttribute("aria-expanded", String(expanded));
    nav.setAttribute("aria-expanded", String(expanded));
  };

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    setExpanded(!expanded);
  });

  menu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      setExpanded(false);
    }
  });
}

const yearEl = document.getElementById("copyright-year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -10% 0px",
  }
);

document.querySelectorAll(".reveal").forEach((section) => {
  observer.observe(section);
});
