import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="aboutcontainer">
            <h1>About the Creator</h1>
            <img className="profileImage" src="https://res.cloudinary.com/dl2ribpco/image/upload/v1557245379/ChaseTheSpace/linkedin_ekkfus.jpg" alt="" />
            <div className="textbox">
            The creator of this app was immensely sleep deprived during its creation, and under a RIDICULOUS time constraint, so please be kind when evaluating the essence of this game. She hopes you can brush up on your math skills, and have fun!
            </div>
            <div>
            <Link to='/'>
                <button className="homeButtons aboutButtons">Home</button>
            </Link>
          </div>
        </div>
    );
};
export default About;
