import React, { Component } from 'react';
import Nav from './NavBar';
import './cards.css';
import {QuizData} from '../Data/QuizData';

class MemoryGame extends Component {
  state = {
    userAnswer: null,
    currentQuestion: 0,
    options: [],
    quizEnd: false,
    score: 0,
    disabled: true
  };

  loadQuiz = () => {
    const { currentQuestion } = this.state;
    this.setState(() => {
      return {
        questions: QuizData[currentQuestion].question,
        options: QuizData[currentQuestion].options,
        answer: QuizData[currentQuestion].answer,
        images: QuizData[currentQuestion].image
      };
    });
  };
  componentDidMount() {
    this.loadQuiz();
  }
  nextQuestionHandler = () => {
    const { userAnswer, answer, score } = this.state;
    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    });
    if (userAnswer === answer) {
      let correct = "correcta";
      console.log("correcta");
      this.setState({ score: score + 1 });
    } else {
      console.log("incorrecta");
    }
    //console.log(this.state.currentQuestion);
  };

  componentDidUpdate(prevProps, prevState) {
    const { currentQuestion } = this.state;
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: QuizData[currentQuestion].question,
          options: QuizData[currentQuestion].options,
          answer: QuizData[currentQuestion].answer,
          images: QuizData[currentQuestion].image
        };
      });
    }
  }

  checkAnswer = answer => {
    this.setState({ userAnswer: answer, disabled: false });
  };

  finishHandler = () => {
    if (this.state.currentQuestion === QuizData.length - 1) {
      this.setState({ quizEnd: true });
    }
  };

  render() {
    const {
      questions,
      options,
      currentQuestion,
      userAnswer,
      quizEnd,
      images
    } = this.state;
    if (quizEnd) {
      return (
        <div>
          <Nav />
          <div className="final-score">
          <p className="score-title">
            Terminaste, tu resultado final es de {this.state.score} aciertos
          </p>
          </div>

        </div>
      );
    }
    return (
      <div>
        <Nav />
        <section className="container-lsm">
          <h5 className="title-lsm">Trivia</h5>
          <div className="question-container">
            <p className="score-counter">{`pregunta ${currentQuestion} de ${QuizData.length -
              1}`}</p>
            <p className="score-title">{questions}</p>

            <img className="image-trivia" src={images} />
            {options.map(option => (
              <p
                className={` select-text info-sordo text-select ${
                  userAnswer === option ? "selected" : null
                }`}
                onClick={() => this.checkAnswer(option)}
                key={option.id}
              >
                {option}
              </p>
            ))}
            <p id="correct">{}</p>
            {currentQuestion < QuizData.length - 1 && (
              <button
              className="waves-effect waves-light btn btn-next"
                disabled={this.state.disabled}
                onClick={this.nextQuestionHandler}
              >
                siguiente
              </button>
            )}

            {currentQuestion === QuizData.length - 1 && (
              <button
              className="waves-effect waves-light btn btn-next"
               onClick={this.finishHandler}>Terminar</button>
            )}
          </div>
          <section />
        </section>
      </div>
    );
  }
}

export default MemoryGame;