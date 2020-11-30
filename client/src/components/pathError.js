import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function pathError() {
  return (
    <div>
      <h1>This is not the page you are looking for</h1>
      <Link to='/'>
        <h3>
          Return Home
        </h3>
      </Link>
    </div>
  );
}

export default pathError;
