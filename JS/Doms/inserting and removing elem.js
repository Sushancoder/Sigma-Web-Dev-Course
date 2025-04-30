// DOM For html and text content:
document.querySelector('.box').innerHTML // to access the inner html of an element
document.querySelector('.box').innerText // to access the text of an html element (ony text)
document.querySelector('.box').outerHTML // to access the inner html and it's own html of an element(like if a is inside b then both a and b will be returned.)

document.querySelector('.boxes').tagName // to get the name of the tag in which the property is being applied
document.querySelector('.boxes').nodeName // to get the name of the node in which the property is being applied ( it return node which means comment and text which  are nodes will abso be accessed by this property)
document.querySelector('.boxes').textContent // to get only the text content in the element 
document.querySelector('.boxes').hidden // to check if the element is hidden or not

// You can change the content of the all properties as shown below
// document.querySelector('.box').innerHTML = "New innerHTML content";
// document.querySelector('.box').innerText = "New innerText content";
// document.querySelector('.box').outerHTML = "<div class='new-box'>New outerHTML content</div>";

// document.querySelector('.boxes').tagName = "newTagName";
// document.querySelector('.boxes').nodeName = "newNodeName";
// document.querySelector('.boxes').textContent = "New textContent";
// document.querySelector('.boxes').hidden = true;

// For attributes 
document.querySelector('.boxes').hasAttribute('style') // to check if the element has the given attribute
document.querySelector('.boxes').attributes // to get all the attributes of an element
document.querySelector('.boxes').setAttribute('style', 'background-color: red;') // to change the attribute of an element
document.querySelector('.boxes').removeAttribute('style') // to remove the attribute of an element



// Design mode 
document.designMode = 'on' //Design mode is used to edit the content of the web page without using code

// Data attribute :In HTML, the data-* attribute is a way to store custom data within an HTML element. It allows you to add extra information or metadata to an element that is not interpreted by the browser but can be accessed and manipulated using JavaScript or CSS. The data-* attribute consists of a prefix "data-" followed by a custom name that you define. For example, data-name, data-age, or data-color. Here's an example of how to use the data-* attribute:
// EX:
// <li class="litags" data-createdby="Mhan" data-ideaby = "Shan">I am LI.</li> 
// output: {createdby: 'Mhan conceptby: 'Shan'}



// Insertion of elements:


// Appending an element in an element :

let div = document.createElement("div") // IT creates an element which is <div></div>
div.innerHTML = "This is a html element." // It inserts the html content output: <div>This is a html element.</div>
div.setAttribute("class", "created") // It inserts the attribute in the element output: <div class="created">This is a html element.</div>
document.querySelector(".boxes").append(div) // It appends the element to the﻿ given element output:
{/* <div class="boxes">
<div class="box">We are boxes.</div>
...
<div class="created">This is a html element.</div>
</div> */}

// Some commonly used insertion methods are as shown below: 
let divins = document.querySelector(".boxes")
divins.append(div) // to add an element in another element at that end of the element
divins.prepend(div)  // to add an element in another element at that start of the element
divins.before(div) // to add an element before/above another element
divins.after(div) // to add an element after/below another element
divins.repalaceWith(div) // to replace the given element with another element

// InseradjacentHTML/text/element
let adjelem = document.querySelector(".boxes")
adjelem.insertAdjacentHTML('afterbegin', '<div class="created">This is a html element.</div>') // to add an element in another element at that start of the element
adjelem.insertAdjacentHTML('beforebegin', '<div class="created">This is a html element.</div>') //  to add an element before/above another element
adjelem.insertAdjacentHTML('beforeend', '<div class="created">This is a html element.</div>') //  to add an element in another element at that end of the element
adjelem.insertAdjacentHTML('beforebegin', '<div class="created">This is a html element.</div>') //  to add an element after/below another element

// Node removal
document.querySelector(".box") // it removes the first element with .box class

// For classes
document.querySelector(".boxes").classList // to get all the classes of an element
document.querySelector(".boxes").className // to get all the classes of an element as value in a single string
document.querySelector(".boxes").classList.add("newclass") // to add a new class
document.querySelector(".boxes").classList.remove("newclass") // to remove a class
// Note: If you add a class multiple times then it will not get added multiple times and will be added only once
document.querySelector(".boxes").classList.toggle("newclass") // Toggle means to switch between two options, usually by pressing a button or using a key combination. For example, you can toggle the sound on a computer off and on.
// So if the system is on then toggle means off and vice verca



// HTml for all this 
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         .box {
//             height: 40px;
//             width: 50px;
//             padding: 5px;
//             border: 2px solid black;
//             margin: 5px;
//         }

//         .boxes {
//             display: flex;
//             background-color: cyan;
//         }
//     </style>
// </head>

// <body>
//     <div class="boxes">
//         <div class="box">We are boxes.</div>
//         <div class="box" id="redme">We are boxes.</div>
//         <div class="box">We are boxes.</div>
//         <div class="box" name="gbox">We are boxes.</div>
//         <div class="box">We are boxes.</div>
//     </div>
// <ul>
//     <li class="litags">I am LI.</li>
//     <li class="litags">I am LI.</li>
//     <li class="litags" data-createdby="Shan">I am LI.</li>
//     <li class="litags">I am LI.</li>
//     <li class="litags">I am LI.</li>
// </ul>

//     <script src="Test.js"></script>
// </body>

// </html>