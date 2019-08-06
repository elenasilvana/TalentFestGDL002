import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import ShowCard from './ShowCard';
import * as CARDIMG from '../Data/IMAGES';
import './cards.css';
import './lsm.css';

class AlphabetPage extends Component {
  render() {
    return (
<<<<<<< HEAD
      <container>
          <NavBar />
        <div>
          {
            CARDIMG.SINGSLETTERS.map((card, index) => (
              <ShowCard
                img={card} />
            ))
          }
        </div>
      </container>
=======
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
>>>>>>> 0668c8a8e2e9ad86a727ce5f395e602866c42a7f
    );
  }
}

export default AlphabetPage;