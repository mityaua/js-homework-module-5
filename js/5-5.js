// 1. Создаем для класса Car статический метод getSpecs, который принимает параметром car и возвращает шаблонную строку согласно условию;
// 2. Принимаем для конструктора параметр в виде обьекта от new Car; 
// 3. В свойства конструктора вписываем все свойства согласно условию и их начальные значения;
// 4. Создаем геттер и сеттер для свойства price согласно условия;
// 5. Для метода turnOn записываем в свойство значение по условию;
// 6. Для метода turnOff записываем в свойство значения по условию. А также значение скорости по условию;
// 7. Для метода accelerate вписываем условие (если-тогда, иначе) по задаче;
// 8. Для метода decelerate вписываем условие (если-тогда, иначе) по задаче;
// 9. Для метода drive вписываем условие (если-тогда) по задаче;

class Car {
  // Write code under this line
  static getSpecs(car) {
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`;
  }

  constructor({ maxSpeed, price }) {
    this.maxSpeed = maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    return (this._price = value);
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.speed + value < this.maxSpeed) {
      this.speed += value;
    } else this.speed = this.maxSpeed;
  }

  decelerate(value) {
    if (this.speed - value > 0) {
      this.speed -= value;
    } else this.speed = 0;
  }

  drive(hours) {
    if ((this.isOn = true)) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
