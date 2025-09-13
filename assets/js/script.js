const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");
const overlay = document.querySelector(".overlay");
const mobileDropdowns = document.querySelectorAll(".mobile-dropdown");

function openMenu() {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
}
function closeMenuFunc() {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
}

menuToggle.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeMenuFunc);
overlay.addEventListener("click", closeMenuFunc);

mobileDropdowns.forEach(drop => {
  drop.addEventListener("click", (e) => {
    e.preventDefault();
    drop.classList.toggle("open");
  });
});








// Gallery Thumbnail Click
const mainImg = document.querySelector('.product-gallery .main-img');
const thumbs = document.querySelectorAll('.product-gallery .thumb');

thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    mainImg.src = thumb.src;
    thumbs.forEach(t => t.classList.remove('active-thumb'));
    thumb.classList.add('active-thumb');
  });
});
