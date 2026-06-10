const projects = [
  {
    title: "Perler Bead Maker",
    image: "./assets/PerlerCover.png",
    year: 2026,
    duration: "2 weeks",
    type: "Course work",
    role: "All",
    teamSize: "Solo-Build",
    link: "projects/perler-bead.html"
  },
   {
    title: "Pandora's Apparitions",
    image: "./assets/PandoraCover.png",
    year: 2026,
    duration: "48 hours",
    type: "Game jam",
    role: "Programmer",
    teamSize: "2 people",
    link: "projects/pandoras-apparitions.html"
  },
  {
    title: "Limborium",
    image: "./assets/LimboriumCover.png",
    year: 2025,
    duration: "5 months",
    type: "Course work",
    role: "Programmer",
    teamSize: "3 people",
    link: "projects/limborium.html"
  },
   {
    title: "Matey",
    image: "./assets/MateyCover.png",
    year: 2025,
    duration: "4 months",
    type: "Course work",
    role: "Programmer",
    teamSize: "3 people",
    link: "projects/matey.html"
  }, 
 

];

function renderProjects(list) {
  const container = document.getElementById("project-container");
  container.innerHTML = "";

  list.forEach(project => {
    container.innerHTML += `
        <a href="${project.link}" class="project">
        <div class="project-image">
          <h2 class="project-title">${project.title}</h2>
          <img src="${project.image}" alt="project-cover" />
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

document.querySelectorAll(".dropdown").forEach(dropdown => {
  const btn = dropdown.querySelector(".dropdown-btn");
  const labelSpan = btn.querySelector(".dropdown-label");
  const items = dropdown.querySelectorAll(".dropdown-item");

  
  dropdown.dataset.defaultLabel = labelSpan.textContent;

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("open");
  });

  items.forEach(item => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();

      const value = item.dataset.value;
      const label = item.textContent;

      dropdown.dataset.selected = value;

      if (value === "all") {
        labelSpan.textContent = dropdown.dataset.defaultLabel;
      } else {
        labelSpan.textContent = label;
      }

      dropdown.classList.remove("open");

      applyFilters();
    });
  });
});


document.addEventListener("click", (e) => {
  document.querySelectorAll(".dropdown").forEach(dd => {
    if (!dd.contains(e.target)) {
      dd.classList.remove("open");
    }
  });
});

function applyFilters() {
  let filtered = [...projects];

  const year = document.querySelector('[data-filter="year"]')?.dataset.selected || "all";
  const type = document.querySelector('[data-filter="type"]')?.dataset.selected || "all";
  const role = document.querySelector('[data-filter="role"]')?.dataset.selected || "all";
  const teamSize = document.querySelector('[data-filter="teamSize"]')?.dataset.selected || "all";

  if (year !== "all") {
    filtered = filtered.filter(p => p.year == year);
  }

  if (type !== "all") {
    filtered = filtered.filter(p => p.type === type);
  }

  if (role !== "all") {
    filtered = filtered.filter(p => p.role === role);
  }

  if (teamSize !== "all") {
    filtered = filtered.filter(p => p.teamSize === teamSize);
  }

  renderProjects(filtered);

    const noResults = document.getElementById("no-results");

  if (filtered.length === 0) {
    noResults.classList.remove("hidden");
  } else {
    noResults.classList.add("hidden");
  }

}

renderProjects(projects);