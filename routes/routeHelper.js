//dependencies
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Room = require('../models/Room');

//response to requests
module.exports = {
  //return all room names
  returnRooms: async (req, res) => {
    const rooms = await Room.find();
    //check if there are rooms
    if(rooms.length === 0)
      res.status(404).send('There are no rooms available');
    else{
      let roomIds = [];
      rooms.forEach(room => roomIds.push(room._id))
      res.status(200).send(roomIds)
    }
  },
  createRoom: async (req, res) => {
    //define params
    const roomName = req.body.name;
    const hostName = req.body.username;
    const roomPassword = req.body.password;
    
    //check if room already exists
    if((await Room.findOne({_id: roomName})) !== null)
      res.status(400).send('Room already exists or missing room name');
    else{
      //create room
      const room = new Room({
        _id: roomName,
        // name: req.body.name,
        users: [{_id: hostName}],
        password: roomPassword,
        host: hostName
      });
      //add to Atlas server
      await room.save();
      res.status(200).send('Room Created')
    }
  },
};