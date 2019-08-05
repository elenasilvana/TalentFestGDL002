import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import ShowCard from './ShowCard';
import * as CARDIMG from '../Data/IMAGES';

class AlphabetPage extends Component {
  render() {
    return (
      <container>

      <div>
        <NavBar />
      </div>
      <div>
        {
          CARDIMG.SINGSLETTERS.map((card, index) => (
            <ShowCard
            img={card} />
            ))
          }
      </div>
          </container>
    );
  }
}

export default AlphabetPage;