const menuIcon = document.querySelector(".menu-icon");
const menuClose = document.querySelector(".menu-close");
const sideNav = document.querySelector(".header-section");

var swiper = new Swiper(".image-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".image-slider-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

menuIcon.addEventListener("click", () => {
  sideNav.classList.toggle("show-nav");
});

menuClose.addEventListener("click", () => {
  sideNav.classList.toggle("show-nav");
});
