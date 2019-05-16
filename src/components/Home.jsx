import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
  render(){
    return (
      <div className="bodycontainer">
      <h1>Math is Cool!</h1>
      <div className="bothButtons">
      <Link to= '/Game'>
      <button className="homeButtons">START</button>
      </Link>
      <button className="homeButtons" >ABOUT</button>
      </div>
      <h3>You will have 10 seconds to answer the questions, good luck ;)</h3>
      </div>
    );
  }
}

export default Home;