class Car {
  //attributes
  // methods
  model: string;
  year: number;
  price: string;

  constructor(model: string, year: number, price: string) {
    this.model = model;
    this.year = year;
    this.price = price;
  }
  drive() {
    console.log("The Car has Started driving");
  }

  stop() {
    console.log("The car has stopped");
  }
}

const car = new Car("Tesla", 2024, "15000");
car.drive();
console.log(car.price);

const car2 = new Car("Tesla2", 2023, "150000");
car2.drive();
console.log(car2.price);
