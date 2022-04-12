import View from "./View/View.mjs";
import Model from "./Model/Model.mjs";
import Controller from "./Controller/controller.mjs";

const init = () => {
  const view = new View();
  const model = new Model();
  const controller = new Controller(view, model);

  controller.init();
};

init();
