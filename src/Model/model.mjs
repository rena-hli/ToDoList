export default class Model {
  constructor() {
    this.counter = 0;
  }

  incrementCounter() {
    this.counter++;
  }

  getCurrentCounter() {
    return this.counter;
  }
}
