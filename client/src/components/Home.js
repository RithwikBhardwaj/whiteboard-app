import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>
        Collaborative Whiteboard
      </h1>
      <p>
        Welcome to our whiteboard application. Our goal was to create something that allows us to connect virtually with others. Much like other applications like zoom our app allows everyone to view and add to your work. In order to start login and either join a server or create your own.
      </p>
      <Link to='/login'>
        <h4>Login</h4>
      </Link>
    </div>
  );
}

export default Home;