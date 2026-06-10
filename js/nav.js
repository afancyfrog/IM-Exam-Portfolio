const BASE = "/IM-Exam-Portfolio";

async function loadNavbar() {
  const response = await fetch(`${BASE}/components/navbar.html`);
  const html = await response.text();

  document.getElementById("navbar").innerHTML = html;

  fixNavbarLinks();
  fixNavbarAssets();

  highlightCurrentPage();
  setupHamburger();
  initScrollLinks();
  handlePageHashScroll();
}

loadNavbar();

function fixNavbarLinks() {
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");

    if (!href) return;

    if (href.startsWith("/")) {
      link.href = BASE + href;
    }
  });
}

function fixNavbarAssets() {
  const logo = document.querySelector(".logo img");
  const hamburger = document.querySelector(".hamburger img");

  if (logo) {
    logo.src = `${BASE}/assets/LowResLogo3.png`;
  }

  if (hamburger) {
    hamburger.src = `${BASE}/assets/HamburgerIcon2.png`;
  }
}

function highlightCurrentPage() {
  const currentPage = window.location.pathname;

  document.querySelectorAll(".nav-links a").forEach((link) => {
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
