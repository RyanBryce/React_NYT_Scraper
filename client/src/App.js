import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Nav from './Components/Nav';
import Saved from './Pages/Saved';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
