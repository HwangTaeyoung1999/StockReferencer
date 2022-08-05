const express = require("express");
const app = express();
const cors = require("cors");
const axios = require('axios');
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});

//Serving static files
app.use(express.static('public'));

//Calling the News api with axios
axios.get('https://newsapi.org/v2/everything?q=stock&apiKey=2de0f9b05b0b49f990cc46f7dd0546b6')
  .then(result => {
      console.log(result.data);
  })
  .catch(error => {
      console.log(error);
  });



