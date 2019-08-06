import React from 'react';
import './cards.css';

const questionImage = require('../Images/a.png');
function Card({ image, flipped, onClick }) {
	return (
		<div className={`Card${!flipped ? ' flipped' : ''}`} {...{onClick}}>
			<img src={questionImage}  alt="card" />
			<div className="card__face card__face--front d-flex align-items-center">
				<img src={image}  alt="card" />
			</div>
			<div className="card__face card__face--back d-flex align-items-center">
				<img src={questionImage}  alt="card" />
			</div>
		</div>
	);
}

export default Card;