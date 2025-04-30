import path from "path"

// console.log(path) // Get all the functions related to path

var thepath = 'C:\\Users\\Neha\\OneDrive\\Documents\\Html websites\\CWH Sigma web dev course\\JS\\JS server\\pythonfile.txt'
console.log(path.extname(thepath)) // to get the extension name of the file
console.log(path.basename(thepath)) // to get the direct(basic) name of the file
console.log(path.dirname(thepath)) // to get the directory name of the file

// Joining two paths 
var joiner = path.join("C:/" + "harry\\mrindia") // it will join these pathnames like this:
console.log(joiner)                             // Output:Cc:\harry\mrindia

// It contains many other useful features.