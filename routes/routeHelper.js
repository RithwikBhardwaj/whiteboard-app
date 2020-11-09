//dependencies
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Room = require('../models/Room');

//response to requests
module.exports = {
  returnRooms: async (req, res) => {
    res.status(200).send(
      await Room.find({})
    );
  }
};