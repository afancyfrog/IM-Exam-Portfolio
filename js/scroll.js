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
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      if (!href.includes("#")) return;

      const [page, hash] = href.split("#");

      const isSamePage =
        page === "" ||
        page === window.location.pathname.split("/").pop();

      if (isSamePage) {
        e.preventDefault();
        scrollToHash("#" + hash);
        history.pushState(null, "", "#" + hash);
      }
    });
  });
}

function handlePageHashScroll() {
  const hash = window.location.hash;
  if (!hash) return;

  setTimeout(() => {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }, 150);
}