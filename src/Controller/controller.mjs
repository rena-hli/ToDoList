export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.view.init();
    this.view.mainButton.addEventListener("click", () => {
      this.model.incrementCounter();
      const newCounter = this.model.getCurrentCounter();
      this.view.updateCounter(newCounter);
    });
  }
}
