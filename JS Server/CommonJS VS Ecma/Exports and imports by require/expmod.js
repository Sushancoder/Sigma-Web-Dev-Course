// 1. This way
// module.exports = {
//     name: 'ping',
//     description: "this is a ping command!",
// }

// 2. This way
// Exporting variables
let x = 20;
module.exports = x; // All of the three method repsonses can be imported by giving any name

// 3. Or this way
// let a = 23;
// let b = 24;
// let c = 25;
// let d = 26;
// let e = 27;

// module.exports = {a, b, c, d, e}