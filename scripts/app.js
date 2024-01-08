// responsive nav-bar
const bars = document.querySelector(".header__hamburger");
const navBar = document.querySelector(".header__nav-mobile");
const header = document.querySelector(".site-header");
const lines = document.querySelectorAll(".hamburger__line");

bars.onclick = function () {
  if (!navBar.classList.contains("active")) {
    navBar.classList.add("active");
    document.body.style.overflow = "hidden";
  } else {
    navBar.classList.remove("active");
    document.body.removeAttribute("style");
  }
  if (!header.classList.contains("active")) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

  lines.forEach((line) => {
    line.classList.toggle("active");
  });
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

    this.addEventListener("click", (e) => {
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

class Benefits extends HTMLElement {
  connectedCallback() {
    this.setupListeners();
  }
  setupListeners() {
    const btn = this.querySelector(".benefit__button");
    const textCnt = this.querySelector(".benefit__text-container");
    const arrow = this.querySelector(".benefit__arrow");
    btn.addEventListener("click", () => {
      textCnt.classList.toggle("active");
      if (textCnt.classList.contains("active")) {
        textCnt.style.maxHeight = textCnt.scrollHeight + "px";
        arrow.classList.add("active");
      } else {
        textCnt.style.maxHeight = "0";
        arrow.classList.remove("active");
      }
    });
  }
}

customElements.define("benefit-text", Benefits);

function handleScroll() {
  const scrollY = window.scrollY || window.pageYOffset;

  if (scrollY >= 40) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", handleScroll);
