show dbs
use prasen
show collections

db.items.find()
// the document with the name "Moto 30s" in the "items" collection will have its "price" field updated to 2
db.items.updateOne({name:"Moto 30s"},{$set :{price: 2}})
db.items.find()
db.items.updateMany({name:"Samsung 30s"},{$set :{price: 3, rating: 1}})

// Delete one document
db.items.deleteOne({name:"Moto 30s"})

// Delete multiple document
db.items.deleteMany({qty:{$lt: 1}})

//  MongoDB Compass is a Graphical User Interface (GUI) tool for MongoDB that allows us interact with our MongoDB Database.