// const outerFunc = function () {
//     let p = 2;

//     return (b)=>{
//        return console.log(p+b);
//     }
// }
// const innerFunc = outerFunc()
// innerFunc(2);
// innerFunc(3);
// innerFunc(12);


// let f;
// const p = function(){
//     let a = 2;
//     f = function(){
//         console.log(a * 2);
//     }
// }
// //re-assigning f function for the second time
// const t = function(){
//     let b = 111;
//     f = function(){
//         console.log(b * 4);
//     }
// }

// p();
// f();
// t();
// f();

// //example 2
// const perGroup = 1000;
// const boardPassangers = function(n, wait){
//     const perGroup = n/ 3;

//     setTimeout(() => {
//         console.log(`we are now boarding all ${n} passangers`);
//         console.log(`There are three groups and, each with ${perGroup} passangers`);
//     }, wait * 1000);
//     console.log(`the boarding will start in ${wait} seconds`);
// }
// boardPassangers(180, 3)


// -----coding challenge of closures
// This is more of a thinking challenge than a coding challenge �
// Your tasks:
// 1. Take the IIFE below and at the end of the function, attach an event listener that 
// changes the color of the selected h1 element ('header') to blue, each time 
// the body element is clicked. Do not select the h1 element again!
// 2. And now explain to yourself (or someone around you) why this worked! Take all 
// the time you need. Think about when exactly the callback function is executed, 
// and what that means for the variables involved in this example.

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.body.addEventListener('click', function () {
        header.style.color = 'blue';
    })
})();