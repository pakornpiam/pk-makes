// PK Makes — landing page interactions

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

// Close the mobile menu after tapping a link
nav.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Guard placeholder links (shop / donate / socials not wired yet)
document.querySelectorAll('a[data-link]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href || href === "#") {
      e.preventDefault();
      console.info(`[PK Makes] "${a.dataset.link}" link not set yet.`);
    }
  });
});
