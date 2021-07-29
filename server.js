const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');

const users = require('./routes/api/user');
const exercises = require('./routes/api/exercise');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());
app.use(cors());

//DB Config
const mongoURI = 'URL FROM MONGODB ATLAS';

//Connect to mongo
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/users', users);
app.use('/api/exercises', exercises);

  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Server started at port:${port}`));