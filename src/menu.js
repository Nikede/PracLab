class Menu {

  constructor(options) {
    this.options = options;
    this._elem = "";
  }

  get elem() {
    if (!this._elem) this.render();
    return this._elem;
  }

  render() {
    this._elem = document.createElement("div");
    this._elem.className = "menu";

    const titleElem = document.createElement("span");
    this._elem.appendChild(titleElem);
    titleElem.className = "title";
    titleElem.textContent = this.options.title;

    this._elem.onmousedown = () => {
      return false;
    };

    this._elem.onclick = event => {
      if (event.target.closest(".title")) {
        this.toggle();
      }
    };
  }

  renderItems() {
    const items = this.options.items || [];
    const list = document.createElement("ul");
    items.forEach(item => {
      let li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
    this._elem.appendChild(list);
  }

  open() {
    if (!this._elem.querySelector("ul")) {
      this.renderItems();
    }
    this._elem.classList.add("open");
  }

  close() {
    this._elem.classList.remove("open");
  }

  toggle() {
    this._elem.classList.contains("open") ? this.close() : this.open();
  }
}

const options = {
  title: "Сладости",
  items: ["Торт", "Пончик", "Пирожное", "Шоколадка", "Мороженое"]
};

const menu = new Menu(options);

document.body.appendChild(menu.elem);