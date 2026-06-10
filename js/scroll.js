document.querySelectorAll("a[href*='#']").forEach(link => {
  link.addEventListener("click", (e) => {

    const href = link.getAttribute("href");
    if (!href.includes("#")) return;

    const [page, hash] = href.split("#");

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const targetPage = page ? page.split("/").pop() : currentPage;

    if (targetPage === currentPage) {
      e.preventDefault();

      const target = document.querySelector("#" + hash);
      if (!target) return;

      target.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

      history.pushState(null, "", "#" + hash);
    }

  });
});

window.addEventListener("load", () => {
  const hash = window.location.hash;
  if (!hash) return;

  const target = document.querySelector(hash);
  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
});