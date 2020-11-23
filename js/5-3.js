// 1. Добавляем класс Storage который принимает один параметр - массив и создаёт на основе его свойство, в контексте this;
// 2. Добавляем в класс Storage методы getItems, addItem, removeItem;
// 3. Метод getItems будет принимать текущий массив и возращать его;
// 4. Метод addItem будет принимать элемент массива и возвращать массив с этим элементом;
// 5. Метод removeItem будет принимать элемент массива, определять его индекс и возвращать массив без этого элемента;

// Write code under this line
class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems = function (items) {
    return this.items;
  };

  addItem = function (item) {    
    return this.items.push(item);
  };

  removeItem = function (item) {
    const index = this.items.indexOf(item);
    return this.items.splice(index, 1);
  };
}

console.log(typeof Storage);
// 'function'

const goods = ['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор'];

const storage = new Storage(goods);

console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

storage.addItem('Дроид');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

storage.removeItem('Пролонгер');
console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */
