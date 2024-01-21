use('New');

// Insert a few documents into the sales collection.
db.getCollection('Mobile Phones').insertMany([
    
        {
          "_id": { "$oid": "65aab24be9273e52fbb824b2" },
          "name": "Samsung 30s",
          "price": 22000,
          "rating": 4.5,
          "qty": 233,
          "sold": 98
        },
        {
          "_id": { "$oid": "65aab24be9273e52fbb824b3" },
          "name": "iPhone X",
          "price": 99999,
          "rating": 4.8,
          "qty": 100,
          "sold": 50
        },
        {
          "_id": { "$oid": "65aab24be9273e52fbb824b4" },
          "name": "Google Pixel 5",
          "price": 79999,
          "rating": 4.7,
          "qty": 150,
          "sold": 70
        },
        {
          "_id": { "$oid": "65aab24be9273e52fbb824b5" },
          "name": "OnePlus 9",
          "price": 54999,
          "rating": 4.6,
          "qty": 120,
          "sold": 80
        },
        {
          "_id": { "$oid": "65aab24be9273e52fbb824b6" },
          "name": "Moto G7",
          "price": 24999,
          "rating": 4.3,
          "qty": 180,
          "sold": 60
        },
        {
          "_id": { "$oid": "65aab24be9273e52fbb824b7" },
          "name": "Xiaomi Redmi Note 8",
          "price": 16999,
          "rating": 4.4,
          "qty": 200,
          "sold": 90
        },
        {
          "_id": { "$oid": "65aab24be9273e52fbb824b8" },
          "name": "Sony Xperia 5 II",
          "price": 79999,
          "rating": 4.9,
          "qty": 80,
          "sold": 40
        },
        {
          "_id": { "$oid": "65aab24be9273e52fbb824b9" },
          "name": "LG Velvet",
          "price": 45999,
          "rating": 4.2,
          "qty": 130,
          "sold": 100
        },
        {
          "_id": { "$oid": "65aab24be9273e52fbb824ba" },
          "name": "Nokia 7.2",
          "price": 29999,
          "rating": 4.0,
          "qty": 160,
          "sold": 75
        },
        {
          "_id": { "$oid": "65aab24be9273e52fbb824bb" },
          "name": "Huawei P30 Pro",
          "price": 89999,
          "rating": 4.8,
          "qty": 110,
          "sold": 55
        }     
]);



// Print a message to the output window.
console.log(`Done Inserting data`);


