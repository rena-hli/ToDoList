export default class Model {
  constructor() {
    this.arr = [];
  }

  addElement(task) {
    this.arr.push(task)
  }

  sortAlphabet() {
    return this.arr.sort((a,b) => {
      if(a < b) {
        return -1
      } else if(a > b) {
        return 1
      }else {
        return 0
      }
    })
  }
}
