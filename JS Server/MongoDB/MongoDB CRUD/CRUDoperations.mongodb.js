// Creating a new database location
use('CRUDOPS')
// Creating/selecting the folders in the database and connecting to it
db.createCollection('Cruds')


// C - Create:- Inserting new instance in the database:

// Inserting one instance:
// db.Cruds.insertOne({"C For -":'Create'})

// Inserting many instances:
// db.Cruds.insertMany([
//     {
//         "C For -": 'Create',
//         "R For -": 'Read',
//         "U For -": 'Update',
//         "D For -": 'Delete'
//     },
// {
//     "Language": "Java",
//     "Creator": "James Gosling",
//     "Created": 1995,
//     "Popularity": "High",
//     "Applications": "Android apps, server-side development, web development"
// },
//     {
//         "Language": "Python",
//         "Creator": "Guido van Rossum",
//         "Created": 1991,
//         "Popularity": "Very High",
//         "Applications": "Data science, machine learning, web development, scripting"
//     },
//     {
//         "Language": "C",
//         "Creator": "Dennis Ritchie",
//         "Created": 1972,
//         "Popularity": "Medium",
//         "Applications": "Operating systems, embedded systems, game development"
//     },
// {
//     "Language": "JavaScript",
//     "Creator": "Brendan Eich",
//     "Created": 1995,
//     "Popularity": "Extremely High",
//     "Applications": "Web development, front-end development, mobile app development"
// },
//     {
//         "Language": "C++",
//         "Creator": "Bjarne Stroustrup",
//         "Created": 1979,
//         "Popularity": "High",
//         "Applications": "Game development, system programming, high-performance computing"
//     },
//     {
//         "Language": "Go",
//         "Creator": "Google team",
//         "Created": 2009,
//         "Popularity": "Growing",
//         "Applications": "Web development, systems programming, cloud computing"
//     },
// {
//     "Language": "Kotlin",
//     "Creator": "JetBrains",
//     "Created": 2010,
//     "Popularity": "Growing",
//     "Applications": "Android app development, server-side development"
// },
//     {
//         "Language": "Swift",
//         "Creator": "Apple",
//         "Created": 2014,
//         "Popularity": "High",
//         "Applications": "iOS app development, macOS app development"
//     },
//     {
//         "Language": "PHP",
//         "Creator": "Rasmus Lerdorf",
//         "Created": 1994,
//         "Popularity": "Medium",
//         "Applications": "Web development, server-side scripting, content management systems"
//     },
//     {
//         "Language": "R",
//         "Creator": "Ross Ihaka and Robert Gentleman",
//         "Created": 1993,
//         "Popularity": "High",
//         "Applications": "Statistical analysis, data visualization, data science"
//     }
// ])




// R - Read:- Reading and finding in the database

// Read the whole database
// db.DB2.find({}).pretty()

// Returns one document with the given query:
// a = db.Cruds.findOne({"Created":1995})
// console.log(a)

// Returns many document with the given query:
// a = db.Cruds.find({"Created":1995})
// console.log(a)

// If you want to count the number of documents having the specified query:
// a = db.Cruds.find({"Created":1995})
// console.log(a.count())

// To get the array of the documents with the specified query:
// a = db.Cruds.find({"Created":1995})
// console.log(a.toArray())




// U - Update:- To update the info in the database(document)

// Add a specific field in all the documents:
// db.DB2.updateMany({},{$set:{"Galaxy": "Milky Way"}})

// Update the specified query in the first document:
// db.Cruds.updateOne({"Created":1995},{$set:{"Created":1999999}})

// Update the specified query in all the documents:
// db.Cruds.updateMany({"Created":1995},{$set:{"Created":199999}})




// D - Delete:- To delete the document with the specified query

// Delete the whole document
// db.DB2.deleteMany({})

// Delete one document with the specified query:
// db.Cruds.deleteOne({"Created":2010})

// Delete many document with the specified query:
// db.Cruds.deleteMany({"Created":1995})