// For loops

// Syntax:
//  It is used to as-   |It sets the limit to  |It is the increament operator
//  sign the first index|number of times the   |which increases the 
//  which is 0 here.    |the code will execute.|value of index 1.
//             ^                  ^                ^
// for (let index = 0; index < array.length; index++) {
//     const element = array[index]; ----------------> It is used to assign the index of array to a variable to be used.

// }
console.log('\n For loops: \n')

// To print the first 10 digits from 0-9
for (let i = 0; i < 10; i++) {
    console.log(i)
}

// To print the items in an array
let Fruits = ['Apple', 'Banana', 'Pear', 'Mango', 'Guava']
for (let i = 0; i < Fruits.length; i++) {
    const fruit = Fruits[i];
    console.log(fruit)
}

console.log('\n For in loops \n')

// For in loops
// Syntax:
//      to specify the key
//      in the object as 
//      shown below
//             ^
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
console.log('\n')

const wonders = {
    Suresh : 401,
    Mahesh : 134,
    Kalpesh : 2010
}
for (const key in wonders) {
    console.log(key, ':', wonders[key])
}

let ar1 = ['item1', 'item2', 'item3', 'item4']
for (const i in ar1) {
        console.log(i + ': ' + ar1[i])
    }


// For of loops
// It is used to access the elements of an array or a string as shown below
// Syntax:     
//          refers to the 
//          elements of 
//          the object
//               ^
// for (const iterator of object) {
        // command to be executed
// }
console.log('\n For of loops \n')

// Accessing the items of an array
let ar2 = ['item1', 'item2', 'item3', 'item4']
for (const i of ar2) {
    console.log(i)
}

// Accessing the characters of a string
let ram = 'Radheradhe'
for (const i of ram) {
    console.log(i)
}

// You can also do the same thing with simple for loops but it's complicating as shown below

let array = ['sinha', 'mukesh', 'suresh']
let str = 'Mukesh Sinha'

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element)
}

for (let i = 0; i < str.length; i++) {
    const element = str[i];
    console.log(element)
}




// While Loops: It is used to do a specific task until the condition for while loop meets
// Syntax:
// while (condition) {
    
// }
console.log('\n \n While Loops: \n')

let num = 1         
while (num<10) {  // ---> Specifies the condition which is if true the iteration will occur else if the condition is false the iteration will not occur
    console.log(num)
    num++            //---> Increases the value by one after every iteration
}

// To print the table of 5
let five = 5
let mult = 1
while (mult<11) {
    console.log('5 X '+ mult +' = '+five*mult)
    mult += 1
}

// Do while loop : It is a bit different from the while loop because the iteration is occured before the checking of the condition and the iteration always occurs at least one time as shown below
// Syntax
// do {
    // } while (condition);
console.log('\n While Loops \n')
donum = 1

// here the code is iterating at least one time 
do {
    console.log('I am in do while loop')
} while (donum>10);

// Whereas in while loop the code dosen't even run for one time
while (donum>10) {
    console.log('I am in do while loop')
}


// For-each loops
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number, index) {
  console.log(`Element at index ${index}: ${number}`);
});

// Exercise
// Q1
const obj1 = {
    Harry: 98,
    Rohan: 70,
    Aakash: 7
    }

let keys = Object.keys(obj1);

for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const element = obj1[key];
    console.log(`The marks of ${key} is ${element}.`);
}

// Q2
// const obj1 = {
//     Harry : 98,
//     Rohan: 70,
//     Aakash: 7
//     }

for (const key in obj1) {
        console.log(`The marks of ${key} is ${obj1[key]}.`)
}

// Q3
// Use it in html document
renum = prompt('Enter the required number:')

while (renum!='Bhupendra') {
    console.log('Try again')
    alert('Try again')
    renum = prompt('Enter the required number:')
}

// Q3

meannums = [33, 65, 64, 93, 12]

function sumn(a, b) {
    return a + b
}
sumofns = meannums.reduce(sumn)
mean = sumofns / meannums.length
console.log(mean)