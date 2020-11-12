//dependencies
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Room = require('../models/Room');

//response to requests
module.exports = {
  //return all room names + users in each room
  returnRooms: async (req, res) => {
    const rooms = await Room.find();
    rooms.length === 0 ? res.status(404).send('There are no rooms available'):
    res.status(200).json({
      Rooms: rooms.forEach(room => {room.name}),
      Users: rooms.forEach(Users => user.username)
    })
  }
};