import fs from "fs/promises"
// You can directly put an await function in an imported file in es6 as we did


// Function uses in promises(Much inuitive)


// Reading a file 
const a = await fs.readFile('pythonfile2.txt');
console.log(a.toString())

// Writing a file 
const b = fs.writeFile("pythonfile2.txt", "\n\n\n\n\nThis is a file being written by JS using the FS module.")
console.log(b)

// Appending a file
const c = await fs.appendFile("pythonfile2.txt", "\n\n\n\n\nThis is a file being written by JS using the FS module.")
console.log(c)

// Deleting a file
const d = await fs.unlink('testing\\myfile.txt');
console.log(d);




// For directories 

// Reading a directory asynchronously (Returns an array of file names)
const files = await fs.readdir('testing');
console.log('Directory contents:', files);

// Creating a directory asynchronously
await fs.mkdir('testing\\newDir', { recursive: true });
console.log('Directory created successfully.');

// Removing a directory asynchronously
await fs.rmdir('testing\\newDir');
console.log('Directory removed successfully.');


// Use case 
// Can use it to create an array of directories or files in a directory:
for (let index = 0; index < 100; index++) {
    fs.writeFile(`dir/pythonfile${index}.txt`, "This is a file being written by JS using the FS module.")
}

// Error reasons
    // Don't create directories in non existing directories
    // Do not create already created folders or files