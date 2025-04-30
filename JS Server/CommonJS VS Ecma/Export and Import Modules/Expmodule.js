// Named export 
export const a = 1; // --
export const b = 2; // --
export const c = 3; // --  All of these are named export which are called using their names.
export const d = 4; // --
export const e = 5; // --


// Default export 
let obj = {
    a: 12,
    b: 13
}
export default obj; // This will get exported by default which means this will be imported by any name not just obj
                    // Only one default value can be exported