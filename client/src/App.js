import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/Home';
import PathError from './components/pathError';
import Board from './components/Board';
import Canvas from './components/Canvas';
import Login from './components/Login';
import Host from './components/HostRoom'
import { useState } from 'react';


function App() {
  const [local, setLocal] = useState({
    username: '',
    room: ''
  })

  function updateLocal(data) {
    setLocal(
      local.username = data.username,
      local.room = data.name
      )
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path='/login'>
          <Login/>
        </Route>
        <Route exact path='/host'>
          <Host updateLocal = {updateLocal}
        />
        </Route>
        <Route exact path='/join'>
          <Home/>
        </Route>
        <Route exact path="/board">
          <Board>
            <Canvas />
          </Board>
        </Route>
        <Route path='*'>
          <PathError/>
        </Route>
      </Switch>


      {local.room !== '' && <Redirect to='/board' />}
    </Router>
  );
}


export default App;
