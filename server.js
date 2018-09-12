const express = require('express');
const app = express();
const cors = require('cors');
const errorhandler = require('errorhandler');
const morgan = require('morgan');
const bodyParser = require('body-parser')


const PORT = process.env.PORT || 4000;
app.use(morgan('dev'));
app.use(errorhandler());
app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, ()=>{
  console.log(`Server listening on port ${PORT}`)
});

module.exports = app;
