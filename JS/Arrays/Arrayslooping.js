// Looping through arrays
ary = [1, 34, 3, 84, 55, 6];

// Using for loops: You can access all elements
console.log('\n For loops: \n')
for (let index = 0; index < ary.length; index++) {
    const element = ary[index];
    console.log(element);
}

// for each loops: to get the elements, index and value
// You can print all of these or any one of these if required
console.log('\n For-each loops: \n')
ary.forEach((element, index , ary) => {
   console.log(element,'  ',index, '  ', ary); 
});

// for in loops: to get the value or keys in objects in js
console.log('\n For-in loops: \n')
const obj = {
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}

// for-of loops: used to get all the elements of an array in js
console.log('\n For-of loops: \n')
for (const iterator of ary) {
    console.log(iterator);
}

