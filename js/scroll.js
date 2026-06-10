function handlePageHashScroll() {

  const hash = window.location.hash;

  if (!hash) return;

  const target = document.querySelector(hash);
  if (!target) return;

  setTimeout(() => {
    target.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 100); 
}

document.addEventListener("DOMContentLoaded", () => {
  handlePageHashScroll();
});

function initScrollLinks() {

  document.querySelectorAll('a[href*="#"]').forEach(link => {

    link.addEventListener("click", (e) => {

      const href = link.getAttribute("href");

      if (!href.includes("#")) return;

      const hash = href.substring(href.indexOf("#"));

      const target = document.querySelector(hash);

      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

      history.pushState(null, "", hash);
    });

  });
}
