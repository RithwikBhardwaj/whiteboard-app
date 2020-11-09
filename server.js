//dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/routes');

//Connect to cloud server
mongoose.connect('mongodb+srv://Software_Dev_Club:63eEdBkh7SUEmajE@whiteboard-app.jphre.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', ()=> {
  console.log('Mongoose is connected to Atlas');
});

//needed for socket.io
const server = require('http').Server(app)
const io = require('socket.io')(server);


//middleware to parse json
app.use(express.json());

//Pust all routes to seperate routes.js
app.use('/', routes);


//turn on backend server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));