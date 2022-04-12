export default class View {
  constructor() {
    this.addButton = null;
    this.sortImg = null;
    this.form = null;
    this.ul = null;
    this.input = null;
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

  addElement(task) {
    const elementWrapper = this.createDiv({class: 'list-element-wrapper'})
    const li = this.createLi({ class: "list-elements", text: task });
    elementWrapper.appendChild(li)
    this.ul.appendChild(elementWrapper);
  }

  emptyInput() {
    this.input.value = "";
  }

  renderToDo() {
    const container = this.createDiv({ class: "container" });
    const yellowDiv = this.createDiv({ class: "yellow-div" });
    const heading = this.createParagraph({
      class: "to-do",
      text: "To-Do List",
    });

    const sortImgWrapper = this.createDiv({ class: "sort-down-wrapper" });
    this.sortImg = this.createImg({
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

    const listWrapper = this.createDiv({class: 'list-wrapper'})
    this.ul = this.createUl({ class: "list" });

    container.appendChild(yellowDiv);
    container.appendChild(heading);
    container.appendChild(sortImgWrapper);
    sortImgWrapper.appendChild(this.sortImg);
    inputWrapper.appendChild(this.input);
    this.form.appendChild(inputWrapper);
    listWrapper.appendChild(this.ul);
    this.form.appendChild(listWrapper);
    buttonWrapper.appendChild(this.addButton);
    this.form.appendChild(buttonWrapper);
    container.appendChild(this.form);
    this.root.appendChild(container);
  }
}
