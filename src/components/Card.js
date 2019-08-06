import React from 'react';
import ReactCardFlip from "react-card-flip";
import { A } from '../Data/IMAGES';


const Card = ({ id, isFlipped, handleClick, cardNumber }) => (
  <ReactCardFlip isFlipped={isFlipped} flipSpeedBackToFront={1} flipSpeedFrontToBack={1} >
    <button id={id} className={`card card-front ${cardNumber !== -1 ? "" : "hide-card"}`} onClick={handleClick} key="front">
      
    </button>

    <button id={id} className={`card card-back ${cardNumber !== -1 ? "" : "hide-card"}`} onClick={handleClick} key="back">
      { cardNumber } <img src={`${A}`}/>
    </button>
  </ReactCardFlip>
);

export default Card;