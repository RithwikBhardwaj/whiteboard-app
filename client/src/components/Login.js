import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch} from 'react-router-dom';
import Home from './Home';

function Login() {
  const [rooms, setRooms] = useState([])
  let {url, path} = useRouteMatch()
  
  useEffect(() => {
    //fetch all rooms from backend
    const getRooms = async () => {
      setRooms(axios.get('/rooms'))
    }
    
    try {
      getRooms()
    } catch (error) {
      if(error.response){
        if(error.response.data === 'There are no rooms available'){
          setRooms([])
        }
        else{
          console.log(error.response.data);
        }
      }
      else{
        console.log(error);
      }
    }


  }, []);

  return (
    <div>
      {rooms.length!==0? 
      <div>
        <p>There are no joinable rooms</p>
        <Link to={`${url}/host`}>
        <h3>Create Room</h3>
        </Link>
      </div>:
      <div>
        <Link to={`${url}/host`}>
        <h3>Join Room</h3>
        </Link>
        <Link to={`${url}/host`}>
        <h3>Create Room</h3>
        </Link>
      </div>
    }


      <Router>
      <Switch>
        <Route path= {`${path}/join`}>
          <Home />
        </Route>
        <Route path= {`${path}/host`}>
        <Home />
        </Route>
      </Switch>
    </Router>
    </div>
  )
}

export default Login;