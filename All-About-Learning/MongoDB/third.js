show dbs
use prasen
show collections

db.items.find({price:22000})

// Deleting items from the Mongo DataBase

// "deleteOne" will delete the matching entry and will delete the first entry in case in case of of multi document match"
db.items.deleteOne({price:22000})

// The deleteMany method is used for deleting multiple documents that match the specified criteria.
db.items.deleteMany({price:22000})

// Delete all documents from the "items" collection
db.items.deleteMany({})

// Drop (delete) the entire "items" collection
db.items.drop()

