import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
  render(){
    return (
      <div className="bodycontainer">
      <h1>Math is Cool!</h1>
      <div className="bothButtons">
      <Link to='/Game'>
      <button className="homeButtons">START</button>
      </Link>
      <Link to="/About">
      <button className="homeButtons" >ABOUT</button>
      </Link>
      </div>
      <h3>You will have 10 seconds to answer each question, good luck ;)</h3>
      </div>
    );
  }
}

export default Home;