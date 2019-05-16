import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Game from './Game';
import Home from './Home';

class App extends Component {
  render(){
    return (
      <div className="">
        <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/game" component={Game} />
        </Switch>
      </div>
    );
  }
}

export default App;
