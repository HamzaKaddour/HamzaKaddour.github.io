(function () {
  // Year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Theme toggle
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");
  const KEY = "pref-theme";

  const apply = (t) => {
    if (t === "light") root.classList.add("light");
    else root.classList.remove("light");

    if (btn) {
      btn.textContent = root.classList.contains("light") ? "☀️" : "🌙";
    }
  };

  const saved = localStorage.getItem(KEY);
  apply(saved || "dark");

  if (btn) {
    btn.addEventListener("click", () => {
      const now = root.classList.contains("light") ? "dark" : "light";
      localStorage.setItem(KEY, now);
      apply(now);
    });
  }

  // Set active navigation based on the current route, including nested case studies.
  const currentPath = window.location.pathname.replace(/\/+$/, "") || "/";
  document.querySelectorAll(".nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#")) return;
    const targetPath = new URL(href, window.location.href).pathname.replace(/\/+$/, "") || "/";
    const isCaseStudy = currentPath.includes("/case-studies/");
    const active =
      targetPath === currentPath ||
      (currentPath === "/" && /\/index\.html$/.test(targetPath)) ||
      (isCaseStudy && /\/projects\.html$/.test(targetPath));
    link.classList.toggle("active", active);
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        history.pushState(null, "", "#" + id);
      }
    });
  });

  // Reveal on scroll
  const animated = document.querySelectorAll(".animate-on-scroll");
  if (animated.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    animated.forEach((el) => observer.observe(el));
  } else {
    animated.forEach((el) => el.classList.add("in-view"));
  }
})();