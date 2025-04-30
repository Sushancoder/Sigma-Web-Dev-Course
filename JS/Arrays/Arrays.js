// Arrays are variables which can hold more than one value 
// Type of array is object 
let my_array = ['Ram', 'Shyam', 'Mahesh']
console.log(typeof my_array)

// Arrays can hold different types of values 
let type_array = [34, 'Shyam', true]

// Accessing items from array
console.log(my_array[0]) //output: Ram
console.log(my_array[1]) //output: Shyam
console.log(my_array[2]) //output: Mahesh

// Finding length
console.log(my_array.length)

// Changing the value 
let val_ar = [9, 11, 26, 14]
console.log(val_ar)
val_ar[3] = 11
console.log(val_ar)


// Methods in Array

// toString() : Converts an array to a string of comma separated values
let toString_array = [34, 43, 766]
newstrary = toString_array.toString()
console.log(newstrary)

// join() : Joins all the array items using a separator(here - is the separator)
let join_ary = ['Harsh', 43, 766]
new_join = join_ary.join('-')
console.log(new_join)

// pop(): Removes the last element of the array 
let pop_ary = ['Harsh', 43, 766]
new_pop = pop_ary.pop()
console.log(pop_ary)

// push(): Adds a new element to the end of the array
let push_ary = ['Harsh', 43, 766]
new_push = push_ary.push(987)
console.log(push_ary)

// shift(): Removes the first element of the array and returns it
let shift_ary = ['Harsh', 43, 766]
new_shift = shift_ary.shift()
console.log(shift_ary)

// unshift(): Adds an element to the start of the array 
let unshift_ary = ['Harsh', 43, 766]
new_unshift = unshift_ary.unshift('The')
console.log(unshift_ary)

// delete: it is an operator which deletes any element in the array 
let delete_ary = ['Harsh', 43, 766]
delete delete_ary[1]
console.log(delete_ary)

// concat(): used to join array to the given array 
let co_ary1 = [1, 2, 3]
let co_ary2 = [4, 5, 6]
let co_ary3 = [7, 8, 9]
co_ary = co_ary1.concat(co_ary2, co_ary3)
console.log(co_ary)

// sort(): sorts the array numerically and alphabetically
let sort_ary = ['Ranveer', 9, 7, 'Mahesh',86, 'Alia']
new_sort = sort_ary.sort()
console.log(sort_ary) 

// splice(): to add new Elements(one or multiple) to the array by specifying the required
//
//  Index where the   | No. of    | Elements to be 
//  item              | items to  | added to the 
//  will be placed    | remove    | array.
//       ^---------------<   ^    ^  ^
// new_sp = sp_ary.splice(1, 1, 232, 76)
let sp_ary = [42, 869, 56]
new_sp = sp_ary.splice(1, 1, 232, 76)
console.log(sp_ary)

// slice(): slices an element from the array, It creates a new array
let slice_nums = [1, 2, 3, 4, 5]
console.log(slice_nums.slice(2)) //output: slices the elements after index 2
console.log(slice_nums.slice(1, 3)) //output: slices the elements from index 1 to 3

// reverse(): reverses the elements in the source array
let rev_ary = ['Harsh', 43, 766]
new_rev = rev_ary.reverse()
console.log(rev_ary)


// From: creates an array of any given item mainly used in HTML files.
// here we w'll use it in strings
string = 'Hello World'
ar_str = Array.from(string)
console.log(ar_str)




// Exercises

// Q1:Invoke it in a html statement
let inp_array = [35, 34, 65, 223, 54]

new_inp = prompt("Enter the next data you want to put in the array.")
inp_array.push(inp_array)

// Q2
let div_array = [20, 45, 23, 40, 56, 60]

function ten_filter(a){
    return (a % 10) == 0
}

new_div = div_array.filter(ten_filter)
console.log(new_div)


