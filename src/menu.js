class Menu {

  constructor(options) {
    this.options = options;
    this.elem = "";
  }

  get Elem() {
    if (!this.elem) this.render();
    return this.elem;
  }

  render() {
    this.elem = document.createElement('div');
    this.elem.className = "menu";

    let titleElem = document.createElement('span');
    this.elem.appendChild(titleElem);
    titleElem.className = "title";
    titleElem.textContent = this.options.title;

    this.elem.onmousedown = () => {
      return false;
    };

    this.elem.onclick = event => {
      if (event.target.closest('.title')) {
        this.toggle();
      }
    };
  }

  renderItems() {
    let items = this.options.items || [];
    let list = document.createElement('ul');
    items.forEach(item => {
      let li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
    this.elem.appendChild(list);
  }

  open() {
    if (!this.elem.querySelector('ul')) {
      this.renderItems();
    }
    this.elem.classList.add('open');
  }

  close() {
    this.elem.classList.remove('open');
  }

  toggle() {
    this.elem.classList.contains('open') ? this.close() : this.open();
  }
}

let options = {
  title: "Сладости",
  items: ["Торт", "Пончик", "Пирожное", "Шоколадка", "Мороженое"]
};

let menu = new Menu(options);

document.body.appendChild(menu.Elem);