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
        this.view.addElement(data.get("tasks"));
        this.view.emptyInput();
      }
    });

    this.view.sortImg.addEventListener('click', (e) => {
      this.model.sortAlphabet()
    })
  }

}
