'use strict';

// const bookings = [];
// const createBooking = function (flightNum = 'BOEING', numPassangers = 1, price = 199 * numPassangers) { //ES6

//     const booking = {
//         flightNum,
//         numPassangers,
//         price
//     }

//     console.log(booking);
//     bookings.push(booking); //to push the object into the array 'bookings'

// }

// createBooking('lh123', 2, 300)


//-------------CALLBACK FUNCTIONS-----------------
// const oneWord = function(str){
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = function(str){
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// //higher order function
// const transformer = function(str, fn){
//     console.log(`original : ${str}`);
//     console.log(`transformed : ${fn(str)}`);

//     console.log(`name : ${fn.name}`);

// }

// transformer('Javascript is the best language', upperFirstWord)
// console.log('---------------------------------------');
// transformer('Javascript is the best language', oneWord)



//second example 

// const firstUpper = function(str){
//     const splitted = str.trim().split(' ')
//     const [first, ...others] = splitted;
//     const joint = [first.toUpperCase() , ...others].join(' ')
//     return joint;
// }

// const changeSentence = function(srt, func){
//     console.log(`changed sentence ${func(srt)}`);
// }
// changeSentence('hello bello', firstUpper)


// return //
// const greet = (greeting)=>{
//     return (name)=>{
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greeter = greet('hi');
// greeter('buddy')

const lufthansa = {
    airline: 'Lufthansa',
    iacode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iacode} ${flightNum}`);

        this.bookings.push({
            flight: `${this.iacode} ${flightNum}`,
            name
        })
    }
}
lufthansa.book(239, 'jonas scmedmann')

const eurowings = {
    airline: 'eurowings',
    iacode: 'EW',
    bookings: [],
}
//call method ==> used for get the information from another object
const book = lufthansa.book;
book.call(eurowings, 222, 'husan holmatov')
console.log(eurowings);

// //example
// const obj = { 
//     num : 2
// }
// function called(arg1, arg2, arg3){
//     return arg1 + arg2 + arg3 + this.num
// }
// const sum = called.call(obj, 1, 2,3 )
// console.log(sum);

//Bind method
const bookLufthansa = book.bind(lufthansa)
bookLufthansa(222, 'jonas scmedman')
bookLufthansa(111, 'hasan kholmatov')

const bookEW = book.bind(eurowings)
bookEW(333, 'mary holland')

const bookEW23 = book.bind(eurowings, 23)
bookEW23('steven jobs')
bookEW23('mark suckerberg')


//With event listeners => Bind
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    this.planes++;
    console.log(this.planes);
    console.log(this);
}
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa)) //without bind 'this' would refer to btn 


//partial application
// const addTax = (rate, value) => value + value * rate;
// // console.log(addTax(.1, 100));
// const addVAT = addTax.bind(null, .23)
// console.log(addVAT(199));

function addTax(rate){
    return (value)=>{
        console.log(value + value * rate);
    }
}

const tax = addTax(.12)
tax(100);