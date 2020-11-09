//dependencies
const express = require('express');
const router = require('express-promise-router')();

//push server response to routeHelper.js
const routeHelper = require('./routeHelper.js');

router.route('/Room')
  .get(routeHelper.returnRooms);

  module.exports = router;