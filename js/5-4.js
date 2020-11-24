// 1. Создаем класс StringBuilder с методом конструктор внутри, который принимает параметр - строку value. Записываем этот параметр в свойство _value используя контекст;
// 2. Создаем геттер и сеттер для параметра value;
// 3. Создаем метод append, который приниммает в качестве параметра строку str и записывает в свойство = свойство + строку;
// 4. Создаем метод prepend, который приниммает в качестве параметра строку str и записывает в свойство = строку + свойство;
// 5. Создаем метод pad, который приниммает в качестве параметра строку str и возвращает = метод append + метод prepend;

// Write code under this line
class StringBuilder {
  constructor(value) {
    this._value = value;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    return (this._value = value);
  }

  append(str) {
    return (this.value = this.value + str);
  }

  prepend(str) {
    return (this.value = str + this.value);
  }

  pad(str) {
    return this.append(str) + this.prepend(str);
  }
}

console.log(typeof StringBuilder);
// 'function'

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
