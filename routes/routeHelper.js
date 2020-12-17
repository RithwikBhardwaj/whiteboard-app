//dependencies
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Room = require('../models/Room');

//response to requests
module.exports = {
  //return all room names
  returnRooms: async (req, res) => {
    let rooms = await Room.find();
    //check if there are rooms
    if(rooms.length === 0)
      res.status(200).send('There are no rooms available');
    else{
      let roomIds = [];
      rooms.forEach(room => roomIds.push(room._id))
      res.status(200).send(roomIds)
    }
  },
  //create room
  createRoom: async (req, res) => {
    //define params
    let roomName = req.body.name;
    let hostName = req.body.username;
    let roomPassword = req.body.password;
    
    //check if room already exists
    if((await Room.findOne({_id: roomName})) !== null)
      res.status(400).send('Room already exists');
    else{
      //create room
      let room = new Room({
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
  //return users in a specific room
  returnUsers: async (req, res) => {
    //parameters
    let { id } = req.params;
    let room = await Room.findOne({_id: id});
    
    if(room === null){
      res.status(404).send('Room not found');
    }
    else{
      let people = [];
      (room.users).forEach(user => {people.push(user._id)});
      console.log("Logged Output: people", people)
      res.status(200).send({
        host: room.host,
        users: people
      });
    }
  },
};