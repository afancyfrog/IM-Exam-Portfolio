function scrollToHash(hash) {
  const target = document.querySelector(hash);
  if (!target) return;

  target.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}

function handlePageHashScroll() {
  const hash = window.location.hash;
  if (!hash) return;

  requestAnimationFrame(() => {
    setTimeout(() => {
      scrollToHash(hash);
    }, 100);
  });
}

function initScrollLinks() {
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      if (!href || !href.includes("#")) return;

      const hash = href.substring(href.indexOf("#"));

      if (link.pathname === window.location.pathname) {
        e.preventDefault();

        scrollToHash(hash);
        history.pushState(null, "", hash);
      }
    });
  });
}
