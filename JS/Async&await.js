// /*


function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data");
        },2000);
    })
}

console.log('loading modules...');
console.log('working...');
console.log('Load data...');

data = getdata();

console.log(data);

// one way to control the asyncronous javascript is this 
// using this we can make the code run after the settling of the promise
data.then((v) => {
console.log('Aquiring data...');
console.log('Processing data...');
console.log('Task 2');
})
console.log('another task'); // the rest of the code will run asncronously and after promise settlement this code will be pushed below

// */




// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully




// /*
// Another way to control the asyncronous javascript is this
// But to do such type of here is an easy and clean way which is the async and await 

async function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("the data");
        },2000);
    })
}

async function main() { // for now we are using the await function in the async 
console.log('loading modules...');
console.log('working...');
console.log('Load data...');

data = await getdata(); //this block of code will wait for the promise to be settled and then it will run the next line of code after the promise is settled.

console.log(data);
console.log('Aquiring data...');
console.log('Processing data...');
console.log('Task 2');
}
main() // this will run the function
// */




/*
// Fetch api 

async function getdata() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1') // to get data from the network
    // let data = await x.json() //waiting to convert it to json or text format
    let data = await x.text()
    // .then(response => response.json()) --we get these code by default
    // .then(json => console.log(json))} ---^
    return data
}

async function main() { 
console.log('loading modules...');
console.log('working...');
console.log('Load data...');

data = await getdata(); 
console.log(data);
console.log('Aquiring data...');
console.log('Processing data...');
console.log('Task 2');
}
main() 
*/


// // Post request 
// // Example POST method implementation:
// async function postData(url = "", data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: "POST", // *GET, POST, PUT, DELETE, etc.
//       mode: "cors", // no-cors, *cors, same-origin
//       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: "same-origin", // include, *same-origin, omit
//       headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: "follow", // manual, *follow, error
//       referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data), // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
  
//   postData("https://example.com/answer", { answer: 42 }).then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });




























// More :

async function harry() {
    let delhiWeather = new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve("27 Deg")
            }, 2000)
    })

    let bangaloreWeather = new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve("21 Deg")
            }, 5000)
    })

    // delhiWeather.then(alert)
    // bangaloreWeather.then(alert)
    console.log("Fetching Delhi Weather Please wait ...")
    let delhiW = await delhiWeather
    console.log("Fetched Delhi Weather: " + delhiW)
    console.log("Fetching Bangalore Weather Please wait ...")
    let bangaloreW = await bangaloreWeather
    console.log("Fetched Bangalore Weather: " + bangaloreW)
    return [delhiW, bangaloreW]
}

const cherry = async () => {
    console.log("Hey I am cherry and I am waiting ")
}

const main1 = async () => {
    console.log("Welcome to weather control room")
    let a = await harry()
    let b = await cherry()

}

main1()