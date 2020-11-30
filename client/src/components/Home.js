import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>
        Home
      </h1>
      <Link to='/login'>
        <h4>Login</h4>
      </Link>
    </div>
  );
}

export default Home;