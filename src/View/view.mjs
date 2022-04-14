export default class View {
  constructor() {
    this.addButton = null;
    this.circleButton = null;
    this.sortImgDown = null;
    this.form = null;
    this.ul = null;
    this.input = null
    this.root = document.getElementById("root");
  }

  init() {
    this.renderToDo();
  }

  createButton(props) {
    const button = document.createElement("button");

    props.text && (button.innerText = props.text);
    props.class && (button.className = props.class);
    props.id && (button.id = props.id);

    return button;
  }

  createParagraph(props) {
    const p = document.createElement("p");

    props.text && (p.innerText = props.text);
    props.class && (p.className = props.class);
    props.id && (p.id = props.id);

    return p;
  }

  createDiv(props) {
    const div = document.createElement("div");
    props.text && (div.innerText = props.text);
    props.class && (div.className = props.class);
    props.id && (div.id = props.id);

    return div;
  }

  createForm(props) {
    const form = document.createElement("form");

    props.text && (form.innerText = props.text);
    props.class && (form.className = props.class);
    props.id && (form.id = props.id);

    return form;
  }

  createInput(props) {
    const input = document.createElement("input");

    props.text && (input.innerText = props.text);
    props.class && (input.className = props.class);
    props.id && (input.id = props.id);
    props.type && (input.type = props.type);
    props.name && (input.name = props.name);
    props.value && (input.value = props.value);

    return input;
  }

  createUl(props) {
    const ul = document.createElement("ul");

    props.text && (ul.innerText = props.text);
    props.class && (ul.className = props.class);
    props.id && (ul.id = props.id);

    return ul;
  }

  createLi(props) {
    const li = document.createElement("li");

    props.text && (li.innerText = props.text);
    props.class && (li.className = props.class);
    props.id && (li.id = props.id);

    return li;
  }

  createImg(props) {
    const img = document.createElement("img");

    props.src && (img.src = props.src);
    props.class && (img.className = props.class);
    props.id && (img.id = props.id);

    return img;
  }

  emptyInput() {
    this.input.value = "";
  }

  changeDeleteIcon(icon) {
    icon.src = "./assets/images/Group 70.svg";
  }

  defaultDeleteIcon(icon) {
    icon.src = "./assets/images/Group 77.svg";
  }

  defaultDescending() {
    this.sortImgDown.src = "./assets/images/Group 74.svg";
  }

  defaultAscending() {
    this.sortImgDown.src = "./assets/images/Group 90.svg";
  }

  changeDescendingColor() {
    this.sortImgDown.src = "./assets/images/Group 73.svg";
  }

  changeAscendingColor() {
    this.sortImgDown.src = "./assets/images/Group 91.svg";
  }

  renderToDo() {
    const container = this.createDiv({ class: "container" });
    const yellowDiv = this.createDiv({ class: "yellow-div" });
    const heading = this.createParagraph({
      class: "to-do",
      text: "To-Do List",
    });

    const sortImgWrapper = this.createDiv({ class: "sort-down-wrapper" });
    this.sortImgDown = this.createImg({
      id: "sort-down",
      src: "./assets/images/Group 74.svg",
    });

    this.form = this.createForm({ class: "form" });
    const inputWrapper = this.createDiv({ class: "tasks-wrapper" });
    this.input = this.createInput({
      class: "tasks",
      type: "text",
      name: "tasks",
    });

    const buttonWrapper = this.createDiv({ class: "button-wrapper" });
    this.addButton = this.createButton({
      class: "add-button",
      text: "Добавить",
    });

    this.circleButton = this.createButton({ id: "circle-button", text: "+" });

    const listWrapper = this.createDiv({ class: "list-wrapper" });
    this.ul = this.createUl({ class: "list" });

    sortImgWrapper.appendChild(this.sortImgDown);
    inputWrapper.appendChild(this.input);
    listWrapper.appendChild(this.ul);
    buttonWrapper.appendChild(this.circleButton);
    buttonWrapper.appendChild(this.addButton);

    this.form.appendChild(inputWrapper);
    this.form.appendChild(listWrapper);
    this.form.appendChild(buttonWrapper);

    container.appendChild(yellowDiv);
    container.appendChild(heading);
    container.appendChild(sortImgWrapper);
    container.appendChild(this.form);

    this.root.appendChild(container);
  }
}
