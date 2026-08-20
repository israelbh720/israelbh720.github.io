const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
if (menuBtn) {
  menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
}
document.querySelectorAll("nav a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".project-card");
filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    cards.forEach(card => {
      const categories = card.dataset.category.split(" ");
      card.style.display = (filter === "todos" || categories.includes(filter)) ? "" : "none";
    });
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
