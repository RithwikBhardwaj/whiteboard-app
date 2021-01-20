import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/Home';
import PathError from './components/pathError';
import Board from './components/Board';
import Canvas from './components/Canvas';
import Login from './components/Login';
import Host from './components/HostRoom'
import Join from './components/JoinRoom'


function App() {

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
          <Host />
        </Route>
        <Route exact path='/join'>
          <Join/>
        </Route>
        <Route exact path="/board">
          <Board >
            <Canvas />
          </Board>
        </Route>
        <Route path='*'>
          <PathError/>
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
