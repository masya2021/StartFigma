const burgerMenu = document.querySelector(".burger");
const mobileMenu = document.querySelector(".home__mobile-menu");
const closeBtn = document.querySelector(".mobile__close-btn");

burgerMenu.addEventListener("click", () => {
  mobileMenu.classList.add("mobiles");
  burgerMenu.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("mobiles");
  burgerMenu.style.display = "block";
});

const linkMobile = document.querySelectorAll(".mobile__link");

linkMobile.forEach((li) => {
  li.addEventListener("click", () => {
    mobileMenu.classList.remove("mobiles");
    burgerMenu.style.display = "block";
  });
});
