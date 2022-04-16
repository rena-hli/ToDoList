export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.view.init();
    this.dragAndDrop();
    this.submit();
    this.sortOnClick();
    this.sortIconHover();
  }

  sortIconHover() {
    this.view.sortImgDown.addEventListener("mouseover", (e) => {
      if (e.target.className !== "sorted-descending") {
        this.view.changeDescendingColor();
      } else {
        this.view.changeAscendingColor();
      }
    });

    this.view.sortImgDown.addEventListener("mouseout", (e) => {
      if (e.target.className !== "sorted-descending") {
        this.view.defaultDescending();
      } else {
        this.view.defaultAscending();
      }
    });
  }

  sortOnClick() {
    this.view.sortImgDown.addEventListener("click", (e) => {
      e.target.classList.toggle("sorted-descending");
      if (e.target.className !== "sorted-descending") {
        this.model.sortTasksAscending();
        this.view.changeDescendingColor();
      } else {
        this.model.sortTasksDescending();
        this.view.changeAscendingColor();
      }
      this.renderTasks();
    });
  }

  submit() {
    this.view.form.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = new FormData(e.target);
      if (data.get("tasks") !== "") {
        this.model.addElement(data.get("tasks"));
        this.view.emptyInput();
        this.renderTasks();
      }
    });
  }

  dragAndDrop() {
    const draggableDivs = document.querySelectorAll(".draggable");

    draggableDivs.forEach((e) => {
      e.addEventListener("dragstart", () => e.classList.add("dragging"));
      console.log(e.target);
    });

    draggableDivs.forEach((e) => {
      e.addEventListener("dragend", () => e.classList.remove("dragging"));
    });

    this.renderTasks();
  }

  renderTasks() {
    this.view.ul.innerHTML = "";

    this.model.arr.forEach((el, index) => {
      const elementWrapper = this.view.createDiv({
        class: "list-element-wrapper draggable",
      });
      const li = this.view.createLi({ class: "list-elements" });
      const inputElement = this.view.createInput({
        class: "input-elements",
        type: "text",
        value: el,
      });
      const deleteIcon = this.view.createImg({
        id: "delete",
        src: "./assets/images/Group 77.svg",
      });

      inputElement.addEventListener("keyup", (e) => {
        this.model.changeTask(index, e.target.value);
      });

      deleteIcon.addEventListener("click", () => {
        this.model.deleteTask(index);
        this.renderTasks();
      });

      deleteIcon.addEventListener("mouseover", () => {
        this.view.changeDeleteIcon(deleteIcon);
      });

      deleteIcon.addEventListener("mouseout", () => {
        this.view.defaultDeleteIcon(deleteIcon);
      });

      li.appendChild(inputElement);

      elementWrapper.appendChild(li);
      elementWrapper.appendChild(deleteIcon);

      this.view.ul.appendChild(elementWrapper);
    });
  }
}
