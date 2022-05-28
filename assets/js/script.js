const menuIcon = document.querySelector(".menu-icon");
const menuClose = document.querySelector(".menu-close");
const sideNav = document.querySelector(".header-section");
const body = document.getElementsByTagName("body");

var swiper = new Swiper(".image-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
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

menuIcon.addEventListener("click", showNav);
menuClose.addEventListener("click", showNav);

function showNav() {
  sideNav.classList.toggle("show-nav");
  if (sideNav.classList.contains("show-nav")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}
