// Exercise 1 - Write the below function using ES6 | easy
/*
    function gretter(myArray, counter) {
        
        var greetText = 'Hello ';

        for (var index = 0; index < myArray.length; index++) {
            console.log(greetText + myArray[index]);
        }
    }
    greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);
*/

const greeter = (myArray = [], counter) => {
    let greetText = "Hello";
    // myArray.forEach((x) => console.log(`${greetText} ${x}`)); // Array forEach 
    for (const name of myArray) { // for..of
        console.log(`${greetText} ${name}`);
    }
};

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

// Exercise 2 - Use destructor to write a capitalizer function | easy peasy

const capitalize = (_text = "") => {
    const data = [..._text];
    return `${data[0].toUpperCase()}${data.slice(1).join("").toLowerCase()}`;
};

console.log(capitalize("fooBar"));
console.log(capitalize("nodeJs"));

// Exercise 3 - use array.proto.map
const colors = ["red", "green", "blue"];
const capitalizeColors = colors.map((x) => capitalize(x));

console.log(capitalizeColors);

// Exercise 4 - use array.proto.filter
const values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = values.filter((x) => x < 20);

console.log(filterLessThan20);

// Exercise 5 - use array.proto.reduce
const array = [1, 2, 3, 4];
const calculateSum = array.reduce((acc, cur) => acc += cur, 0);
const calculateProduct = array.reduce((acc, cur) => acc *= cur, 1);

console.log(calculateSum);
console.log(calculateProduct);

// Exercise 6 - classes
class Car {
    constructor(_model, _year) {
        this.model = _model;
        this.year = _year;
    }

    details() {
        return `Model: ${this.model} ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(_model, _year, _balance) {
        super(_model, _year);
        this.balance = _balance;
    }

    info() {
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`
    }
}


const car2 = new Car("Pontiac Firebird", 1976);
console.log(car2.details());
const sedan = new Sedan("Volvo SD", 2018, 30000);
console.log(sedan.info());
