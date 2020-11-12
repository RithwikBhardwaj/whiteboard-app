import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import PathError from './components/pathError'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path='*'>
          <PathError/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
