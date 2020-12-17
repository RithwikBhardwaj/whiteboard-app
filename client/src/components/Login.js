import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';

function Login() {
  const [rooms, setRooms] = useState([])
  
  useEffect(() => {
    //fetch all rooms from backend
    const getRooms = async () => {
     
      try {
        let fetch = await axios.get('rooms')
        if(fetch.data === 'There are no rooms available')
            setRooms([])
        else{
          setRooms(fetch.data)
        }
      } catch (error) {
        if(error.response){
          console.log(error.response.status);
          console.log(error.response.data);
          }
        else{
          console.log(error);
        }
    }
    
    }

    //run function
    getRooms()

  }, []);

  return (
    <div>

      {rooms.length === 0? 
      <div>
        <p>There are no joinable rooms</p>
        <Link to={`/host`}>Create Room</Link>
      </div>:
      <div>
        <Link to={`/join`}>Join Room</Link>
        <Link to={`/host`}>Create Room</Link>
      </div>
    }
    </div>
  )
}

export default Login;