
// Events in JS
// An event is a signal that something has happened.

// Keyboard events
// keydown
// Fired when a key is pressed.

// keypress Deprecated
// Fired when a key that produces a character value is pressed down.

// keyup
// Fired when a key is released.

// Mouse events
// auxclick
// Fired when a non-primary pointing device button (e.g., any mouse button other than the left button) has been pressed and released on an element.

// click
// Fired when a pointing device button (e.g., a mouse's primary button) is pressed and released on a single element.

// contextmenu
// Fired when the user attempts to open a context menu.

// dblclick
// Fired when a pointing device button (e.g., a mouse's primary button) is clicked twice on a single element.

// DOMActivate Deprecated
// Occurs when an element is activated, for instance, through a mouse click or a keypress.

// DOMMouseScroll Deprecated Non-standard
// Occurs when mouse wheel or similar device is operated and the accumulated scroll amount is over 1 line or 1 page since last event.

// mousedown
// Fired when a pointing device button is pressed on an element.

// mouseenter
// Fired when a pointing device (usually a mouse) is moved over the element that has the listener attached.

// mouseleave
// Fired when the pointer of a pointing device (usually a mouse) is moved out of an element that has the listener attached to it.

// mousemove
// Fired when a pointing device (usually a mouse) is moved while over an element.

// mouseout
// Fired when a pointing device (usually a mouse) is moved off the element to which the listener is attached or off one of its children.

// mouseover
// Fired when a pointing device is moved onto the element to which the listener is attached or onto one of its children.

// mouseup
// Fired when a pointing device button is released on an element.

// mousewheel Deprecated Non-standard
// Fired when a mouse wheel or similar device is operated.

// MozMousePixelScroll Deprecated Non-standard
// Fired when a mouse wheel or similar device is operated.

// webkitmouseforcechanged Non-standard
// Fired each time the amount of pressure changes on the trackpadtouchscreen.

// webkitmouseforcedown Non-standard
// Fired after the mousedown event as soon as sufficient pressure has been applied to qualify as a "force click".

// webkitmouseforcewillbegin Non-standard
// Fired before the mousedown event.

// webkitmouseforceup Non-standard
// Fired after the webkitmouseforcedown event as soon as the pressure has been reduced sufficiently to end the "force click".

let button = document.getElementById("btn");
// List of all mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// button.addEventListener("click", ()=>{ // here the even is fired when mouse is clicked
//     alert('I am being clicked')
// document.querySelector(".box").innerHTML = "<b>Yayy you were clicked </b> Enjoy your click!"
// })

button.addEventListener("dblclick", () => {
  // here the event is fired when mouse is double clicked on the button
  document.querySelector(".box").innerHTML =
    "<b>Yayy you were double clicked </b> Enjoy your click!";
  alert("I am being double clicked.");
});

button.addEventListener("contextmenu", () => {
  // here the event is fired when mouse is clicked on the button
  alert("I am being context clicked");
  document.querySelector(".box").innerHTML =
    "<b>Yayy you were clicked to view the context </b> Enjoy your click!";
});

button.addEventListener("contextmenu", () => {
  // here the event is fired when the context menu is opened on the button
  alert("I am being context clicked");
  document.querySelector(".box").innerHTML =
    "<b>Yayy you were clicked to view the context </b> Enjoy your click!";
});
button.addEventListener("keydown", (e) => {
  // here the event is fired when any key is pressed on the button
  alert("A key on the keyboard is being pressed");
  console.log(e);
  document.querySelector(".box").innerHTML =
    "<b>Yayy a key on the keyboard was clicked </b> Enjoy your click!";
});
document.addEventListener("keydown", (e) => {
  // here the event is fired when any key is pressed on the document
  alert("A key on the keyboard is being pressed");
  console.log(e, e.key, e.keyCode);
  document.querySelector(".box").innerHTML =
    "<b>Yayy a key on the keyboard was clicked </b> Enjoy your click!";
});
// Removing an event listner
button.removeEventListener("contextmenu", () => {
  alert("I am being context clicked");
});

// You can also do the same using onclick method
document.querySelector("#btn2").onclick = function onclick1() {
  alert("I am being clicked");
};

// Event Bubbling:
// lets say we have an element(say cc) another element inside the cc(say cb) and another elemetn inside cb(say c)
// So , if events are attached to cc ,cb and c then if the event inside c is fired then the event inside cb and cc will also be fired, which is technically right as the element inside cc is fired.
// This is called event bubbling. it is further explained below with examples.

// the behavior shown below in events is by default in js , so if you want to remove it then you can use the stopPropagation fuction.
// as shown below

const ccontainer = document.querySelector(".ccontainer");
// This will not stop eventbubbling.
// ccontainer.addEventListener("click", ()=>{
//     alert('ccontainer is being clicked.')
// })
// This will stop event bubbling to its parent
ccontainer.addEventListener("click", (e) => {
  e.stopPropagation(); // if i use it here nothing will happen because ccontainer does'nt have any parent to stop bubbling.
  alert("ccontainer is being clicked.");
});

const childbox = document.querySelector(".childbox");
childbox.addEventListener("click", (e) => {
  e.stopPropagation(); // But if i use it here then event bubbling will stop to its parent.
  alert("childbox is being clicked.");
});
const thechild = document.querySelector(".thechild");
thechild.addEventListener("click", (e) => {
  e.stopPropagation(); //if i use it here then event bubbling will stop to its parent.
  alert("thechild is being clicked.");
});

//
//
//

// setInterval :The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).

// here is a function to create random background colours using setinterval
setInterval(() => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let rgb = `rgb(${r},${g},${b})`;
  console.log(rgb)
  intval = document.querySelector(".interval");
  intval.style.backgroundColor = rgb;
}, 3000);// the fuction is executed after every .1 second


// setTimeout: setTimeout is a JavaScript method that allows you to run a function or execute code once after a specified delay in milliseconds.

// here is a function to generate random background colour using settimeout for one time
const timeout = setTimeout(() => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let rgb = `rgb(${r},${g},${b})`;
    console.log(rgb)
    intval = document.querySelector(".timeout");
    intval.style.backgroundColor = rgb;
}, 10000);

// clearTimeout: The clearTimeout() method in JavaScript is used to cancel a timer that was previously created with setTimeout(). [1]
// setTimeout() schedules a function to be run once after a specified number of milliseconds. This returns an ID that can be used to cancel the timer with clearTimeout().

clearTimeout(timeout)