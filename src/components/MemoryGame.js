import React, { Component } from 'react';
import ShowCard from './ShowCard';
import * as CARDIMG  from '../Data/IMAGES';
import Nav from './NavBar';
import a from '../ImagesTrivia/a-1.png';
import PropTypes from 'prop-types';
import './cards.css'

function MemoryGame(props) {
  return (
    <h2 className="question">{props.content}</h2>
  );
}

MemoryGame.propTypes = {
  content: PropTypes.string.isRequired
};

export default MemoryGame;