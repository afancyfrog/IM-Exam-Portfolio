const BASE = "/IM-Exam-Portfolio";

const projects = [
  {
    title: "Perler Bead Maker",
    image: `${BASE}/assets/PerlerCover.png`,
    year: 2026,
    duration: "2 weeks",
    type: "Course work",
    role: "All",
    teamSize: "Solo-Build",
    link: `${BASE}/perler-bead.html`,
  },
  {
    title: "Pandora's Apparitions",
    image: `${BASE}/assets/PandoraCover.png`,
    year: 2026,
    duration: "48 hours",
    type: "Game jam",
    role: "Programmer",
    teamSize: "2 people",
    link: `${BASE}/pandoras-apparitions.html`,
  },
  {
    title: "Limborium",
    image: `${BASE}/assets/LimboriumCover.png`,
    year: 2025,
    duration: "5 months",
    type: "Course work",
    role: "Programmer",
    teamSize: "3 people",
    link: `${BASE}/limborium.html`,
  },
  {
    title: "Matey",
    image: `${BASE}/assets/MateyCover.png`,
    year: 2025,
    duration: "4 months",
    type: "Course work",
    role: "Programmer",
    teamSize: "3 people",
    link: `${BASE}/matey.html`,
  },
];

function renderProjects(list) {
  const container = document.getElementById("project-container");
  if (!container) return;

  container.innerHTML = "";

  list.forEach((project) => {
    container.innerHTML += `
      <a href="${project.link}" class="project">
        <div class="project-image">
          <h2 class="project-title">${project.title}</h2>
          <img src="${project.image}" alt="${project.title}" />
        </div>

        <ul class="project-tags">
          <li>${project.year}</li>
          <li>${project.duration}</li>
          <li>${project.type}</li>
          <li>${project.teamSize}</li>
          <li>${project.role}</li>
        </ul>
      </a>
    `;
  });
}

function applyFilters() {
  let filtered = [...projects];

  const year =
    document.querySelector('[data-filter="year"]')?.dataset.selected || "all";
  const type =
    document.querySelector('[data-filter="type"]')?.dataset.selected || "all";
  const role =
    document.querySelector('[data-filter="role"]')?.dataset.selected || "all";
  const teamSize =
    document.querySelector('[data-filter="teamSize"]')?.dataset.selected ||
    "all";

  if (year !== "all") filtered = filtered.filter((p) => p.year == year);
  if (type !== "all") filtered = filtered.filter((p) => p.type === type);
  if (role !== "all") filtered = filtered.filter((p) => p.role === role);
  if (teamSize !== "all")
    filtered = filtered.filter((p) => p.teamSize === teamSize);

  renderProjects(filtered);

  const noResults = document.getElementById("no-results");
  if (noResults) {
    noResults.classList.toggle("hidden", filtered.length !== 0);
  }

  initDropdowns();
}

function initDropdowns() {
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    const btn = dropdown.querySelector(".dropdown-btn");
    const labelSpan = btn.querySelector(".dropdown-label");
    const items = dropdown.querySelectorAll(".dropdown-item");

    dropdown.dataset.defaultLabel =
      dropdown.dataset.defaultLabel || labelSpan.textContent;

    btn.onclick = (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("open");
    };

    items.forEach((item) => {
      item.onclick = (e) => {
        e.stopPropagation();

        const value = item.dataset.value;
        dropdown.dataset.selected = value;

        labelSpan.textContent =
          value === "all" ? dropdown.dataset.defaultLabel : item.textContent;

        dropdown.classList.remove("open");
        applyFilters();
      };
    });
  });
}

document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown").forEach((dd) => {
    dd.classList.remove("open");
  });
});

renderProjects(projects);
initDropdowns();
