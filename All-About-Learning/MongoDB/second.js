// Searching for data in MongoDB
use prasen

// This query will return all the objects with rating equal to 3.5
db.items.find({rating:3.5})

// This query will return all the objects with price greater than equal to 29000
db.items.find({price:  {$gte: 29000}})
db.items.find({price:  {$gt: 29000}}) // greater than only

// And operator, we can filter out multiple things by using ","
db.items.find({rating: {$gt: 3.3}, price:{$gt: 4000}})

db.items.find({rating: {$lt: 3.3}, price:{$lt: 14000}})

// Corrected query using $or to find documents where "rating" is less than 3.3 OR "price" is less than 14000
// it is "OR" Operator
db.items.find({ $or: [{ rating: { $lt: 3.3 } }, { price: { $lt: 14000 } }] })


// Projection
db.items.find({rating: {$gt:3.5}}, {rating: 1})