import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NumberButton from './Number';
import { shuffle } from 'lodash';
import Timer from 'react-compound-timer';

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
        isAnsweredCorrectly: false
      }
    }
    
    calculateResult(){
      const randomNumber1 = Math.floor(Math.random() * 20);
      const randomNumber2 = Math.floor(Math.random() * 20);
      const randomNumber3 = Math.floor(Math.random() * 20);
      const randomNumber4 = Math.floor(Math.random() * 20);
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
        this.setState({
          question: `${randomNumber1} ${operators[opindex]} ${randomNumber2} = ?`,
          correctAnswer: Math.floor(result),
          wrongAnswers: [randomNumber3, randomNumber4, randomNumber5],
          shuffledAnswers: shuffle([randomNumber3, randomNumber4, randomNumber5, Math.floor(result)])
        })
      }
      
      componentDidMount(){
        this.calculateResult();
      }

      handleRightAnswerRecieved = () => {
        this.setState = {
          isAnsweredCorrectly: true
        }
        console.log('right answer has been given');
        window.location.reload();
      }

      timeIsUp(){
        alert('Time is up!');
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
        <div className="intro">
          You have 10 seconds to answer the question (if the answer is a decimal round)
        </div>
        <div className="target">{question}</div>
        <div className="challenge-numbers">
        {shuffledAnswers.map(shuffledAnswer => <NumberButton 
        key={shuffledAnswer} 
        isCorrect={isCorrect} 
        answer={shuffledAnswer} 
        isSelected={isSelected} 
        isAnsweredCorrectly={isAnsweredCorrectly}
        correctAnswer={correctAnswer}
        onRightAnswer={this.handleRightAnswerRecieved} />)}

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
            {() => (
                <React.Fragment>
                    <Timer.Seconds /> 
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