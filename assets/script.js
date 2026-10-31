/* =====================================================================
   PAGE BUILDER
   Reads COURSE (from data.js) and builds the page.
   You normally don't need to edit this file.
   To add a NEW section type, write a function like renderText() below
   and add it to the RENDERERS list.
   ===================================================================== */

// Which function draws which section type
const RENDERERS = {
  text: renderText,
  people: renderPeople,
  cards: renderCards,
  table: renderTable,
};

// ---------- Section types ----------

function renderText(section) {
  return section.content || "";
}

function renderPeople(section) {
  return (section.groups || []).map(group => `
    <h3>${group.title}</h3>
    <div class="people-grid">
      ${(group.people || []).map(renderPerson).join("")}
    </div>
  `).join("");
}

function renderPerson(person) {
  const picture = person.photo
    ? `<img src="${person.photo}" alt="${person.name}">`
    : `<span class="initials">${initials(person.name)}</span>`;
  const name = person.link ? `<a href="${person.link}" target="_blank">${person.name}</a>` : person.name;
  return `
    <div class="person">
      ${picture}
      <div class="name">${name}</div>
      ${person.role ? `<div class="role">${person.role}</div>` : ""}
      ${person.email ? `<div class="email">${person.email}</div>` : ""}
    </div>
  `;
}

function renderCards(section) {
  const cards = (section.cards || []).map(card => `
    <div class="box">
      <h3>${card.title}</h3>
      <div>${card.content}</div>
    </div>
  `).join("");
  return `<div class="cards">${cards}</div>`;
}

function renderTable(section) {
  const columns = section.columns || [];
  const rows = section.rows || [];
  const head = columns.map(c => `<th>${c}</th>`).join("");
  const body = rows.length
    ? rows.map(row => `<tr>${row.map(cell => `<td>${renderCell(cell)}</td>`).join("")}</tr>`).join("")
    : `<tr><td class="empty" colspan="${columns.length}">${section.emptyText || "Will be added soon."}</td></tr>`;
  return `
    <div class="table-wrap">
      <table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>
    </div>
  `;
}

// A cell is either text, or a link: { text: "PDF", link: "..." }
function renderCell(cell) {
  if (cell && typeof cell === "object") {
    return `<a href="${cell.link}" target="_blank">${cell.text}</a>`;
  }
  return cell ?? "";
}

// ---------- Helpers ----------

function initials(name) {
  return name
    .replace(/^(Prof|Dr|Mr|Mrs|Ms)\.?\s+/i, "")
    .split(/\s+/)
    .map(word => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// ---------- Build the page ----------

function buildPage() {
  const sections = COURSE.sections.filter(s => !s.hidden);

  // General settings
  document.title = COURSE.title;
  document.documentElement.dir = COURSE.direction || "ltr";
  document.documentElement.style.setProperty("--theme", COURSE.themeColor || "#1d4ed8");
  document.getElementById("brand").textContent = COURSE.shortName || "";
  document.getElementById("course-title").textContent = COURSE.title || "";
  document.getElementById("course-subtitle").textContent = COURSE.subtitle || "";
  document.getElementById("footer").textContent = COURSE.footer || "";

  // Menu: one link per section (unless menu: false), then the extra menuLinks
  const sectionLinks = sections
    .filter(s => s.menu !== false)
    .map(s => `<a href="#${s.id}">${s.title}</a>`);
  const extraLinks = (COURSE.menuLinks || [])
    .map(l => `<a class="external" href="${l.link}" target="_blank">${l.text}</a>`);
  document.getElementById("nav-links").innerHTML = [...sectionLinks, ...extraLinks].join("");

  // Sections
  document.getElementById("sections").innerHTML = sections.map(section => {
    const render = RENDERERS[section.type];
    const body = render
      ? render(section)
      : `<p class="empty">Unknown section type: "${section.type}"</p>`;
    return `
      <section class="section card" id="${section.id}">
        <h2>${section.title}</h2>
        ${body}
      </section>
    `;
  }).join("");
}

// ---------- Small interactions ----------

function setupInteractions() {
  const nav = document.getElementById("nav-links");

  // Mobile menu button
  document.getElementById("menu-toggle").addEventListener("click", () => nav.classList.toggle("open"));
  nav.addEventListener("click", e => { if (e.target.tagName === "A") nav.classList.remove("open"); });

  // Back-to-top button + highlight the current section in the menu
  const toTop = document.getElementById("to-top");
  const links = [...nav.querySelectorAll('a[href^="#"]')];
  window.addEventListener("scroll", () => {
    toTop.classList.toggle("show", window.scrollY > 400);
    let current = "";
    for (const link of links) {
      const target = document.querySelector(link.getAttribute("href"));
      if (target && target.getBoundingClientRect().top <= 100) current = link;
    }
    links.forEach(link => link.classList.toggle("active", link === current));
  });
}

buildPage();
setupInteractions();
