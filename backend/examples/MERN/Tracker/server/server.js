const express = require('express');
const app = express();

const port = 8000;

const cors = require('cors');
app.use(cors());

app.use(express.json());

require('./config/database');
require('./config/routes')(app);

app.listen(port,() => {
  console.log(`App is running on ${port}`)
});