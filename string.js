// const airline = 'Tap Air Portugal'
// const plane = 'A320'

// console.log(airline[2]) //it works the same as arrays
// console.log(airline.length); // to find the the length of a string
// console.log(airline.indexOf('a')); // to find the index number of a string
// console.log(plane.charAt(1)); // to find the character at certain index
// console.log(airline.slice(4 , 7))  //output : Air

//example.io
// function checker(seat) {
//     let s = seat.slice(-1)
//     if (s === 'b') {
//         console.log('sorry for you');
//     } else if (s === 'a') {
//         console.log('not that bad');
//     } else {
//         console.log('cool');
//     }
// }
// checker('11a')
// checker('22b')
// checker('33e')

// const names = 'kuvonchbek'
// const sec = names[0].toUpperCase() + names.slice(1, names.lastIndexOf()) + names.slice(-1).toUpperCase();
// console.log(sec);


// //REPLACE METHOD  ==> only works for the first occurance
// const priceUz = '220soum'
// const priceUS = priceUz.replace('soum' , '$').replace('220', 220/1000)
// console.log(priceUS);
// //replaceAll METHOD
// const str = 'hello my name is Jim and Jim is given to me by my mother'
// console.log(str.replaceAll('Jim', 'Kuvochbek')) // IT WORKS FOR ALL OCCURANCES

// //CHECK MY NAME 
// let names = 'Kuvochbek'
// if (names.startsWith('K') && names.endsWith('k')){
//     console.log(`your name is ${names}`);
// }


//practice exercise 
// const checkBaggage = function(item){
//     const baggage = item.toLowerCase();
//     if(baggage.includes('laptop') ||  baggage.includes('books')){
//         console.log('not allowed to enter');
//     }else{
//         console.log('welcom aboard');
//     }
// }

// checkBaggage('I have some books and a Laptop')
// checkBaggage('I have some finkes and a cahyt')
// checkBaggage('I went to the Ceatre with my GirlFriend and a Laptop')


// capitilize name using split and join 
// const capitalizeName = function(name){
//     const names = name.split(' ')
//     const fullName = []

    // for (let name of names){
        // const newName = name[0].toUpperCase() + name.slice(1);
        // fullName.push(newName);
    // }
    // 
    // console.log(fullName.join(' '));
// 
// }
// capitalizeName('johongir polatov');
// capitalizeName('abror muhtor ali')



//padStr 
const padd = 'kholmatov khusan'
console.log(padd.padEnd(24, "="));
console.log(padd.padEnd(24, "=").padStart(33, '++'));
//exercise
const maskCard = function(num){
    const a = num.slice(-4)
    const last = a.padStart(14, '*')   
    return last;
}
console.log(maskCard('860001220034004'));
console.log(maskCard('860342653424223'));

