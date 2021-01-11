const express = require('express');
const cors = require('cors');
const coneRouter = require('./routes/coneRoutes');

const app = express();

app.use(cors());
app.use(express.static('dist'));
app.use('/api/v1/cone', coneRouter);

module.exports = app;
