async function loadNavbar() {
  const response = await fetch("components/navbar.html");
  const html = await response.text();

  document.getElementById("navbar").innerHTML = html;

  highlightCurrentPage();
  setupHamburger();
}

loadNavbar();

function highlightCurrentPage() {
  const current = window.location.pathname;

  document.querySelectorAll(".nav-links a").forEach((link) => {
    const linkPath = new URL(link.href, window.location.origin).pathname;

    if (linkPath === current) {
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
