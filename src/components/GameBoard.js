/* Modules */
import React from 'react';

/* Components */
import Card from './Card'

/* Style */
// import './scss/GameBoard.scss'

class GameBoard extends React.Component {

	constructor(props) {
		super(props);
		
		this.flipCard = this.flipCard.bind(this);
		this.updateGameStatus = this.updateGameStatus.bind(this);
	}

	flipCard(card) {
		if (card.flipped || this.props.gameData.flipCount === 2) return;
		
		this.props.updateStore(state => {
			let newState = Object.assign({}, state);

			newState.gameData.timeout = 5;

			newState.gameData.flipCount++;
			
			newState.gameData.flipped.push(card);
		
			newState.board[card.y][card.x].flipped = !newState.board[card.y][card.x].flipped;
			
			return newState;
		}, () =>{
			/* Timeout for the CSS transition to be executed */
			setTimeout(this.updateGameStatus, 1000);
		});
	}

	updateGameStatus(){
		if (this.props.gameData.flipCount !== 2) return;

		this.props.updateStore(state => {
			let newState = Object.assign({}, state);

			if (newState.gameData.flipped[0].image !== newState.gameData.flipped[1].image) {

				newState.board[newState.gameData.flipped[0].y][newState.gameData.flipped[0].x].flipped = !newState.board[newState.gameData.flipped[0].y][newState.gameData.flipped[0].x].flipped;
				newState.board[newState.gameData.flipped[1].y][newState.gameData.flipped[1].x].flipped = !newState.board[newState.gameData.flipped[1].y][newState.gameData.flipped[1].x].flipped;
				newState.gameData.flipped = [];

				newState.gameData.flipCount = 0;

				newState.gameData.playerTurn = newState.gameData.playerTurn === 1 ? 2 : 1;  
			}
			else{
				newState.gameData.flipped = [];
				newState.gameData.flipCount = 0;
				newState.gameData[`player-${newState.gameData.playerTurn}`].score += 2;

				if (newState.gameData['player-1'].score + newState.gameData['player-2'].score === 20) {
					let score1 = newState.gameData['player-1'].score;
					let score2 = newState.gameData['player-2'].score;

					newState.gameData.end = true;
					newState.gameData.winner = score1 === score2 ? 0 : (score1 > score2 ? 1 : 2); 
				}
			}		

			return newState;
		});
	}

	render() {
		return (
			<div className="GameBoard" style={this.props.style}>
				{
					this.props.board.map((row, y) => (
						<div className="row" key={y}>
						{
							row.map((card, x) => (
								<div className="col-3" key={x}>
									<Card {...card} onClick={() => this.flipCard(card)} /> 
								</div>
							))
						}
						</div>
					))
				}
			</div>
		);
	}
}

export default GameBoard;