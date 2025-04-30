// Access elements using classes
let boxes = document.getElementsByClassName('box') // to access all the elements with the class ".box"
console.log(boxes)
boxes[2].style.backgroundColor = 'red'
// or you can use 
// document.getElementsByClassName('box').style.backgroundColor = 'red'
 
// Access elements by id 
document.getElementById('redme').style.backgroundColor = "green"

// Accessing elements using query selector
document.querySelector('.box').style.backgroundColor = "blue" //Returns the first element that is a descendant of node that matches selectors.

// document.querySelectorAll('.box').style.backgroundColor = "blue" // to select all the elements with the specific query, it returns a collection of html elements(in form of array)
// The above code won't work because queryselctorAll returns an array of items ,So you can use loops to put some specic property to these elements 
// Here we use the foreach loop , you can use even the simple loop 
document.querySelectorAll('.box').forEach(e =>{
e.style.backgroundColor = 'aqua'
})

// Accessing elements using tag 
document.getElementsByTagName('div') // it returns a node list which contains all the elements with div tag



// Some special properties
// Matches
elmd = document.getElementsByTagName("div")
elmd[2].matches('#redme') // it will return true if the element has the given CSS selector and false if not

// Closest
elmd = document.getElementsByTagName("div")
elmd[2].matches('.boxes') //  it looks for the nearest ancestor that matches the given CSS selector. here it return the parent element as it is the ancestor of elem
elmd[3].matches('#redme') // itr return false as #redme is not present in any of it's ancestor

// Contains : checks if an element is present withing an element
elmd = document.getElementsByTagName("div")
document.querySelector('.boxes').contains(elmd[2]) // it will return true as it the element with boxes class contain elem[2]
document.body.contains(document.querySelector('.boxes')) // return true as body contain .boxes elements
document.querySelector('.boxes').contains(document.body) // returns false as .boxes element does not contain the body


// Exercises
// Q1
let box1= document.querySelector('.box')
box1.style.backgroundColor = "green"

// Q2
let grboxes = document.querySelectorAll('.box')
grboxes[0].style.backgroundColor = "green"
grboxes[4].style.backgroundColor = "green"


// Q3
let litag = document.querySelectorAll('.litags')
litag.forEach(element => {
    element.style.backgroundColor = 'blue'
});

