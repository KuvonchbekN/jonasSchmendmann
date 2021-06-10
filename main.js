'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22, // 10 hours open
    },
    fri: {
      open: 11,
      close: 23, //12 hours open
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex],
      [this.mainMenu[mainIndex]]
    ]
  },

  //to order food from the restaurant
  orderDelivery: function ({
    time,
    address,
    mainIndex,
    starterIndex
  }) {
    console.log(`${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}  has been received in ${time} in ${address} `)
  },

  // book table in the restaurant
  bookingTable: function ({
    time,
    mainIndex,
    starterIndex,
    location
  }) {
    console.log(`we go to your restaurant to ${location}, at ${time} and will eat ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]}`);
  },

  orderPizza: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1} , ${ing2} and ${ing3}`);
  }
};

// SHOULD NOT CONFUSE THE DESTRUCTURING AND SPREAD OPERATORS 
const arr = [1, 2, ...[3, 4]] // this is spread because it is in the right side of =

const [a, b, ...others] = [1, 2, 3, 4, 5] // this is the rest since it is in the left side of =
console.log(...others);
const joint = [...others, ...restaurant.mainMenu , ...{restaurant}]
console.log(...joint);


// these can be helpful when i need to work with APIs and get data 
// restaurant.bookingTable({
//   time: '15: 00',
//   mainIndex : 0,
//   starterIndex : 3,
//   location : 'center burger'
// });


// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'guzar kashkadarya',
//   mainIndex: 2,
//   starterIndex: 1
// })


//         THESE ARE ARRAY DESTRUCTURING
// const arr = [1, 2, 4]
// let [a , c] = arr
//  console.log(a, c);

// const [first, , , second] = restaurant.categories
// console.log(first , second);

// let [a , b] = restaurant.order(2,0)
// console.log(a ,b);

//          THESE ARE OBJECT DESTRUCTURING 
// let {
//   name,
//   openingHours,
//   categories
// } = restaurant
// console.log(name, openingHours, categories);

// store default values
// const {
//   menu = [], starterMenu: starters = []
// } = restaurant;
// console.log(menu, starters);

//mutating 
// let a = 12;
// let b = 122
// const obj = {a : 11, b: 13, c:15};
// ({a, b} = obj)
// console.log(a, b);

//NESTED OBJECTS 
// const {
//   fri:{open : o, close : c}
// } = openingHours
// console.log(o, c);

// //SPREAD OPERATOR 
// const jointMenu = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(jointMenu);

// //with iterables, strings, and other
// const n = 'jonas'
// const spreaded = [...n , 'S.'];
// console.log(spreaded); // array j o n a s
// console.log(...n); // j o n a s


//real world example
// const ingredient = [prompt(`lets choose the first ingredient`), prompt('second ingredient?'), prompt('the third?')]
// restaurant.orderPizza(...ingredient)


// const newRest = {funder:'michael corleone', ...restaurant, openedYear : 2012}
// console.log(newRest);