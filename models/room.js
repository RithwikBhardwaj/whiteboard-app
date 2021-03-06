//dependencies
const mongoose = require('mongoose');

//schema for a user
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  socket: String,
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
      type: Number,
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
  host: {
    type: String,
    required: true
  },
  password: String,
  users: [ userSchema ],
  packages: [ packetSchema ]
});

module.exports = mongoose.model('room', roomSchema);