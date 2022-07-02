const app = require('express')();
const bodyParser = require('body-parser');

// parse application/json
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.listen(3000)