function scrollToHash(hash) {
  const target = document.querySelector(hash);
  if (!target) return;

  target.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

function handlePageHashScroll() {
  if (!window.location.hash) return;

  const hash = window.location.hash;

  const waitForPage = () => {
    const target = document.querySelector(hash);
    if (!target) return;

    scrollToHash(hash);
  };

  window.addEventListener("load", () => {
    setTimeout(waitForPage, 200);
  });
}

function initScrollLinks() {
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      if (!href || !href.includes("#")) return;

      const hash = href.substring(href.indexOf("#"));
      
      if (window.location.pathname === link.pathname) {
        e.preventDefault();
        scrollToHash(hash);
        history.pushState(null, "", hash);
      }
    });
  });
}
