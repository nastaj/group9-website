const btnMobileNav = document.querySelector(".nav-mobile-icon");
const overlay = document.querySelector(".mobile-menu-overlay");

btnMobileNav.addEventListener("click", () => {
  if (overlay.classList.contains("hide")) {
    overlay.classList.remove("hide");
  } else if (!overlay.classList.contains("hide")) {
    overlay.classList.add("hide");
  }
});
