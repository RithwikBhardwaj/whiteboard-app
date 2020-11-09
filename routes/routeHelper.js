//dependencies
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Room = require('../models/Room');

//response to requests
module.exports = {
  returnRooms: async (req, res) => {
    await Room.find({}, (err, rooms) =>
      err != null ? res.status(401).send('err') : res.status(200).send(rooms)
    )
  }
};