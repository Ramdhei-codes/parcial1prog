const express = require('express');
const billsRouter = require('./bills.router');

function routerApi(app) {
  const router = express.Router();

  app.use('/api/v1', router);
  router.use('/bills', billsRouter);
}

module.exports = routerApi;
