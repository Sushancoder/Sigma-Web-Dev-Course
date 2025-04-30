// 1. 

// const students = ['John', 'Jane', 'Jim', 'Sally', 'Sam', 'Jamal', 'Tulsi', 'Sue', 'Steve', 'Sarah', 'Michael', 'David', 'Maria', 'Chris', 'Jessica', 'Melissa', 'Amanda', 'Brenda', 'Laura', 'Lisa', 'Nancy', 'Karen', 'Betty', 'Margaret', 'Barbara', 'Ralph', 'Heather', 'Gary', 'Nicole', 'Tanya', 'Tony'];

// let gryffindor = [];
// let hufflepuff = [];
// let ravenclaw = [];
// let slytherin = [];

// students.forEach(element => {

//     if (element.length < 6) {
//         gryffindor.push(element)
//     }
//     else if (element.length < 8) {
//         hufflepuff.push(element)
//     }
//     else if (element.length < 12) {
//         ravenclaw.push(element)
//     }
//     else {
//         slytherin.push(element)
//     }
// });

// console.log(gryffindor);
// console.log(hufflepuff);
// console.log(ravenclaw);
// console.log(slytherin);




// 2.

// let allInts = [4, 17, 82, 61, 91, 13, 46, 46, 28, 55, 67, 19, 85, 31, 48, 72, 53, 11, 96, 39, 69, 51, 87, 87, 25, 63, 44, 79, 56, 38, 94, 22, 65, 15, 88, 42, 70, 59, 36, 99, 18, 62, 75, 33, 58, 90, 45, 81, 27, 27, 54, 49, 84, 35, 98, 24, 71, 60, 92, 14, 77, 52, 41, 97];

// let newints = allInts.map((element, index) => {
//     if (element != allInts[(index + 1)]) {
//         return element * 2;
//     }
//     else {
//         return element
//     }
// })

// console.log(newints);



// 3.

// let str = "Alpha"

// let nor_arr = str.split('')  // Turning into an array
// let rev_arr = nor_arr.reverse() // Reversing the turned array
// let rev_str = rev_arr.join('') // Joining the reversed array into a string

// let new_str = str.concat(rev_str) // Concatenating the string with the reversed string
// console.log(new_str);



// 4.

// // Another way: Using charCodeAt() but it is lengthy

// let password = "fkjasdkljt789r;nvio";

// if(password.length < 8){
//     console.log("\nPassword must be at least 8 characters long")
// }
// if(password.toLowerCase() == password){
//     console.log("\nPassword must contain at least one uppercase letter")
// }
// if(password.toUpperCase() == password){
//     console.log("\nPassword must contain at least one lowercase letter")
// }
// for (let index = 0; index < password.length; index++) {
//     if(parseInt(password[index])){
//        var count = true;
//     }
// }

// if (!count) console.log("password must contain at least one number\n");



// 5.

// let ary = [12, 45, 78, 23, 67, 89, 34, 56, 90, 21];

