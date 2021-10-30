const cors = require('cors');
const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes');


app.use(express.json());
app.use(cors()); //app express use cors
app.use(routes);


app.listen(port, () => {
  console.log(`Farm Jobs app listening at http://localhost:${port}`)
})