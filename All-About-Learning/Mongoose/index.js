// Step 1: Import the Mongoose library
var mongoose = require('mongoose');

// Step 2: Connect to the MongoDB database
mongoose.connect('mongodb://localhost/prasen');

// Step 3: Get the default connection
var db = mongoose.connection;

// Step 4: Set up an error event listener
db.on('error', console.error.bind(console, 'connection error:'));

// Step 5: Set up a once event listener for when the connection is open
db.once('open', function () {
    // Step 6: We're Connected
    console.log("We are connected brother/sisters");

    const kittySchema = new mongoose.Schema({
        name: String
    });

    // Step 7: Close the connection (optional, depending on your use case)
    // mongoose.connection.close();
});
