import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NumberButton from './Number';
import { shuffle } from 'lodash';
import Timer from 'react-compound-timer';
import Popup from './Popup';
import uuid from "uuid";

class Game extends Component {
    constructor(props){
      super(props);
      this.state = {
        question: '',
        correctAnswer: 0,
        wrongAnswers: [],
        shuffledAnswers: [],
        gameStatus: 'new',
        isSelected: false,
        isCorrect: false,
        isAnsweredCorrectly: false,
        showPopup: false
      }
    }
    
    calculateResult = () => {
      // // console.log(this.randomDataSet(10, 0, 100));
      // const randomUniques = this.randomDataSet(10, 0, 100);
      // const randomUnique = this.randomUniques.map(randomUnique =>
      //   Math.floor(randomUniques()))
      //   console.log(randomUnique);
      const randomNumber1 = Math.floor(Math.random() * 30);
      const randomNumber2 = Math.floor(Math.random() * 20);
      const randomNumber3 = Math.floor(Math.random() * 30);
      const randomNumber4 = Math.floor(Math.random() * 40);
      const randomNumber5 = Math.floor(Math.random() * 20);
      const operators = ['+','-','/','x'];
      const opindex = Math.floor(Math.random()*4);
      let result;
      switch(opindex){
          case 0: result = randomNumber1 + randomNumber2; break;
          case 1: result = randomNumber1 - randomNumber2; break;
          case 2: result = randomNumber1 / randomNumber2; break;
          case 3: result = randomNumber1 * randomNumber2; break;
          default:
      };
    //   const shuffledAnswers = [this.correctAnswer]
    //   while(shuffledAnswers.length < 4){
    //     var r = Math.floor(Math.random()*100) + 1;
    //     if(shuffledAnswers.indexOf(r) === -1) shuffledAnswers.push(r);
    // }
      this.setState({
        question: `${randomNumber1} ${operators[opindex]} ${randomNumber2} = `,
        correctAnswer: Math.floor(result),
        wrongAnswers: [randomNumber3, randomNumber4, randomNumber5],
        shuffledAnswers: shuffle([randomNumber3, randomNumber4, randomNumber5, Math.floor(result)])
      })
    }
      
      componentDidMount(){
        this.calculateResult();
      }

      // call set state and set timer
      handleRightAnswerRecieved = () => {
        this.setState(
          () => {
            return {isAnsweredCorrectly: true }
          },
          () => {
            setTimeout(() => {
              this.calculateResult();
              document.getElementById('resetbtn').click();
            }, 1000)
          }
          );
        // this.calculateResult();
      }

      // randomDataSet(dataSetSize, minValue, maxValue) {
      //   return new Array(dataSetSize).fill(0).map(function() {
      //     return Math.random() * (maxValue - minValue) + minValue;
      //   });
      // }

      timeIsUp(){
        this.setState({
          showPopup: !this.state.showPopup
        })
        // window.location.replace("/")
      }
      
      render(){
        const { 
          question,
          shuffledAnswers,
          isSelected,
          correctAnswer,
          isCorrect,
          isAnsweredCorrectly
        } = this.state;
        
        return (
          <div className="game gamecontainer">
        {this.state.showPopup ?  
          <Popup  />  
          : null  
          } 
        <div className="intro">
         <h3> Do your best to answer the question as quick as possible, if your answer is wrong it will appear red</h3>
        </div>
        <div className="target">{question}</div>
        <div className="challenge-numbers">
          {shuffledAnswers.map(shuffledAnswer => <NumberButton 
            key={uuid.v4()} 
            isCorrect={isCorrect} 
            answer={shuffledAnswer} 
            isSelected={isSelected} 
            isAnsweredCorrectly={isAnsweredCorrectly}
            correctAnswer={correctAnswer}
            onRightAnswer={this.handleRightAnswerRecieved} />
          )}

        </div>
        <div className="footer">
          <div className="timer-value">
          <Timer
            initialTime={10000}
            direction="backward"
            checkpoints={[
              {
                  time: 0,
                  callback: () => this.timeIsUp(),
              }
          ]}
        >
          {({ reset }) => (
              <React.Fragment>
                  <Timer.Seconds /> 
                  <button className="resetbtn" id="resetbtn" onClick={reset}>Reset</button>
              </React.Fragment>
          )}
        </Timer>
          </div>
          <div>
            <Link to='/'>
                <button className="homeButtons">Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;