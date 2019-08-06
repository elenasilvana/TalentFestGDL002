import React, { Component } from 'react';
import ShowCard from './ShowCard';
import * as CARDIMG from '../Data/IMAGES';
import Nav from './NavBar';
import a from '../ImagesTrivia/a-1.png';
import n from '../ImagesTrivia/n-1.png';
import './cards.css';
import {QuizData} from '../Data/QuizData';

class MemoryGame extends Component {
    state = {
      userAnswer: null,
      currentQuestion: 0,
      options: [],
      quizEnd: false
    }
  
  loadQuiz = () => {
    const { currentQuestion } = this.state;
    this.setState(() => {
      return {
        questions: QuizData[currentQuestion].question,
        options: QuizData[currentQuestion].options,
        answer: QuizData[currentQuestion].answer
      }
    })
  }
  componentDidMount() {
    this.loadQuiz();
  }
  nextQuestionHandler = () => {
    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    })
    //console.log(this.state.currentQuestion);
  }

  componentDidUpdate(prevProps, prevState){
    const {currentQuestion} = this.state;
    if(this.state.currentQuestion !== prevState.currentQuestion){
      this.setState(()=>{
        return {
          questions: QuizData[currentQuestion].question,
          options: QuizData[currentQuestion].options,
          answer: QuizData[currentQuestion].answer
        }
      })
    }
  }
  
checkAnswer = (answer) => {
  this.setState({userAnswer:answer})

}

finishHandler = () => {
  if(this.state.currentQuestion === QuizData.length -1) {this.setState({quizEnd :true})}
}

  render() {
    const { questions, options, currentQuestion, userAnswer, quizEnd } = this.state
    if(quizEnd){
      return(
        <div>
          <h3>Terminaste</h3>
        </div>
      )
    }
    return (
      <div>
        <Nav />
        <section className="container-lsm">
          <h5 className="title-lsm">Trivia</h5>
          <div>
            <h4>{questions}</h4>
            <span>{`pregunta ${currentQuestion} de ${QuizData.length - 1}`}</span>
            {options.map(option=>(
              <p className={`text-select ${userAnswer === option ? 'selected':null}`} onClick={ () => this.checkAnswer(option)} key={option.id} > 
                {option}
              </p>

            ))}
            {currentQuestion < QuizData.length - 1 && <button
            onClick={this.nextQuestionHandler}>
              siguiente

            </button>}
            
            {currentQuestion === QuizData.length -1 && <button onClick={this.finishHandler}>Terminar
            </button>}
          </div>
          <section className="info-container">
            <img className="image-sordo" src={a} />
            <section className="info-ver-mas">
              <p className="flow-text info-sordo">
                ¿Qué letra representa la seña?
              </p>

              <select>
                <option value="" disabled selected>
                  Selecciona la opción correcta
                </option>
                <option value="1">A</option>
                <option value="2">E</option>
                <option value="3">J</option>
              </select>
            </section>

            {/* <button className="waves-effect waves-light btn btn-siguiente" >Siguiente</button> */}
          </section>

          <section className="info-container">
            <img className="image-sordo" src={n} />
            <section className="info-ver-mas">
              <p className="flow-text info-sordo">
                ¿Qué letra representa la seña?
              </p>

              <select>
                <option value="" disabled selected>
                  Selecciona la opción correcta
                </option>
                <option value="1">A</option>
                <option value="2">E</option>
                <option value="3">J</option>
              </select>
            </section>

            {/* <button className="waves-effect waves-light btn btn-siguiente" >Siguiente</button> */}
          </section>

        </section>
      </div>
    );
  }
}

export default MemoryGame;