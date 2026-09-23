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

  // Set active navigation based on the current page. This avoids stale active states.
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    link.classList.toggle("active", href === currentPage || (currentPage === "" && href === "index.html"));
  });

  // Homepage positioning updates
  if (currentPage === "index.html" || currentPage === "") {
    const tagline = document.querySelector(".tagline");
    if (tagline) tagline.textContent = "AI / ML Engineer • Software Engineer • Data Scientist";

    const heroCopy = document.querySelector(".home-hero-copy");
    if (heroCopy) {
      heroCopy.innerHTML =
        "I build applied AI and software systems across machine learning, cloud automation, cybersecurity, and satellite data analytics. My work combines model development, data pipelines, deployment workflows, and security-aware engineering.";
    }

    const selectedProjects = document.querySelector(".compact-links");
    if (selectedProjects && !selectedProjects.dataset.enhanced) {
      selectedProjects.dataset.enhanced = "true";
      selectedProjects.insertAdjacentHTML(
        "afterbegin",
        `
        <li>
          <a href="https://hamzakaddour.github.io/ragops-evaluation-dashboard/" target="_blank">RAGOps Evaluation Dashboard</a>
          <span>LLMOps dashboard for retrieval, grounding, hallucination risk, and RAG evaluation</span>
        </li>
        <li>
          <a href="https://hamzakaddour.github.io/mlops-monitoring-dashboard/" target="_blank">MLOps Monitoring Dashboard</a>
          <span>Model performance, drift, prediction monitoring, alerting, and model-card reporting</span>
        </li>
        `
      );
    }
  }

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