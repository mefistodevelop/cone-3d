const express = require('express');
const { getPoints } = require('../handlers/coneHandlers');

const coneRouter = express.Router();

coneRouter.route('/').get(getPoints);

module.exports = coneRouter;
