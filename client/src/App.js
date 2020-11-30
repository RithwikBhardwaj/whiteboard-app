import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import PathError from './components/pathError';
import Board from './components/Board';
import Canvas from './components/Canvas';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path="/board">
          <Board>
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
