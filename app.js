const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//show sidebar
menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
})

//hide sidebar
closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
})

//change theme
themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');
})