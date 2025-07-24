window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav-wrapper");
  if (window.scrollY > 20) {
    nav.classList.remove("transparent");
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
    nav.classList.add("transparent");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("show");
    });
  }
});
