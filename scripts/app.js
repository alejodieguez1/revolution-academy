// responsive nav-bar
const bars = document.querySelector(".header__hamburger");
const navBar = document.querySelector(".header__nav-mobile");
const header = document.querySelector(".header");
const lines = document.querySelectorAll(".hamburger__line");
const hero = document.querySelector(".hero__section-bg");

bars.onclick = function () {
  navBar.classList.toggle("active");
  header.classList.toggle("active");
  hero.classList.toggle("active");

  lines.forEach((line) => {
    line.classList.toggle("active");
  });

  if (hero.classList.contains("active")) {
    hero.style.opacity = "0";
  } else {
    hero.style.opacity = "1";
  }
};

class SiteVideo extends HTMLElement {
  connectedCallback() {
    this.setupListeners();
    this.hidePause();
  }

  hidePause() {
    const buttons = this.querySelectorAll(".video__section-button");
    buttons.forEach((button) => {
      const match = button.dataset.button;
      if (match && match == "pause") {
        button.classList.add("hidden");
      }
    });
  }

  setupListeners() {
    const video = this.querySelector(".video__section-vid");
    const pausa = "pause";
    const play = "play";
    const pauseBtn = this.querySelector(`[data-button="${pausa}"]`);
    const playBtn = this.querySelector(`[data-button="${play}"]`);

    this.hidePause();

    document.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      const match = button.dataset.button;
      if (match && match == "play") {
        video.play();
        button.classList.add("hidden");
        pauseBtn.classList.remove("hidden");
        pauseBtn.style.opacity = 0;
      }
      if (match && match == "pause") {
        video.pause();
        playBtn.classList.remove("hidden");
        pauseBtn.classList.add("hidden");
      }
    });
  }
}
customElements.define("site-video", SiteVideo);
