const express = require('express');
const { default: mongoose } = require('mongoose');
const routerApi = require('./routes');
const app = express();

const port = 3000;
require('dotenv').config();

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

app.use(express.json());

routerApi(app);

// Test endpoint
// app.get('/', (rea, res) => {
//   res.send('Hola mundo');
// });

//Connection to Mongo
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log('Successfully connected to mongo'))
  .catch((err) => console.error(err));
