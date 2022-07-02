const app = require('express')();
const bodyParser = require('body-parser');
const path = require('path');

// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.send('Hello World');
})

module.exports = { app }