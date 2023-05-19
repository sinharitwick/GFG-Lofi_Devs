const express = require('express');
const bodyParser = require('body-parser');
const DecisionTree = require('decision-tree');
// const getlocation = require('./location');
const getLocation = require('./currentLoc');


const app = express();
const router = express.Router();
app.use(bodyParser.json());
const fs = require('fs');

// Read the training data from the file
const training_data = JSON.parse(fs.readFileSync('data2.json', 'utf8')).training_data;

// Read the test data from the file
const test_data = JSON.parse(fs.readFileSync('data2.json', 'utf8')).test_data;

const data = JSON.parse(fs.readFileSync('data2.json', 'utf8'));

const class_name = "crop";
const features = ["location", "climate", "soil", "month"];

// Train the decision tree algorithm using the data
const dt = new DecisionTree(class_name, features);
dt.train(data.training_data);

router.post('/', async(req, res) => {

    // const location = await getLocation()
    let {climate, soil, location,month } = req.body;
  
    if(!location)
    {
      const locationApi = await getLocation();
      location = locationApi.city;
    }
    
    // Use the decision tree to make predictions
    const crops = dt.predict({
       location: location,
       climate: climate, 
       soil: soil,
       month: month
       });
  
    // Return the result as a response
    res.json({
      success: true,
      crops,
      location
    });
  });
  
  module.exports = router;