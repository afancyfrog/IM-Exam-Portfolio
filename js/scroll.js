function scrollToHash(hash) {
  const target = document.querySelector(hash);
  if (!target) return;

  target.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

function initScrollLinks() {
  document.querySelectorAll("a[href*='#']").forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      if (!href || !href.includes("#")) return;

      const [page, hash] = href.split("#");
      const currentPage = window.location.pathname.split("/").pop() || "index.html";

      const targetPage = page ? page.split("/").pop() : currentPage;

      if (currentPage === targetPage) {
        e.preventDefault();
        scrollToHash("#" + hash);
        history.pushState(null, "", "#" + hash);
      }
    });
  });
}

function handlePageHashScroll() {
  if (!window.location.hash) return;

  const hash = window.location.hash;

  const tryScroll = () => {
    const target = document.querySelector(hash);
    if (!target) return false;

    target.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    return true;
  };

  if (tryScroll()) return;

  const observer = new MutationObserver(() => {
    if (tryScroll()) observer.disconnect();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  setTimeout(() => observer.disconnect(), 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  initScrollLinks();
  handlePageHashScroll();
});