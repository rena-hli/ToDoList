export default class Model {
  constructor() {
    this.arr = [];
  }

  addElement(task) {
    this.arr.push(task);
  }

  deleteTask(selectedIndex) {
    this.arr = this.arr.filter((el, index) => index !== selectedIndex);
  }

  sortTasksDescending() {
    this.arr = this.arr.sort((a, b) => (a < b ? -1 : 1));
  }

  sortTasksAscending() {
    this.arr = this.arr.sort((a, b) => (a > b ? -1 : 1));
  }
}
