export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.view.init();
    this.view.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      if (data.get("tasks") !== "") {
        this.model.addElement(data.get("tasks"));
        this.view.emptyInput();
        this.renderTasks();

      }
    });

    this.view.sortImgDown.addEventListener("click", (e) => {
      this.model.sortTasksDescending();
      this.view.defaultDescending();
      e.target.classList.toggle("sorted-descending");
      if (e.target.className !== "sorted-descending") {
        this.model.sortTasksAscending();
        this.view.defaultAscending();
        console.log('here')
      } else {
        this.model.sortTasksDescending();
        this.view.defaultDescending();
      }
      this.renderTasks();
    });

    this.view.sortImgDown.addEventListener("mouseover", (e) => {
      if (e.target.className !== "sorted-descending") {
        this.view.changeDescendingColor();
        this.renderTasks();
      } else {
        this.view.changeAscendingColor();
        this.renderTasks();
      }
    });
    this.view.sortImgDown.addEventListener("mouseout", (e) => {
      if (e.target.className !== "sorted-descending") {
        this.view.defaultDescending();
        this.renderTasks();
      } else {
        this.view.defaultAscending();
        this.renderTasks();
      }
    });
  }

  renderTasks() {
    this.view.ul.innerHTML = "";
    this.model.arr.forEach((el, index) => {
      const elementWrapper = this.view.createDiv({
        class: "list-element-wrapper",
      });
      const li = this.view.createLi({ class: "list-elements", text: el });
      const deleteIcon = this.view.createImg({
        id: "delete",
        src: "./assets/images/Group 77.svg",
      });
      deleteIcon.addEventListener("click", (e) => {
        this.model.deleteTask(index);
        this.renderTasks();
      });
      elementWrapper.appendChild(li);
      elementWrapper.appendChild(deleteIcon);
      this.view.ul.appendChild(elementWrapper);
    });

  }

}
