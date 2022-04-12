export default class View {
  constructor() {
    this.mainButton = null;
    this.root = document.getElementById("root");
  }

  init() {
    this.mainButton = this.createButton({
      text: "click",
      class: "main-button",
      id: "mainButton",
    });

    this.counterEl = this.createParagraph({
      text: "0",
      class: "counter-element",
      id: "counterElement",
    });

    this.root.appendChild(this.counterEl);
    this.root.appendChild(this.mainButton);
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

  updateCounter(newText) {
    this.counterEl.innerText = newText;
  }
}
