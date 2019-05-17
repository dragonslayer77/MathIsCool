import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Game from './Game';
import Home from './Home';
import About from './About';

class App extends Component {
  render(){
    return (
      <div className="">
        <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Game" component={Game} />
                <Route path="/About" component={About}/>
        </Switch>
      </div>
    );
  }
}

export default App;
