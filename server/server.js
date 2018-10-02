const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

// Instance of the server
const app = express();

// Handle the form data
app.use(bodyParser.json());

app.use(cors());

// Test get request
app.get('/', function(req, res) {
    console.log("Receive a GET request from ip" + req.ip);
    console.log(req);
    res.send("Hello from the express server");
})

// Endpoint where the angular app post the form data
app.post('/enroll', function(req, res) {
    console.log("Receive a POST request from ip" + req.ip);
    console.log(req.body);
    res.status(200).send( {"message" : "Data received!"} );
})

app.listen(PORT, function() {
    console.log("Server listen on localhost over the port " + PORT);
})