async function loadNavbar() {
  const response = await fetch("/components/navbar.html");
  const html = await response.text();

  document.getElementById("navbar").innerHTML = html;

  highlightCurrentPage();
  setupHamburger();

  initScrollLinks();
  handlePageHashScroll();
}

loadNavbar();



function highlightCurrentPage() {
  const currentPage = window.location.pathname;

  document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href");

    if (!href || href.includes("#")) return;

    if (link.pathname === currentPage) {
      link.classList.add("active");
    }
  });
}

function setupHamburger() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}