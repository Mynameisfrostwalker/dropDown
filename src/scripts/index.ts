import "@fortawesome/fontawesome-free/js/all";
import "../styles/main.scss";

const createItemElement = (item: string) => {
  const li = document.createElement("li");
  li.textContent = item;
  li.id = item;
  return li;
};

const showMenu = function showMenuOnHover(
  element: Element,
  mobile: "mobile" | null = null
) {
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
      if (item !== "frostwalkermenu" && item !== "frostwalkermobilemenu") {
        const begin = item[0];
        const end = item[item.length - 1];

        if (begin === "'" && end === "'") {
          const itemDiv = createItemElement(item);
          if (mobile === "mobile") {
            itemDiv.classList.add("none");
          }
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
          if (mobile === "mobile") {
            itemDiv.classList.add("none");
          }
          ul.appendChild(itemDiv);
          strArr = [];
          return;
        }

        if (strArr.length === 0) {
          const itemDiv = createItemElement(item);
          if (mobile === "mobile") {
            itemDiv.classList.add("none");
          }
          ul.appendChild(itemDiv);
        } else {
          strArr.push(item);
        }
      }
    });

    if (mobile === "mobile") {
      itemsDiv.classList.add("small");
    }

    element.appendChild(itemsDiv);
  }
};

const animateMenu = function showMenuOnClick(e: Event) {
  const element = e.currentTarget;

  if (element instanceof HTMLElement) {
    const itemsDiv = element.nextElementSibling;
    const ul = itemsDiv?.firstElementChild;

    if (itemsDiv?.classList.contains("small")) {
      itemsDiv.classList.remove("small");

      if (ul instanceof HTMLElement) {
        let i = 0;

        const id = setInterval(() => {
          ul.children[i].classList.remove("none");
          i += 1;
          if (i === ul.children.length) {
            clearInterval(id);
          }
        }, 500);
      }
    } else {
      itemsDiv?.classList.add("small");

      if (ul instanceof HTMLElement) {
        for (let i = 0; i < ul.children.length; i += 1) {
          ul.children[i].classList.add("none");
        }
      }
    }
  }
};

const load = function onPageLoadShowIcon() {
  const menus = document.querySelectorAll(".frostwalkermenu");
  const mobileMenus = document.querySelectorAll(".frostwalkermobilemenu");

  mobileMenus.forEach((menu) => {
    const hamburger = document.createElement("div");
    hamburger.classList.add("hamburger");
    const i = document.createElement("i");
    i.classList.add("fas", "fa-bars");
    hamburger.appendChild(i);
    menu?.appendChild(hamburger);
    showMenu(menu, "mobile");
    hamburger.addEventListener("click", animateMenu);
  });

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
