const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

if(window.innerWidth > 768){
  hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
  });
}

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

//Scroll-Up button
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = 
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if(pos > 100){
    scrollProgress.style.display = 'grid';
  } else{
    scrollProgress.style.display = 'none';
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
};

window.onscroll = calcScrollValue;

//Sending Mails
function SendMail(){
  var params = {
    message : document.getElementById("message").value
  }
  emailjs.send('service_fpqvg9s', 'template_tzzuums', params).then(function (res) {
    alert("Success! " + res.status);
  })
}