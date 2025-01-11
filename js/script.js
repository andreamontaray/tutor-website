document.addEventListener("DOMContentLoaded", function () {
  const navBar = document.querySelector(".navbar");
  const toggleButton = document.querySelector(".fa-bars");
  const mobileMenu = document.querySelector(".mobile-menu");

  function toggleNavTransparency() {
    if (window.scrollY > 0) {
      navBar.classList.add("transparent");
    } else {
      navBar.classList.remove("transparent");
    }
  }

  function toggleMobileMenu() {
    mobileMenu.classList.toggle("active");
  }

  window.addEventListener("scroll", toggleNavTransparency);
  toggleButton.addEventListener("click", toggleMobileMenu);
});
