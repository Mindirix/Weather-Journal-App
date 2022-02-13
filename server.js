// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cors for cross origin allowance
const cors = require("cors");
const { json } = require("body-parser");
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 5000;

const server = app.listen(port, () => {
    console.log(`runnning on local host: ${port}`);
  });

//Get Route
app.get('/all', (req, res)=> {
   // console.log("get Route"); // test
    const weather = JSON.stringify(projectData);
    res.send(weather);
    console.log("data from get route");
    console.log(weather);
})

//Post Route
app.post('/add', (req, res)=> {
    projectData.temp = req.body.temp;
    projectData.date = req.body.date;
    projectData.feeling = req.body.feeling;
    projectData.name = req.body.name;
  res.send(projectData);
  console.log("Post Received");
})