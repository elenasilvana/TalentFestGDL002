import React, { Component } from 'react';
import ShowCard from './ShowCard';
import * as CARDIMG  from '../Data/IMAGES';
import Nav from './NavBar';
import GameBoard from './GameBoard';
const boardDimensions = { x: 4, y: 5 };

class MemoryGame extends Component {
  constructor (props) {
    super(props);

		this.setGameData = this.setGameData.bind(this);
		this.startTimeout = this.startTimeout.bind(this);
		this.resetGame = this.resetGame.bind(this);
		this.generateBoard = this.generateBoard.bind(this);
		this.getInitialState = this.getInitialState.bind(this);

		this.state = this.getInitialState(); 

		this.startTimeout();
  }
  getInitialState(){
		return { 
			board: this.generateBoard(), 
			gameData : {
				flipped : [],
				flipCount: 0,
				playerTurn: 1,
				end: false,
				winner: 0,
				timeout: 5,
				'player-1': { score: 0 },
				'player-2': { score: 0 }
			}
		};
  }

  generateBoard() {
		const cardImages = CARDIMG.SINGSLETTERS;
		
		/* Shuffle cardImages */
		cardImages.sort(() => Math.random() - 0.5);

		/* Generate Board */
		let board = new Array(boardDimensions.y);

		for (var y = 0; y < board.length; y++) {
			board[y] = new Array(boardDimensions.x);

			for (var x = 0; x < board[y].length; x++) {
				board[y][x] = {
					image: cardImages.pop(),
					flipped: false,
					y,
					x
				};
			}
    }
  }
    
    setGameData(fun, callback){
      this.setState(fun, callback);
    }
  
    startTimeout(){
      this.interval = setInterval(()=>{
        if (this.state.gameData.end) return clearInterval(this.interval);
  
        if(this.state.gameData.timeout === 0){
          this.setState(state => {
            let newState = Object.assign({}, state);
  
            if (newState.gameData.flipped[0]) {
              newState.board[newState.gameData.flipped[0].y][newState.gameData.flipped[0].x].flipped = !newState.board[newState.gameData.flipped[0].y][newState.gameData.flipped[0].x].flipped;
            }
  
            if (newState.gameData.flipped[1]) {
              newState.board[newState.gameData.flipped[1].y][newState.gameData.flipped[1].x].flipped = !newState.board[newState.gameData.flipped[0].y][newState.gameData.flipped[0].x].flipped;
            }
  
            newState.gameData.playerTurn =  state.gameData.playerTurn === 1 ? 2 : 1;
            newState.gameData.timeout =  5;
            newState.gameData.flipped =  [];
            newState.gameData.flipCount =  0;
  
            return newState;
          });
        }
        else{
          this.setState(state => {
            return {
              gameData : {
                ...state.gameData,
                timeout: state.gameData.timeout - 1
              }
            }
          });
        }
      }, 1000)
    }

    resetGame(){
      this.setState(this.getInitialState());
      clearInterval(this.interval);
      this.startTimeout();
    }
  
  render() {
    //CARDIMG.SINGSLETTERS.map((card)=>{console.log(card)});
    return (
      <div className="App container d-flex align-items-center flex-column">
				<GameBoard 
				updateStore={this.setGameData}
				board={this.state.board}
				gameData={this.state.gameData}
				
				style={ {'maxWidth': (window.innerHeight-60)+'px'}} 
				/>	
				{	
					this.state.gameData.end ?
					<p>
						{
							this.state.gameData.winner === 0 ?
							'Empataron' : `Gano el jugador #${this.state.gameData.winner}`
						}
					</p>
					:
					<p>
						Turno del jugador
						#{this.state.gameData.playerTurn}
					</p>
				} 
				<p>Tiempo restante {this.state.gameData.timeout} segundos</p>
				<h2>Puntaje</h2>
				<p>Jugador 1 => {this.state.gameData['player-1'].score} Puntos</p>
				<p>Jugador 2 => {this.state.gameData['player-2'].score} Puntos</p>
				<p>
					<button onClick={this.resetGame}>Reiniciar Juego</button>
				</p>
			</div>
      // <div>
      //   <Nav />
      //   <ShowCard />
      //   {CARDIMG.SINGSLETTERS.map((card, index) => (
      //     <ShowCard img={card} />
      //   ))}
      // </div>
    );
      }
}

export default MemoryGame;