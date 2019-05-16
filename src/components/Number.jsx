import React, { Component } from 'react';

class NumberButton extends Component { 
    constructor(props){
        super(props);
        this.state = {
            isSelected: false,
            isCorrect: false
        }
    }

    checkRightAnswer(){
        if (this.props.answer === this.props.correctAnswer){
            this.setState({
                isCorrect: true
            });
            this.props.onRightAnswer();
        }
    }
    handleSelect = () => {
        this.setState({
            isSelected: true
        })
        this.checkRightAnswer();
    }

    
    render(){
        const { answer, isCorrect} = this.props;
        // const classColor = `number ${this.props.isCorrect ? 'green' : ''} ${this.props.isAnsweredCorrectly && !this.props.isCorrect ? 'wrong' : ''} `
             const getClassColor = () => {
                 if(this.state.isCorrect){
                     return ' green';
                    } else if(this.state.isSelected && !isCorrect){
                        return ' wrong';
                    }
                }
                console.log(this.state.isSelected);
        return (
            <div>
                <div 
                className={` number ${getClassColor()}`}
                onClick={this.handleSelect} >{answer}
                </div>
            </div>

        );
    }
}

export default NumberButton;