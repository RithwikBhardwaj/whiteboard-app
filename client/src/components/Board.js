import React, { useEffect, useState } from 'react'

function Board({ children, room, username}) {

  return (
    <div>
      <h3>Tool Bar</h3>
      {children}
    </div>
  )
}

export default Board;

