// -----------------  DATA STRUCTURES -> CHALLENGE 3
// const gameEvents = new Map([
//     [17, '⚽ GOAL'],
//     [36, '� Substitution'],
//     [47, '⚽ GOAL'],
//     [61, '� Substitution'],
//     [64, '� Yellow card'],
//     [69, '� Red card'],
//     [70, '� Substitution'],
//     [72, '� Substitution'],
//     [76, '⚽ GOAL'],
//     [80, '⚽ GOAL'],
//     [92, '� Yellow card'],
// ])

// 1. Create an array 'events' of the different game events that happened(no duplicates)

// const unrep = gameEvents.values()
// const select = new Set(unrep)
// console.log(select);

// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair.So remove this event from the game events log.

// gameEvents.delete(64)
// console.log(gameEvents);

// 3. Compute and log the following string to the console: "An event happened, on 
// average, every 9 minutes " (keep in mind that a game has 90 minutes)

// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);


// 4. Loop over 'gameEvents'
// and log each element to the console, marking
// whether it 's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽GOAL

// for (const [key, value] of gameEvents) {
//     if (key <= 45) {
//         console.log(`[FIRST HALF] ${key}: ${value}`);
//     } else {
//         console.log(`[SECOND HALF] ${key}: ${value}`);
//     }
// }



// -----------------  DATA STRUCTURES -> CHALLENGE 4
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// const inputArea = document.querySelector('textarea')
// const btn = document.querySelector('button');


// btn.textContent = 'Add'

// function addingInput() {
//     const input = inputArea.value;
//     const shape = input.trim().toLowerCase();
//     const changed = shape.split('_')

//     const c = changed[0].toLowerCase();
//     const camel = changed[1][0].toUpperCase() + changed[1].slice(1);
//     console.log(c.concat(camel));
// }
// btn.addEventListener('click', addingInput)








