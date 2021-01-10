const express = require('express');
const coneRouter = require('./routes/coneRoutes');

const app = express();

app.use(express.json());
app.use(express.static('dist'));
app.use('/api/v1/cone', coneRouter);

module.exports = app;
