// const http = require('node:http');
// here we use the require syntax to get the module
// this syntax will work bcz the default value of type in the package.json is commonjs i.e.(type: "commonjs")
// const fs = require('fs')

// but we can set the type to "module" which works ES6 and onwards , using this is a better approach
// after doing this we can use the import syntax to get the module instead of require syntax at line:1




import http from "http"     // This is ES6

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>This is the heading</h1><h2>This is the heading</h2><h3>This is the heading</h3><h4>This is the heading</h4><h5>This is the heading</h5><h6>This is the heading</h6>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// We can use the nodemon module to automatically restart the server when we make changes to the code.


// Comparison between CommonJS and ES6 modules
// +--------------------------+-----------------------------------+-----------------------------------------------------+
// | Feature                  | CommonJS                          | ES6 Modules (ECMAScript Modules)                    |
// +--------------------------+-----------------------------------+-----------------------------------------------------+
// | **Syntax**               | `require()` and `module.exports`  | `import` and `export`                               |
// +--------------------------+-----------------------------------+-----------------------------------------------------+
// | **Usage**                | Primarily Node.js                 | Standardized for browsers & Node.js                 |
// +--------------------------+-----------------------------------+-----------------------------------------------------+
// | **Loading**              | Synchronous                       | Asynchronous (generally)                            |
// +--------------------------+-----------------------------------+-----------------------------------------------------+
// | **Static Analysis**      | Difficult                         | Easily analyzable                                   |
// +--------------------------+-----------------------------------+-----------------------------------------------------+
// | **Value vs. Reference**  | Copies values, live refs (objects)| Live bindings (references)                          |
// +--------------------------+-----------------------------------+-----------------------------------------------------+
// | **Circular Deps**        | Potential runtime errors          | Generally better handled                            |
// +--------------------------+-----------------------------------+-----------------------------------------------------+
// | **Top-Level `this`**     | `this` -> `module.exports`        | `this` -> `undefined`                               |
// +--------------------------+-----------------------------------+-----------------------------------------------------+
// | **File Extension**       | `.js` (typical)                   | `.mjs` or `.js` (with "type": "module" in package.json) |
// +--------------------------+-----------------------------------+-----------------------------------------------------+
// | **Execution**            | Runtime evaluation                | Compile-time evaluation (static analysis)           |
// +--------------------------+-----------------------------------+-----------------------------------------------------+