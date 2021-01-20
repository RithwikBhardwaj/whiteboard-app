import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function JoinRoom() {
  const [Rooms, setRooms] = useState()

  const getRooms = async () => {
    const fetch = await axios.get('rooms')
    setRooms(fetch.data)
  }
  useEffect(() => {
    getRooms()
  }, [])
  
  return (
    <div>
      <ul>
        
      </ul>
    </div>
  )
}
