//dependencies
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

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
  coordinates: {
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


roomSchema.pre('save', async function (next) {
  try {
    
    const passwordHash = await bcrypt.hash(this.password, 12);
    // Re-assign hashed version over original, plain text password
    this.password = passwordHash;
    next();
  } catch (error) {
    next(error);
  }
});

roomSchema.methods.isValidPassword = async function (newPassword) {
  try {
    return await bcrypt.compare(newPassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
}


module.exports = mongoose.model('room', roomSchema);