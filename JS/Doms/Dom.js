// Dom is used in html node

document.body // to get the content of the body
document.body.childNodes // to get the child nodes of an element(here: body)
document.body.childNodes[1] // to get the specific child nodes of an element(here: body) using index
document.body.childNodes[1].childNodes // to get the child node of that specific child nodes of an element(here: body) using index
const cdbody = document.body.childNodes[1].childNodes // you can even assign the dom to a variable
// output:  NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text] it returns text because the first node is text which is the indent or the space between two elements, which can be removed.
// if your html contains comment then output: NodeList(13) [text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text] it returns all nodes including comment

document.body.childNodes.firstchild // to get the first child node of an element(remember: it will return text because the first node is text which is the indent or the space between two elements, which can be removed) 
document.body.childNodes.lastchild // to get the last child node of an element
document.body.childNodes.lastchild // to get the last child node of an element
document.body.childNodes[1].children[2].nextSibling // to get the next node sibling of an elemenzt
document.body.childNodes[1].children[2].previousSibling // to get the previous node sibling of an element
document.body.childNodes.length // to get the length of the child nodes of an element


document.body.children // To get all the element of an element(remember: it will only return all the elements not all nodes which was being done in above codes)
document.body.children[0] // to get the specific element of an element using index
document.body.firstElementChild // to get the first element child of an element (remember: it will return the first element not the first node)
document.body.lastElementChild // to get the last element child of an element
cdbody.parentelement // to get the parent element of an element

document.body.children[0].nextElementSibling // to get the next element sibling of an element
document.body.children[0].previousElementSibling // to get the previous element sibling of an element


cdbody.style.color = "red" // style is used to access the css of an element(here: we change the color of the body to red) this can even be done without adding the style tag but it a better approach to add the style tag as it has more control.
// In JavaScript, you can't set styles directly on a NodeList. You need to iterate over the NodeList and set the style on each individual element.

// Table links in Dom 
document.body.children[1] // to get the table (here: table is at index 1)
document.body.children[1].rows // to get all the rows(tr elements) of the table
document.body.children[1].caption // reference to <caption> of table
document.body.children[1].thead // reference to <thead> of table
document.body.children[1].tfoot // reference to <tfoot> of table
document.body.children[1].tbodies // reference to <tbody> of table

tbody.rows // to get all the rows(tr elements) of the table

tr.cells // to get the collection of td and th elements
tr.sectionrowindex //to get the index of tr inside the enclosing element
tr.rowindex //to get the row number which starts from 0

td.cellindex // no. of cells inside enclosing <tr> tag


// Exercises:

// Q1

age = prompt("Enter your age:");

if (age > 18) {
  alert("You can drive.");
} else if (age == 18) {
  alert("You still need some time");
} else if (age < 1) {
  console.error("Wrong data.");
}

// Q2

alert("Hey , how are you.");

let conf = confirm("Do you want to see again the alert.");
if (conf == true) {
  alert("Hey , how are you.");
}

// Q3
age = prompt("Enter your age:");
if (age<4) {
    window.location.href = "https://www.google.com";
}
else{
    console.log('OK , You are safe!')
}

// Q4
let coinp = (prompt('Enter the name of your desired color:'))
document.body.style.backgroundColor  = coinp