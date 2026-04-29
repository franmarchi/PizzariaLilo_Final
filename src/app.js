
const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes');

const app = express();
app.use(express.json());
connectDB();
app.use('/api', routes);

const internalError = require('./middlewares/internalError');

app.use('/api', routes);

// sempre por último
app.use(internalError);

module.exports = app;


