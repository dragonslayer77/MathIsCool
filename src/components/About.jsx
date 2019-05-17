import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="aboutcontainer">
            <h1>About the Creator</h1>
            <img className="profileImage" src="https://res.cloudinary.com/dl2ribpco/image/upload/v1557245379/ChaseTheSpace/linkedin_ekkfus.jpg" alt="" />
            <div className="textbox">
            The creator of this app was immensely sleep deprived during its creation, and under a RIDICULOUS time constraint, so please be kind when evaluating the essence of this game. She hopes you can brush up on your math skills, and have fun! - Isabella Fry
                <div className="">
                    <a href="https://www.linkedin.com/in/isabella-fry-5a1618182/" rel="noopener noreferrer" target="_blank" ><img className="iconspecs" src="https://cdn3.iconfinder.com/data/icons/sociocons/256/linkedin-sociocon.png" alt=""/></a>
                    <a href="https://github.com/dragonslayer77" rel="noopener noreferrer" target="_blank"><img className="iconspecs" src="https://image.flaticon.com/icons/png/128/25/25231.png" alt="" /></a>
                </div>
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
