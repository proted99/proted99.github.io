const navmenu = document.getElementById("nav-menu");
const navtab = document.getElementById("nav-tab");

window.addEventListener("scroll", function () {
  scrollposition = window.scrollY;

  if (scrollposition >= 60) {
    navmenu.classList.add("nav-dark");
  } else if (scrollposition <= 60) {
    navmenu.classList.remove("nav-dark");
  }
});

//klik diluar navbar
window.addEventListener("click", function (e) {
  if (e.target != navtab && e.target != navmenu) {
    navtab.classList.remove("navbar-nav");
    navmenu.classList.add("hidden");
  }
});

//close nav menu after items clicked
if (window.innerWidth < 1024) {
  document.querySelectorAll(".navbar-nav li a").forEach((navitem) => {
    navitem.addEventListener("click", closeNav);
  });
}
