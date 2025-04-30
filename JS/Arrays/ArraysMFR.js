// Map, fiter and reduce

// Map : Creates a new array by performing some operation/function on each element of the intial array
console.log('\n Map: \n')
let ary = [1, 2, 8, 3, 12, 45, 6]

// Let's say we want to find the square of the elements in an array

// This is an overwhelming and long method to loop it
let sqary = []
for (let index = 0; index < ary.length; index++) {
    const element = ary[index];
    sqary.push(element**2)
}
console.log(sqary)

// So, here we use the map method we will get the same result as above
// also here you can put element , index and array or only element if required
new_ary = ary.map((element, array )=>{return element**2})
console.log(new_ary, ary)

// Filter: It is like a filter which passes the elements if it passes a certain criteria
console.log('\n Filter: \n')
let arry = [1, 2, 8, 3, 12, 45, 6]

function Greater_than_5(num) {
    return num>5
}
filtered_arry = arry.filter(Greater_than_5)
console.log(filtered_arry)
// Using arrow funcion
// filtered_arry = arry.filter((num=>num>5))

// Reduce :Reduces an array to a single value
console.log('\n Reduce: \n')
function mult(a, b) {
    return a * b
}

multarry = arry.reduce(mult)
console.log(multarry)