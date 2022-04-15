export default class Model {
  constructor() {
    this.arr = [];
  }

  addElement(task) {
    this.arr = [...this.arr, task];
  }

  deleteTask(selectedIndex) {
    this.arr = this.arr.filter((el, index) => index !== selectedIndex);
  }

  sortTasksDescending() {
    this.arr.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));
  }

  sortTasksAscending() {
    this.arr.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? -1 : 1));
  }

  changeTask(index, task) {
    this.arr[index] = task;
  }
}
