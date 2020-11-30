//dependencies
const mongoose = require('mongoose');

//schema for a user
const userSchema = new mongoose.Schema({
  _id: String,
  Socket: String,
  status: {
    type: String,
    default: 'Active'
  }
});

//schema for a data packet
const packetSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  tool: {
    type: String,
    required: true
  },
  cordinates: {
    type: [{
      type: [Number],
      // if needed
      /*
      min: 
     max:
      */
    }],
    required: true
  }
});

//schema for a room
const roomSchema = new mongoose.Schema({
  _id: String,
  host: String,
  password: {
    type: String,
    required: true
  },
  users: [ userSchema ],
  packages: [ packetSchema ]
});

module.exports = mongoose.model('room', roomSchema);