import "@fortawesome/fontawesome-free/js/all";
import "../styles/main.scss";

const load = function onPageLoadShowIcon() {
  const menus = document.querySelectorAll("#menu");

  menus?.forEach((menu) => {
    const hamburger = document.createElement("div");
    hamburger.classList.add("hamburger");
    const i = document.createElement("i");
    i.classList.add("fas", "fa-bars");
    hamburger.appendChild(i);
    menu?.appendChild(hamburger);
  });
};

window.addEventListener("load", load);
