class Car {
    constructor(make ,model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    }
    getDescription(){
        return `This car is made by ${this.make}, ${this.model} is the model and made on ${this.year} year.`

    }
};

class ElectricCar extends Car{
    constructor(make ,model, year, range){
        super(make ,model, year)
        this.range = range;
    }
    getDescription(){
        return `This Electric Car is made by ${this.make}, ${this.model} is the model, made on ${this.year} year, and it is ${this.range}.`
    }
};
const eCar1 = new ElectricCar("Tesla", "Model S", "year 2019", `range 300`);
console.log(eCar1.getDescription());