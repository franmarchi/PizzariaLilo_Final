
const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes');

const app = express();
app.use(express.json());
connectDB();
app.use('/api', routes);

module.exports = app;
