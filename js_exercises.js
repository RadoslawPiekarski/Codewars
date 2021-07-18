function silnia(givenNumber) {
    let returnNumber = 1;
    for (let i = 1; i === givenNumber; i++) {
        returnNumber = returnNumber * i;
    }
    return returnNumber;
}

// silnia(4);

function dodajZakres(minNumber, maxNumber) {
    let returnNumber = 0;
    for (let i = minNumber; i === maxNumber; i++) {
        returnNumber += i;
    }
    return returnNumber;
}

// print(dodajZakres(7));


function printString() {
    console.log("Java Script rulez!")
};

function printString2() {
    console.log("Wygenerowano setInterval")
};

// setTimeout(printString(), 2000);
// setInterval(printString2(), 3000);


let distFromAverage = (input_table) => {
    let table_sum = 0;

    for (let i in input_table) {
        table_sum += input_table[i]
    }

    let table_average = table_sum / input_table.length

    let output_table = input_table.map(function (x) {
        return Math.abs(x - table_average);
    });
    console.log(output_table)
    return output_table;

}


let ptintTable = (inputArray) => {
    inputArray.forEach((element) => {
        console.log(element)
    })
};


let multiply = (inputArray) => {
    let returnResult = 1;
    inputArray.forEach((element) => {
        returnResult *= element;
    })
    return returnResult;
}


let getEvenAverage = (inputArray) => {
    let oddNumbers = inputArray.filter(element => element % 2 === 0)
    if (oddNumbers.length === 0) {
        return null;
    }
    let sumNumber = 0;
    oddNumbers.forEach((element) => {
        sumNumber += element
    });

    return sumNumber / oddNumbers.length;
};

// console.log(getEvenAverage([2,8,3,7,4]))

let sortArray = (inputArray) => {
    inputArray.sort((a, b) => {
        return a - b
    })
    return inputArray;
}

// sortArray([13, 5, 2, 3, 10])


let addArrays = (arrayOne, arrayTwo) => {
    let arrayShort = arrayOne,
        arrayLong = arrayTwo;

    if (arrayOne.length >= arrayTwo.length) {
        arrayShort = arrayTwo;
        arrayLong = arrayOne;
    }
    let outputArray = [];
    for (let i = 0; i < arrayLong.length; i++) {
        if (i < arrayShort.length) {
            outputArray[i] = arrayOne[i] + arrayTwo[i];
        } else {
            outputArray.push(arrayLong[i])
        }
    }
    return outputArray;
}

// addArrays([2,3,1,5,3,5], [3,1,76,1])

const country = {
    capital : "Warsaw",
    population : 38,
    president : "Duda",
    ministers : [1,2,3]
}

// console.log(country.capital)

const timeMachine = {
    shape : "round",
    model : "T2000",
    run : function (date, place){
        console.log("Here we go!")
    }
}

// timeMachine.run(21, "Moscow");

const person = {
    name : "Janek",
    age : 123,
    sayHello : function () {
        console.log(`Hello ${this.name}!`);
    }
}


// person.sayHello()


const car = {
    brand : "BMW",
    color : "black",
    numberOfKilometers : 0,
    printCarinfo : function () {
        console.log(`brand: ${this.brand} / color: ${this.color} / number of kilometers: ${this.numberOfKilometers}`)
    },
    drive : function(km){
        this.numberOfKilometers += km
    }
}

// car.drive(34);
// car.printCarinfo();
// car.check = [1998, 2001, 2012];
// car.addCheck = function (year){ this.check.push(year)};
// car.showCheck = function (){console.log(car.check)};
// car.addCheck(2021)
// car.showCheck()

function Basket(){
    this.products = [],
    this.sum = 0,
    this.addProduct = function (name, price){
        this.products.push([name, price]);
        this.sum += price
    }
    this.showBasket = function (){
        this.products.forEach((element)=>{
            console.log(element)
        })
        console.log(`Final price: ${this.sum}`)
    }
}

// const basket1 = new Basket();
// basket1.addProduct('truskawka',100);
// basket1.addProduct('banan', 400);
// basket1.showBasket()


// const interval = setInterval(()=>{
//     console.log("xd");
// },2000);
//
// setTimeout(()=>{
//     console.log("Elo");
// },5000);


class Vehicle {
    constructor(name) {
        this.name = name;
    };
    printName() {
        console.log(`Im a {this.name}`)
    };
}

class Boat extends  Vehicle {
    printSwim() {
        console.log(`${this.name} can swim`);
    }
}

class Duck {
    constructor() {
        this.type = "ordinary duck"
    }
    sound(){
        console.log("Quack quack");
    }
    swim(){
        console.log("I'm swiming ...");
    }
    print(){
        console.log(`Looks like ${this.type}`)
    }
}

class WildDuck extends Duck{
    constructor() {
        super();
        this.type = "wildDuck";
    }
}


