// 1. Создаем функцию-конструктор, которая принимем два параметра login и email и создает два свойства из этих параметров, с контекстом;
// 2. Записывает в прототип созданного конструктора функцию getInfo, которая также принимает логин и мейл и возвращает шаблонную строку по условию;

// Write code under this line
const Account = function (login, email) {
  (this.login = login), (this.email = email);
};

Account.prototype.getInfo = function () {
  return `login : ${this.login}, email: ${this.email}`;
};

console.log(typeof Account.prototype.getInfo);
// 'function'

const mango = new Account('Mangozedog', 'mango@dog.woof');
console.log(mango.getInfo());
// 'login : Mangozedog, email: mango@dog.woof'

const poly = new Account('Poly', 'poly@mail.com');
console.log(poly.getInfo());
// 'login : Poly, email: poly@mail.com'