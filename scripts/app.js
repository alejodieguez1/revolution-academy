// responsive nav-bar
const bars = document.querySelector(".bars");
const navBar = document.querySelector(".nav-bar");
const lines = document.querySelectorAll(".line");

bars.onclick = function () {
  navBar.classList.toggle("active");
  lines.forEach((line) => {
    line.classList.toggle("active");
  });
};

// swiper
