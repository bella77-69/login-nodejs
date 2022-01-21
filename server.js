const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false})
);
app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true } 
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => console.log(`Server up and running on port ${PORT} ! `));