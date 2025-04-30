// if in js
age = 7;
if (age>18) {
    console.log('You can vote')
}

// if-else in js
if (age>18) {
    console.log('You can drive.')
} else {
    console.log('You cannot drive.')   
}

// if-else-else if in js
if (age>18) {
    console.log('You can drive.')
}
else if  (age==17){
    consoel.log('You still need some time.')
}
else if (age<10 && age > 1) {
    console.log('You are too young to drive.')   
}
else {
    console.log('Invalid age!')
}

// Ternary operator in js (a shorthand for if-else)
marks = 19
(marks < 10) ? 'You failed':'You passed';