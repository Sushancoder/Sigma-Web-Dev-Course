// 1.  Normal 
function func1(a, b) {
    return a + b;
};


// 2.  Using variable (for renaming)
func1 = function(a, b){
    return a + b;
}


// 3. Const normal
const func2 = function(a, b){
    return a - b;
}


// 4. Const like arrow function
const func3 = (a, b) => {
    return a ** b;
}


// 5. Arrow functions with implicit return
const func4 = (a, b) => a*b;


// 6. Functions creted in properties
// Here the funtions directly made and invoked
let ary = [1, 2, 8, 3, 12, 45, 6]
new_ary = ary.map((element, array )=>{return element**2})

// Line 32 can also be written like this as per the rule of arrow functions
new_ary = ary.map(element, array => element**2)



// 7. We can also make functions using let instead of const always
let func5 = function(a, b){
    return a ^ b;
}