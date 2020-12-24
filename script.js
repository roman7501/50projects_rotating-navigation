const toggleNav = document.getElementById("toggle-nav");

const main = document.getElementById("main");

toggleNav.addEventListener("click", () => {
  toggleNav.classList.toggle("nav__icons--active");
  main.classList.toggle("main--active");
});
