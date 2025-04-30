// Creating a package.json file 
 
// Whe can use the "NPM init" to create a package.json file which after taking the required arguments like package name, version, author, etc.
// npm init 

// The "NPM init -y" to create a package.json file with default values. this will not ask for any arguments and will create the package will blank values and the it will as the folder. 
// npm init -y
// In the package.json file when we add scripts, we can directly access them via the "npm run 'script name' " command in the terminal.

// Don't use nodemon now, bcuz node's V.18 has `node --watch` feature

// Though import and exoports can work without initialising a npm project, but it is helpful



// Installing modules

// Installing one module:
// We can use the "NPM install 'module name' " to install to install a module from the internet.
// npm install express -> this will install the express module.

// Installing multiple modules:
// We can use the "NPM install 'module name' 'module name' " to install multiple modules from the internet.
// npm install express body-parser -> this will install the express and body-parser modules.

// Short-hand for installing modules:
// We can use the "NPM i 'module name' " to install a module from the internet.
// npm i chai -> this will install the chai module.


// Direct downloading of module by package.json:
// You can directly write just "npm i" to install all the given modules with their versions in the package.json file.


// Globally installing:
// We can use the "NPM i -g 'module name' " to globally install a module.
// npm i -g nodemon -> this will globally install the nodemon module.
// npm install --global nodemon -> this will globally install the nodemon module.


// Updating modules:
// We can use the "NPM update 'module name' " to update a module.
// npm update express -> this will update the express module.


// Updating all modules:
// We can use the "NPM update " to update all the modules.
// npm update -> this will update all the modules.


// Updating all modules to a specific version:
// We can use the "NPM update 'module name'@'version' " to update a module with a specific version.
// npm update express@4.17.1 -> this will update the express module with version 4.17.1.


// Updating all modules to a specific version:
// We can use the "NPM update 'module name'@'version' " to update a module with a specific version.



// Uninstalling modules

// We can use the "NPM uninstall 'module name' " to uninstall a module.
// npm uninstall express -> this will uninstall the express module.



// Dev dependency modules

// We can use the "NPM install 'module name' -D" to install a module as a dev dependency.
// npm install express -D -> this will install the express module as a dev dependency.

// We can use the "NPM uninstall 'module name' -D" to uninstall a module as a dev dependency.
// npm uninstall express -D -> this will uninstall the express module as a dev dependency.





// Working with different versions:

// (But fnm is faster than nvm)
// nvm allows you to quickly install and use different versions of node via the command line.

// Example:

// $ nvm use 16
// Now using node v16.9.1 (npm v7.21.1)
// $ node -v
// v16.9.1
// $ nvm use 14
// Now using node v14.18.0 (npm v6.14.15)
// $ node -v
// v14.18.0
// $ nvm install 12
// Now using node v12.22.6 (npm v6.14.5)
// $ node -v
// v12.22.6


// NVM - Node Version Manager
// Further reading on how to install it safely: https://www.geeksforgeeks.org/how-to-install-and-use-nvm-on-windows/

// Some commonly used commands:

// 1. List all Available Versions
// This command will provide the list of all available Node.js versions:

// nvm list available
// 2. Install Any Specific Versions
// If you want to install any specific Nodejs version, run this command:

// nvm install 21.7.3
// 3. Use any Specific Version
// If you wish to work on any specific Node.js version, use this command:

// nvm use 23.7.0
// 4. Set a Default Version
// Use the following command to set a default Node.js version:

// nvm alias default 23.7.0
// Verify the Node.js Versions Using NVM
// 1. Check Node.js Version
// This command will display the current Node.js version that you’re using:

// node -v
// 2. Check NPM Version
// The following command will display the NPM version associated with the current Node.js version.

// npm -v



// How to use fnm to install and use different versions of node:
// https://www.freecodecamp.org/news/fnm-fast-node-manager/ 
// (Don't know if it works in windows or not)