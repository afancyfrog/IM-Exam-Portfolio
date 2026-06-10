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

  const attemptScroll = () => {
    const target = document.querySelector(hash);
    if (!target) return false;

    target.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    return true;
  };

  if (attemptScroll()) return;

  const observer = new MutationObserver(() => {
    if (attemptScroll()) {
      observer.disconnect();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  setTimeout(() => observer.disconnect(), 3000);
}

function initScrollLinks() {
  document.querySelectorAll(".nav-links a").forEach((link) => {
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
