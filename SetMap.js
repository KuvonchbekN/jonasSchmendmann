//SETS 
// Sets can be used when I need unique values
/*1.we cannot get the element from Set array that is because it does not have index numbers actually     but we can get them by storing them into an array using for loop like this -->
2. since sets are iterables, we can loop over them with 'for' loop
3. we can use the 'spread' operator with Sets
*/

// const orderSet = new Set(['bread', 'cucumber', 'carrot', 'onion', 'carrot'])
// orderSet.clear()
// orderSet.add('carrot')

// let arr = []
// for (let order of orderSet) {
//     arr.push(order)
// }
// console.log(arr)// sets doesn't show the duplicated codes in console.log
// find the unidentical letters in my name


// //MAPS 
// /*
// 1.maps are much like sets with its methods 
// 2. we can store things using maps
// how to create maps first and then store it to the variable , after that we push(add) some elements inside of that map like objects 
// */

// // const rest = new Map();
// // console.log(rest.set(2, 'somsa'))

// // rest.set('categories', ['italiano', 'pizzeria', 'vegetarian', 'organic']).set('open', 11).set('close', 23).set(true, 'we are open').set(false, 'we are close').set(document.querySelector('h1'), 'heading')
// // console.log(rest.get('close')) //write the first one and get the result in the brackets 

// //this way we can store
// // let a = [1,2 ]
// rest.set(a , 'test')
// console.log(rest.get(a))



//example 
// const question = new Map([
//     ['question', 'what is the best programming language in the world?'],
//     [1, 'pyhton'],
//     [2, 'javascript'],
//     [3, 'C#'],
//     [true, 'correct!'],
//     [false, 'incorrect, try again']
// ])

// console.log(question.get('question'));
// for (const[key, value] of question){
//     if(typeof key == 'number'){
//         console.log(`answer ${key} is ${value}`)
//     }
// }


//CONVERT MAP TO ARRAY
// const arr = [...question].map(([key, value])=>{
//     console.log(`${key} : ${value}`);
// })



//LITTLE QUIZ FOR PRACTICE
// let answer = prompt('your asnwer');
// if (answer >=1 && answer <=3){
//     if (answer ==2 ){
//         console.log(question.get(true));
//     }else{
//         console.log(question.get(false));
//     }
// }else{
//     alert('you should have chosen one of the given answers in the console');
// }

//convert object to map
// const hoursMap = new Map(Object.entries(openingHours)) //opening hours is object
// console.log(hoursMap)

const c = new Map()
c.set('name', 'husan').set('age', 21).set('birthYear', 2001)
console.log(c.keys(), c.values());

