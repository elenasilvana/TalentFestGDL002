import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import ShowCard from './ShowCard';
import * as CARDIMG from '../Data/IMAGES';
import './cards.css';
import './lsm.css';

class AlphabetPage extends Component {
  render() {
    return (
      <section>

 
        <NavBar />
        <section className="container-lsm">
          <h5 className="title-lsm">Alfabeto</h5>

          {/* <section className="info-container"></section> */}
  
      <div className="container-cards">
        {
          CARDIMG.SINGSLETTERS.map((card, index) => (
            <ShowCard
            img={card} />
            ))
          }
      </div>
      </section>
          </section>
    );
  }
}

export default AlphabetPage;