// function sum_arr(array) {
//     let sum = 0;
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         if(element>0){
//             sum += element
//         }
//         else{
//             break;
//         }
//     }
//     return sum;
// }
// console.log(sum_arr(ary));



// 6.(Works in browser)

// const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
// let word = prompt("Enter a string to find the occurences of vowels in it: "); 

// function isVowel(word) {
//     let occurences = 0;
//     for (const key in word) {
//         if (vowels.includes(word[key])) {
//             occurences += 1;
//         }}
//     return occurences;
// };

// alert(isVowel(word));



// 7.(Works in browser)

// let whole_body = document.querySelector("body");
// whole_body.innerHTML = `<style>
//         * {
//             padding: 0;
//             margin: 0;
//         }

//         body {
//             background-color: bisque;
//         }

//         h1 {
//             text-align: center;
//             background-color: chartreuse;
//             padding: 10px;
//             width: 100vw;
//             position: fixed;
//         }

//         .addnote {
//             background-color: yellow;
//             position: fixed;
//             top: 5px;
//             left: 5px;
//             border-radius: 5px;
//             font-size: 25px;
//         }
//         .addnote:hover{
//             background-color: gray;
//         }
//         .addnote:active{
//             background-color: chartreuse;

//         }
//         .noteadd{
//             display: flex;
//             margin: 5px;
//         }

//         .main {
//             padding-top: 60px;
//         }

//         .title {
//             font-size: 30px;
//             padding: 15px;
//             padding-left: 10vw;
//         }

//         .separator {
//             width: 30vw;
//             height: 4px;
//             background-color: chartreuse;
//             margin-left: 2vw;
//         }

//         .notes {
//             display: flex;
//             flex-direction: column;
//             flex-wrap: wrap;
//             width: 29vw;
//             background-color: chartreuse;
//             margin-left: 2vw;
//             margin-top: 10px;
//             padding: 10px;
//             border-radius: 10px;
//             min-height: 75vh;
//         }
//         .note{
//             background-color: yellow;
//             padding: 10px;
//             border-radius: 10px;
//             width: 25vw;
//             margin-left: 10px;
//             height: 100px;
//             margin-top: 10px;
//             overflow: scroll;
//         }
//         .delete{
//             background-color: red;
//             padding: 10px;
//             border-radius: 10px;
//             width: 25vw;
//             margin-left: 15px;
//             margin-top: 10px;
//         }
//         .delete:active{
//             background-color: rgb(160, 47, 41);
//         }
//     </style>


//     <h1>Note Keeper</h1>
//     <div class="main">
//         <h2 class="title">Take Note</h2>
//         <hr class="separator">
//         <div class="notes">
//             <button class="delete">Delete First (Designing it was boring)</button>

//         </div>
//     </div>
//     <button class="addnote">
//         <div class="noteadd">Add Note &nbsp;
//             <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="black">
//                 <path
//                     d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q32 0 62-6t58-17l60 61q-41 20-86 31t-94 11Zm280-80v-120H640v-80h120v-120h80v120h120v80H840v120h-80ZM424-296 254-466l56-56 114 114 400-401 56 56-456 457Z" />
//             </svg>
//         </div>
//     </button>`

// function addnote(note) {
//     let notediv = document.createElement("div"); // creating a div element
//     notediv.classList.add("note");
//     notediv.innerHTML = `${note}` // adding note into the div element
//     let allnotes = document.querySelector(".notes")
//     allnotes.append(notediv) // appending the div element to the notes
// };

// if (localStorage.getItem("note")) { // checking if there is something in local storage with key "note"
//     let thenote = JSON.parse(localStorage.getItem("note"))  // parsing the string into an object
//     for (const key in thenote) {  // loop through the object and add the notes
//         let note = thenote[key];
//         addnote(note)
//     }

// }

// document.querySelector(".addnote").addEventListener("click", () => {
//     let note = prompt("Enter your note");
//     addnote(note)

//     if (localStorage.getItem("note")) {
//         let thenote = JSON.parse(localStorage.getItem("note"))
//         let notelen = Object.values(thenote).length; // this is how we can get the length of an object
//         thenote[`note${notelen}`] = note;
//         localStorage.setItem("note", (JSON.stringify(thenote)))
//     }
//     else {
//         let mynote = { note: note }
//         localStorage.setItem("note", (JSON.stringify(mynote)))
//     }

// })

// document.querySelector(".delete").addEventListener("click", () => {
//     if (localStorage.getItem("note")) {
//         let delete_elem = document.querySelector(".note");
//         delete_elem.outerHTML = " ";
//         let thenote = JSON.parse(localStorage.getItem("note"))
//         let firstEntry = Object.entries(thenote)[0];  // this is how we can get the first entry of an object
//         console.log(firstEntry[0]); // this is how we can get the key of the firstentry (specified above)
//         delete thenote[firstEntry[0]];
//         localStorage.setItem("note", (JSON.stringify(thenote)));
//     }
// })




// 8.

// let arr = [381, 570, 212, 808, 839, 846, 892, 543, 239, 326, 798, 671, 303, 377, 238, 380, 665, 432, 159, 18];
// let double_arr = [];

// async function prom(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(num * 2);
//         }, 500);
//     })
// };

// async function main(ary) {
//     for (let index = 0; index < ary.length; index++) {
//         let pro = await prom(ary[index]);
//             console.log(pro)
//             double_arr.push(pro)
//     }
//     console.log("\n\n<-------<-------<----------<--------<---------The array contain the following numbers------->------->--------->---------->--------->\n");
//     console.log(double_arr)
// }
// main(arr)



// 9.(Works in browser)

// let whole_body = document.querySelector("body");
// whole_body.innerHTML = `
//  <style>
//         * {
//             box-sizing: border-box;
//         }
    
//         body {
//             font-family: Arial, sans-serif;
//             margin: 0;
//             padding: 0;
//             background-color: #f5f5f5;
//         }
    
//         h1 {
//             text-align: center;
//             margin-bottom: 20px;
//             background-color: #4CAF50;
//             color: white;
//             padding: 20px;
//         }
    
//         .container {
//             width: 80%;
//             margin: 0 auto;
//             text-align: center;
//             padding: 20px;
//         }
    
//         .products {
//             display: flex;
//             flex-wrap: wrap;
//             justify-content: space-between;
//         }
    
//         .product {
//             width: 45%;
//             margin-bottom: 20px;
//             padding: 20px;
//             border: 1px solid #ccc;
//             border-radius: 10px;
//             background-color: white;
//         }
    
//         .product img {
//             width: 100%;
//         }
    
//         .product p {
//             font-size: 16px;
//             font-weight: bold;
//             margin-top: 10px;
//         }
    
//         button {
//             display: inline-block;
//             padding: 15px 25px;
//             font-size: 24px;
//             cursor: pointer;
//             text-align: center;
//             text-decoration: none;
//             outline: none;
//             color: #fff;
//             background-color: #04AA6D;
//             border: none;
//             border-radius: 15px;
//             box-shadow: 0 9px #999;
//         }
    
//         button:hover {
//             background-color: #3e8e41
//         }
    
//         button:active {
//             background-color: #3e8e41;
//             box-shadow: 0 5px #666;
//             transform: translateY(4px);
//         }
//     </style>
//     <div class="container">
//         <h1>Shopping</h1>
//         <div class="products">
//             <div class="product">
//                 <img src="https://picsum.photos/300/200" alt="Product Image">
//                 <p>Product 1</p>
//                 <button>Add to Cart</button>
//             </div>
//             <div class="product">
//                 <img src="https://picsum.photos/300/201" alt="Product Image">
//                 <p>Product 2</p>
//                 <button>Add to Cart</button>
//             </div>
//             <div class="product">
//                 <img src="https://picsum.photos/300/202" alt="Product Image">
//                 <p>Product 3</p>
//                 <button>Add to Cart</button>
//             </div>
//             <div class="product">
//                 <img src="https://picsum.photos/300/203" alt="Product Image">
//                 <p>Product 4</p>
//                 <button>Add to Cart</button>
//             </div>
//         </div>
//     </div>
//     <div class=loader></div>
// `

// let animation = `
//            <style>
//             .main {
//                 position: fixed;
//                 top: 0px;
//                 left: 0px;
//                 display: block;
//                 z-index: 1000;
//                 width: 100%;
//                 height: 100%;
//                 background-color: rgba(31, 29, 29, 0.482);
//             }
    
//             .cssload-tetrominos {
//                 position: fixed;
//                 top: 50vh;
//                 left: 50%;
//                 transform: translate(-109px, -94px);
//                 -o-transform: translate(-109px, -94px);
//                 -ms-transform: translate(-109px, -94px);
//                 -webkit-transform: translate(-109px, -94px);
//                 -moz-transform: translate(-109px, -94px);
//             }
    
//             .cssload-tetromino {
//                 width: 94px;
//                 height: 109px;
//                 position: fixed;
//                 transition: all ease 0.35s;
//                 -o-transition: all ease 0.35s;
//                 -ms-transition: all ease 0.35s;
//                 -webkit-transition: all ease 0.35s;
//                 -moz-transition: all ease 0.35s;
//                 background: url('data:image/svg+xml;utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 684"%3E%3Cpath fill="%23010101" d="M305.7 0L0 170.9v342.3L305.7 684 612 513.2V170.9L305.7 0z"/%3E%3Cpath fill="%23fff" d="M305.7 80.1l-233.6 131 233.6 131 234.2-131-234.2-131"/%3E%3C/svg%3E') no-repeat top center;
//             }
    
//             .cssload-box1 {
//                 animation: cssload-tetromino1 1.73s ease-out infinite;
//                 -o-animation: cssload-tetromino1 1.73s ease-out infinite;
//                 -ms-animation: cssload-tetromino1 1.73s ease-out infinite;
//                 -webkit-animation: cssload-tetromino1 1.73s ease-out infinite;
//                 -moz-animation: cssload-tetromino1 1.73s ease-out infinite;
//             }
    
//             .cssload-box2 {
//                 animation: cssload-tetromino2 1.73s ease-out infinite;
//                 -o-animation: cssload-tetromino2 1.73s ease-out infinite;
//                 -ms-animation: cssload-tetromino2 1.73s ease-out infinite;
//                 -webkit-animation: cssload-tetromino2 1.73s ease-out infinite;
//                 -moz-animation: cssload-tetromino2 1.73s ease-out infinite;
//             }
    
//             .cssload-box3 {
//                 animation: cssload-tetromino3 1.73s ease-out infinite;
//                 -o-animation: cssload-tetromino3 1.73s ease-out infinite;
//                 -ms-animation: cssload-tetromino3 1.73s ease-out infinite;
//                 -webkit-animation: cssload-tetromino3 1.73s ease-out infinite;
//                 -moz-animation: cssload-tetromino3 1.73s ease-out infinite;
//                 z-index: 2;
//             }
    
//             .cssload-box4 {
//                 animation: cssload-tetromino4 1.73s ease-out infinite;
//                 -o-animation: cssload-tetromino4 1.73s ease-out infinite;
//                 -ms-animation: cssload-tetromino4 1.73s ease-out infinite;
//                 -webkit-animation: cssload-tetromino4 1.73s ease-out infinite;
//                 -moz-animation: cssload-tetromino4 1.73s ease-out infinite;
//             }
    
    
//             @keyframes cssload-tetromino1 {
    
//                 0%,
//                 40% {
//                     transform: translate(0, 0);
//                 }
    
//                 50% {
//                     transform: translate(47px, -26px);
//                 }
    
//                 60%,
//                 100% {
//                     transform: translate(94px, 0);
//                 }
//             }
    
//             @-o-keyframes cssload-tetromino1 {
    
//                 0%,
//                 40% {
//                     -o-transform: translate(0, 0);
//                 }
    
//                 50% {
//                     -o-transform: translate(47px, -26px);
//                 }
    
//                 60%,
//                 100% {
//                     -o-transform: translate(94px, 0);
//                 }
//             }
    
//             @-ms-keyframes cssload-tetromino1 {
    
//                 0%,
//                 40% {
//                     -ms-transform: translate(0, 0);
//                 }
    
//                 50% {
//                     -ms-transform: translate(47px, -26px);
//                 }
    
//                 60%,
//                 100% {
//                     -ms-transform: translate(94px, 0);
//                 }
//             }
    
//             @-webkit-keyframes cssload-tetromino1 {
    
//                 0%,
//                 40% {
//                     -webkit-transform: translate(0, 0);
//                 }
    
//                 50% {
//                     -webkit-transform: translate(47px, -26px);
//                 }
    
//                 60%,
//                 100% {
//                     -webkit-transform: translate(94px, 0);
//                 }
//             }
    
//             @-moz-keyframes cssload-tetromino1 {
    
//                 0%,
//                 40% {
//                     -moz-transform: translate(0, 0);
//                 }
    
//                 50% {
//                     -moz-transform: translate(47px, -26px);
//                 }
    
//                 60%,
//                 100% {
//                     -moz-transform: translate(94px, 0);
//                 }
//             }
    
//             @keyframes cssload-tetromino2 {
    
//                 0%,
//                 20% {
//                     transform: translate(94px, 0px);
//                 }
    
//                 40%,
//                 100% {
//                     transform: translate(140px, 26px);
//                 }
//             }
    
//             @-o-keyframes cssload-tetromino2 {
    
//                 0%,
//                 20% {
//                     -o-transform: translate(94px, 0px);
//                 }
    
//                 40%,
//                 100% {
//                     -o-transform: translate(140px, 26px);
//                 }
//             }
    
//             @-ms-keyframes cssload-tetromino2 {
    
//                 0%,
//                 20% {
//                     -ms-transform: translate(94px, 0px);
//                 }
    
//                 40%,
//                 100% {
//                     -ms-transform: translate(140px, 26px);
//                 }
//             }
    
//             @-webkit-keyframes cssload-tetromino2 {
    
//                 0%,
//                 20% {
//                     -webkit-transform: translate(94px, 0px);
//                 }
    
//                 40%,
//                 100% {
//                     -webkit-transform: translate(140px, 26px);
//                 }
//             }
    
//             @-moz-keyframes cssload-tetromino2 {
    
//                 0%,
//                 20% {
//                     -moz-transform: translate(94px, 0px);
//                 }
    
//                 40%,
//                 100% {
//                     -moz-transform: translate(140px, 26px);
//                 }
//             }
    
//             @keyframes cssload-tetromino3 {
//                 0% {
//                     transform: translate(140px, 26px);
//                 }
    
//                 20%,
//                 60% {
//                     transform: translate(94px, 53px);
//                 }
    
//                 90%,
//                 100% {
//                     transform: translate(47px, 26px);
//                 }
//             }
    
//             @-o-keyframes cssload-tetromino3 {
//                 0% {
//                     -o-transform: translate(140px, 26px);
//                 }
    
//                 20%,
//                 60% {
//                     -o-transform: translate(94px, 53px);
//                 }
    
//                 90%,
//                 100% {
//                     -o-transform: translate(47px, 26px);
//                 }
//             }
    
//             @-ms-keyframes cssload-tetromino3 {
//                 0% {
//                     -ms-transform: translate(140px, 26px);
//                 }
    
//                 20%,
//                 60% {
//                     -ms-transform: translate(94px, 53px);
//                 }
    
//                 90%,
//                 100% {
//                     -ms-transform: translate(47px, 26px);
//                 }
//             }
    
//             @-webkit-keyframes cssload-tetromino3 {
//                 0% {
//                     -webkit-transform: translate(140px, 26px);
//                 }
    
//                 20%,
//                 60% {
//                     -webkit-transform: translate(94px, 53px);
//                 }
    
//                 90%,
//                 100% {
//                     -webkit-transform: translate(47px, 26px);
//                 }
//             }
    
//             @-moz-keyframes cssload-tetromino3 {
//                 0% {
//                     -moz-transform: translate(140px, 26px);
//                 }
    
//                 20%,
//                 60% {
//                     -moz-transform: translate(94px, 53px);
//                 }
    
//                 90%,
//                 100% {
//                     -moz-transform: translate(47px, 26px);
//                 }
//             }
    
//             @keyframes cssload-tetromino4 {
    
//                 0%,
//                 60% {
//                     transform: translate(47px, 26px);
//                 }
    
//                 90%,
//                 100% {
//                     transform: translate(0, 0);
//                 }
//             }
    
//             @-o-keyframes cssload-tetromino4 {
    
//                 0%,
//                 60% {
//                     -o-transform: translate(47px, 26px);
//                 }
    
//                 90%,
//                 100% {
//                     -o-transform: translate(0, 0);
//                 }
//             }
    
//             @-ms-keyframes cssload-tetromino4 {
    
//                 0%,
//                 60% {
//                     -ms-transform: translate(47px, 26px);
//                 }
    
//                 90%,
//                 100% {
//                     -ms-transform: translate(0, 0);
//                 }
//             }
    
//             @-webkit-keyframes cssload-tetromino4 {
    
//                 0%,
//                 60% {
//                     -webkit-transform: translate(47px, 26px);
//                 }
    
//                 90%,
//                 100% {
//                     -webkit-transform: translate(0, 0);
//                 }
//             }
    
//             @-moz-keyframes cssload-tetromino4 {
    
//                 0%,
//                 60% {
//                     -moz-transform: translate(47px, 26px);
//                 }
    
//                 90%,
//                 100% {
//                     -moz-transform: translate(0, 0);
//                 }
//             }
//         </style>
        
//         <div class="main">
//             <div class="cssload-tetrominos">
//                 <div class="cssload-tetromino cssload-box1"></div>
//                 <div class="cssload-tetromino cssload-box2"></div>
//                 <div class="cssload-tetromino cssload-box3"></div>
//                 <div class="cssload-tetromino cssload-box4"></div>
//             </div>
//         </div>
//         `


// load = document.querySelector(".loader");
// let delay = Math.floor(((Math.random() * 10) + 2) * 1000);

// function placeOrder(delay) {
//     return new Promise((resolve, reject) =>
//         setTimeout(() => {
//             resolve(delay);
//         }, delay)
//     );
// };


// document.querySelector("button").addEventListener("click", () => {
//     load.innerHTML = animation;
//     placeOrder(delay)
//     .then(() => load.innerHTML = "")
//     .finally(() => confirm("Added to cart"))
    
// });


// // // Using async function(also need to make placeOrder async)
// // document.querySelector("button").addEventListener("click", () => {
// //     load.innerHTML = animation;
// //     (async function main() {
// //         await placeOrder(delay);
// //         load.innerHTML = "";
// //         confirm("Added to cart")
// //     })()
// // });




// 10.

// let choice = prompt("Enter your coffee choice");


// let delay = Math.floor(((Math.random() * 10) + 2) * 1000);

// function brewCoffee(delay) {
//     return new Promise((resolve, reject) =>
//         setTimeout(() => {
//             resolve(delay);
//         }, delay)
//     );
// };


// confirm(`Your awesome ${choice} flavoured coffee is brewing...`)
// brewCoffee(delay)
//     .then(() => confirm("Your coffee if ready."))




// 11.

// const products = [
//     "Laptop", "Smartphone", "Headphones", "Smartwatch", "Tablet", "Camera", "Television", "Printer", "Monitor", "Keyboard",
//     "Mouse", "Router", "Speaker", "Projector", "Drone", "Game Console", "VR Headset", "Smart Home Hub", "Fitness Tracker",
//     "e-Reader", "External Hard Drive", "USB Flash Drive", "Graphics Card", "Processor", "Motherboard", "RAM", "Power Supply",
//     "Cooling Fan", "Computer Case", "Webcam", "Microphone", "Smart Light Bulb", "Smart Thermostat", "Smart Doorbell",
//     "Security Camera", "Smart Lock", "Streaming Device", "Bluetooth Tracker", "Portable Charger", "Wireless Charger",
//     "Mobile Phone Case", "Screen Protector", "Remote Control", "3D Printer", "Action Camera", "Digital Picture Frame",
//     "Electric Scooter", "Electric Bike", "Hoverboard", "Smart Glasses", "Smart Ring", "Smart Scale", "Smart Toothbrush",
//     "Robotic Vacuum", "Coffee Maker", "Blender", "Toaster", "Microwave Oven", "Air Fryer", "Instant Pot", "Pressure Cooker",
//     "Slow Cooker", "Electric Kettle", "Food Processor", "Stand Mixer", "Juicer", "Ice Cream Maker", "Bread Maker",
//     "Air Purifier", "Dehumidifier", "Humidifier", "Fan", "Heater", "Vacuum Cleaner", "Washing Machine", "Dryer",
//     "Refrigerator", "Dishwasher", "Oven", "Cooktop", "Range Hood", "Wine Cooler", "Water Dispenser", "Trash Compactor",
//     "Garbage Disposal", "Sewing Machine", "Iron", "Steamer", "Clothes Steamer", "Hair Dryer", "Hair Straightener",
//     "Curling Iron", "Electric Shaver", "Electric Toothbrush", "Massage Chair", "Foot Massager", "Treadmill", "Exercise Bike",
//     "Elliptical Machine", "Rowing Machine", "Stair Climber", "Weight Bench", "Dumbbells", "Barbell", "Kettlebell",
//     "Yoga Mat", "Resistance Bands", "Jump Rope", "Punching Bag", "Foam Roller", "Ab Roller", "Balance Board", "Trampoline",
//     "Table Tennis Table", "Foosball Table", "Air Hockey Table", "Dartboard", "Billiard Table", "Outdoor Grill", "Fire Pit",
//     "Patio Heater", "Lawn Mower", "Leaf Blower", "Grass Trimmer", "Chainsaw", "Pressure Washer", "Snow Blower", "Hedge Trimmer",
//     "Garden Hose", "Wheelbarrow", "Garden Shovel", "Garden Rake", "Garden Fork", "Lawn Aerator", "Compost Bin", "Bird Feeder",
//     "Outdoor Fountain", "Garden Statue", "Solar Lights", "String Lights", "Garden Umbrella", "Gazebo", "Pergola", "Hammock",
//     "Camping Tent", "Sleeping Bag", "Camping Stove", "Cooler", "Backpack", "Binoculars", "Flashlight", "Headlamp", "Swiss Army Knife",
//     "Fishing Rod", "Tackle Box", "Kayak", "Life Jacket", "Snorkel Set", "Surfboard", "Boogie Board", "Paddle Board", "Inflatable Boat",
//     "Water Skis", "Wakeboard", "Beach Chair", "Beach Umbrella", "Beach Towel", "Sunglasses", "Sunscreen", "Camping Chair", "Picnic Table",
//     "Picnic Basket", "Golf Clubs", "Golf Cart", "Tennis Racket", "Badminton Set", "Volleyball", "Basketball", "Soccer Ball", "Football",
//     "Baseball Glove", "Baseball Bat", "Softball", "Hockey Stick", "Skateboard", "Roller Skates", "Bicycle", "Mountain Bike", "Road Bike",
//     "Helmet", "Knee Pads", "Elbow Pads", "Wrist Guards", "Climbing Shoes", "Climbing Harness", "Climbing Rope", "Carabiners", "Chalk Bag",
//     "Trekking Poles", "Hiking Boots", "Rain Jacket", "Thermal Underwear", "Ski Jacket", "Ski Pants", "Ski Goggles", "Snowboard", "Ski Poles",
//     "Ski Boots", "Snowshoes", "Ice Skates", "Figure Skates", "Hockey Skates", "Curling Broom", "Bobsled", "Sled", "Toboggan", "Kite", "Drone",
//     "RC Car", "RC Helicopter", "RC Boat", "RC Plane", "Model Train", "Electric Train Set", "Dollhouse", "Toy Kitchen", "Building Blocks",
//     "Puzzle", "Board Game", "Card Game", "Stuffed Animal", "Action Figure", "Remote Control Car", "Video Game Console", "Game Controller",
//     "VR Headset", "Gaming Chair", "Gaming Desk", "Gaming Monitor", "Gaming PC", "Streaming Device", "Smart TV", "Soundbar", "Subwoofer"
// ];

// function capitalizeWords(val) {
//     return val.split(' ').map((value) => [String(value).charAt(0).toUpperCase() + String(value).slice(1)]).join(' ');
// };
// let need = capitalizeWords(prompt('Enter the number of products you want to fiter'));
// let filtered = [];

// products.forEach(element => {
//     if (element.includes(need)) {
//         filtered.push(`\n- ${element}`);
//     }
// });

// if (filtered.length > 0) {
//     confirm(`The matching products are: ${filtered}`);
// }
// else {
//     confirm("No matching products found");
// }



// 12.

// function setAuthToken(token, time){
//     confirm("Your auth token will expire in a week.");
//     localStorage.setItem("authToken", token);
    
//     setTimeout(() => {
//         localStorage.removeItem("authToken");
//     }, time);
// };


// let token = prompt("Enter your desired password");
// let seven_days = 7 * 24 * 60 * 60 * 1000;
// setAuthToken(token, seven_days);




// 13.

// const products = {
//     "Apple iPhone": { price: 999, quantity: 10 },
//     "Samsung TV": { price: 1299, quantity: 5 },
//     "Nike Shoes": { price: 79, quantity: 20 },
//     "Adidas T-Shirt": { price: 29, quantity: 30 },
//     "Sony Headphones": { price: 99, quantity: 15 },
//     "LG Refrigerator": { price: 1999, quantity: 3 },
//     "Canon Camera": { price: 499, quantity: 10 },
//     "Microsoft Laptop": { price: 1299, quantity: 5 },
//     "Fitbit Smartwatch": { price: 199, quantity: 25 },
//     "Dell Monitor": { price: 299, quantity: 10 },
//     "HP Printer": { price: 99, quantity: 20 },
//     "Levi Jeans": { price: 59, quantity: 20 },
//     "Under Armour Hoodie": { price: 49, quantity: 25 },
//     "PlayStation Console": { price: 399, quantity: 10 },
//     "Xbox Controller": { price: 69, quantity: 15 },
//     "Nike Hat": { price: 29, quantity: 30 },
//     "Ray Ban Sunglasses": { price: 99, quantity: 10 },
//     "Oakley Watch": { price: 199, quantity: 5 },
//     "Gucci Belt": { price: 99, quantity: 10 },
//     "Chanel Perfume": { price: 99, quantity: 10 },
//     "Lego Set": { price: 49, quantity: 20 },
// }

// // In this method, we assume that we don't know the names of the keys.

// let totalprize = 0;
// let infos = [];

// for (const key in products) {
//     for (const keyb in (products[key])) {
//         // let prod_info = 
//         infos.push((products[key])[keyb])
//     }
// }

// for (let index = 0; index < (infos.length)/2; index+=2) {
//     totalprize += (infos[index] * infos[index+1])
// }
// console.log(totalprize);



// 14.

// document.querySelector('body').innerHTML = `
//    <style>
//         .back-to-top {
//             position: fixed;
//             bottom: 20px;
//             right: 20px;
//             background-color: #4CAF50;
//             border-radius: 50%;
//             width: 50px;
//             height: 50px;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             cursor: pointer;
//             color: black;
//         }

//         .back-to-top:hover {
//             background-color: #3e8e41;
//         }

//         .back-to-top svg {
//             width: 20px;
//             height: 20px;
//             fill: white;
//         }

//         body {
//             height: 100vh;
//             margin: 0;
//             font-family: Arial, sans-serif;
//             background: url('https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/WLP03Kh71Uik4M1TNEyis/1605760b9f9f6b5b890e0d7b704ded5c/GettyImages-1199128740.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=2&w=1000') no-repeat center center fixed;
//             background-size: cover;
//             color:white;

//         }

//         .section {
//             height: 100vh;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             flex-direction: column;
//         }

//         h1 {
//             font-size: 2rem;
//         }

//         .desc {
//             width: 80vw;
//             text-align: center;
//             font-size: 1.2rem;
//         }

//         .image {
//             width: 80vw;
//             height: 80vh;
//             border: 10px solid white;
//         }
//     </style>

//     <div class="section">
//         <h1 style="font-size: 4rem;">Welcome to Our Website</h1>
//         <p class="desc" style="font-size: 2.4rem;">We are an AI software company, dedicated to providing innovative solutions to your business
//             problems.</p>
//     </div>
//     <div class="section">
//         <h1 style="font-size: 4rem;">Our Services</h1>
//         <p class="desc" style="font-size: 2.4rem;">We offer a wide range of services, including, but not limited to: AI consulting, AI software
//             development, AI training and data annotation, AI deployment and integration, and AI maintenance and support.
//         </p>
//     </div>
//     <div class="section">
//         <h1>AI Consulting</h1>
//         <p class="desc">We help you identify the best AI solutions for your business needs, and provide guidance on how
//             to implement them.</p>
//         <img class="image" src="https://imageio.forbes.com/specials-images/imageserve/62fc8c03c3e3a8833738a5f5/What-Are-The-10-Best-AI-Consulting-Firms/960x0.jpg?format=jpg&width=1440" alt="AI consulting">
//     </div>
//     <div class="section">
//         <h1>AI Software Development</h1>
//         <p class="desc">We develop custom AI software solutions for your business needs, using the latest AI
//             technologies and frameworks.</p>
//         <img class="image" src="https://biglysales.com/wp-content/uploads/2024/08/Ai-consulting-2.webp" alt="AI software development">
//     </div>
//     <div class="section">
//         <h1>AI Training and Data Annotation</h1>
//         <p class="desc">We provide AI training and data annotation services, so you can have your AI models trained and
//             ready to go.</p>
//         <img class="image" src="https://kms-technology.com/wp-content/uploads/2022/02/iStock-1324581779.jpg.webp" alt="AI training and data annotation">
//     </div>
//     <div class="section">
//         <h1>AI Deployment and Integration</h1>
//         <p class="desc">We help you deploy and integrate your AI solutions into your existing infrastructure, so you can
//             start using them right away.</p>
//         <img class="image" src="https://www.zealousys.com/wp-content/uploads/2024/11/AI-consulting-services.webp" alt="AI deployment and integration">
//     </div>
//     <div class="section">
//         <h1>AI Maintenance and Support</h1>
//         <p class="desc">We provide ongoing maintenance and support for your AI solutions, so you don't have to worry
//             about keeping them up to date.</p>
//         <img class="image" src="https://www.cssoftsolutions.com/wp-content/uploads/2025/02/Big-Data-Meets-AI-The-Synergy-in-Data-Science-Development.jpg" alt="AI maintenance and support">
//     </div>

//     <div class="back-to-top">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
//             stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-circle">
//             <circle cx="12" cy="12" r="10"></circle>
//             <polyline points="16 12 12 5 8 12"></polyline>
//             <line x1="12" y1="2" x2="12" y2="22"></line>
//         </svg>
//     </div>
//     <script src='test.js'></script>
// `


// // function smoothScrollToTop() {
// //     window.scrollTo({
// //         top: 0,
// //         behavior: 'smooth',
// //         duration: 500 // add a duration to control the speed of the scroll
// //     });
// // }
// // document.querySelector('.back-to-top').addEventListener('click', smoothScrollToTop);


// function smoothScrollToTop() {
//     // This somewhat works 😀😀😊😊
//     let initialY = window.scrollY;
//     let distance = initialY > 0 ? initialY : 0;
//     let duration = 500;
//     let start = null;

//     let step = (timestamp) => {
//         if (!start) start = timestamp;
//         let progress = timestamp - start;
//         let ease = progress / duration;
//         let y = initialY - (ease * distance);
//         window.scrollTo(0, y);
//         if (progress < duration) {
//             window.requestAnimationFrame(step);
//         }
//     };

//     window.requestAnimationFrame(step);


//     // This doesn't work 😡😡😡😡
//     // window.scroll({
//     //     top:0,
//     //     behavior: "smooth",
//     // });

//     // This doesnt work too 😀😡😡😡😡😡😡
// //     let the_div = document.createElement("div");
// //     the_div.id = "the_div";
// //     document.body.prepend(the_div);
// //     document.body.style.scrollBehavior = "smooth";

// //     document.querySelector(".back-to-top").outerHTML = `
// //    <a href="#the_div">
// //        <div class="back-to-top">
// //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
// //             stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-circle">
// //             <circle cx="12" cy="12" r="10"></circle>
// //             <polyline points="16 12 12 5 8 12"></polyline>
// //             <line x1="12" y1="2" x2="12" y2="22"></line>
// //         </svg>
// //     </div>
// //    </a>
// //    `

// //     const navigation = document.querySelector("#the_div");

// //     const navigationHeight = navigation.offsetHeight;

// //     document.documentElement.style.setProperty(
// //         "--scroll-padding",
// //         navigationHeight + "px"
//     // );

// }

// document.querySelector('.back-to-top').addEventListener('click', smoothScrollToTop)
