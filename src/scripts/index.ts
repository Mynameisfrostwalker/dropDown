import "@fortawesome/fontawesome-free/js/all";
import "../styles/main.scss";

const createItemElement = (item: string) => {
  const li = document.createElement("li");
  li.textContent = item;
  li.id = item;
  return li;
};

const showMenu = function showMenuOnHover(element: Element) {
  const itemsDiv = document.createElement("div");
  itemsDiv.classList.add("itemsDiv");
  const ul = document.createElement("ul");
  itemsDiv.appendChild(ul);

  if (element instanceof HTMLElement) {
    const items = element?.classList;
    const itemsArr: string[] = [];

    items.forEach((item) => {
      itemsArr.push(item);
    });

    let strArr: string[] = [];

    itemsArr.forEach((item) => {
      if (item !== "frostwalkermenu") {
        const begin = item[0];
        const end = item[item.length - 1];

        if (begin === "'" && end === "'") {
          const itemDiv = createItemElement(item);
          ul.appendChild(itemDiv);
          return;
        }

        if (begin === "'") {
          strArr.push(item.slice(1));
          return;
        }

        if (end === "'" && strArr.length !== 0) {
          strArr.push(item.slice(0, -1));
          const itemDiv = createItemElement(strArr.join(" "));
          ul.appendChild(itemDiv);
          strArr = [];
          return;
        }

        if (strArr.length === 0) {
          const itemDiv = createItemElement(item);
          ul.appendChild(itemDiv);
        } else {
          strArr.push(item);
        }
      }
    });

    element.appendChild(itemsDiv);
  }
};

const load = function onPageLoadShowIcon() {
  const menus = document.querySelectorAll(".frostwalkermenu");

  menus?.forEach((menu) => {
    const hamburger = document.createElement("div");
    hamburger.classList.add("hamburger");
    const i = document.createElement("i");
    i.classList.add("fas", "fa-bars");
    hamburger.appendChild(i);
    menu?.appendChild(hamburger);
    showMenu(menu);
  });
};

window.addEventListener("load", load);
