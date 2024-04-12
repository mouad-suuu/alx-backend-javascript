export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(brand) {
    this._brand = brand;
  }

  get motor() {
    return this._motor;
  }

  set motor(motor) {
    return (this._motor = motor);
  }

  get color() {
    return this._color;
  }

  set color(color) {
    return (this._color = color);
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
