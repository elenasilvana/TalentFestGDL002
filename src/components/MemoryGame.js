import React from 'react';
import ShowCard from './ShowCard';
import Data from '../Data/IMAGES';
import Nav from './NavBar';
import './cards.css';
import Card from './Card';


class MemoryGame extends React.Component {

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
		if (this.props.Data.flipCount !== 2) return;

		this.props.updateStore(state => {
			let newState = Object.assign({}, state);

			if (newState.Data.flipped[0].image !== newState.gameData.flipped[1].image) {

				newState.board[newState.Data.flipped[0].y][newState.Data.flipped[0].x].flipped = !newState.board[newState.Data.flipped[0].y][newState.Data.flipped[0].x].flipped;
				newState.board[newState.Data.flipped[1].y][newState.Data.flipped[1].x].flipped = !newState.board[newState.Data.flipped[1].y][newState.Data.flipped[1].x].flipped;
				newState.Data.flipped = [];

				newState.Data.flipCount = 0;

				newState.Data.playerTurn = newState.Data.playerTurn === 1 ? 2 : 1;  
			}
			else{
				newState.Data.flipped = [];
				newState.Data.flipCount = 0;
				newState.Data[`player-${newState.Data.playerTurn}`].score += 2;

				if (newState.Data['player-1'].score + newState.Data['player-2'].score === 20) {
					let score1 = newState.Data['player-1'].score;
					let score2 = newState.Data['player-2'].score;

					newState.Data.end = true;
					newState.Data.winner = score1 === score2 ? 0 : (score1 > score2 ? 1 : 2); 
				}
			}		

			return newState;
		});
	}

	render() {
		return (
			<div className="MemoryGame" style={this.props.style}>
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

export default MemoryGame;