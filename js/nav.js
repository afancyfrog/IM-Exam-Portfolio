async function loadNavbar() {
  const path = document.body.dataset.navPath || ".";

  const response = await fetch(`${path}/components/navbar.html`);
  const html = await response.text();

  document.getElementById("navbar").innerHTML = html;

    document.querySelector(".logo-img").src = `${path}/assets/LowResLogo3.png`;
    document.querySelector(".hamburger-img").src = `${path}/assets/HamburgerIcon2.png`;

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