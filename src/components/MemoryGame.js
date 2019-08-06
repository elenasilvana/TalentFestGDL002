import React, { Component } from 'react';
import ShowCard from './ShowCard';
import * as CARDIMG  from '../Data/IMAGES';
import Nav from './NavBar';
<<<<<<< HEAD
import { timingSafeEqual } from 'crypto';
=======
import a from '../ImagesTrivia/a-1.png';
import n from '../ImagesTrivia/n-1.png'
import './cards.css'
>>>>>>> 5046f6f97c601792490cd533f501601117e7cab4

class MemoryGame extends Component {
  constructor(props){
    this.state={}
  }
  render() {
    //CARDIMG.SINGSLETTERS.map((card)=>{console.log(card)});
    return (
      <div>
        <Nav />
<<<<<<< HEAD
        <ShowCard />
        {CARDIMG.SINGSLETTERS.map((card, index) => (
          <ShowCard img={card} />
        ))}
=======
        <section className="container-lsm">
          <h5 className="title-lsm">Trivia</h5>

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
>>>>>>> 5046f6f97c601792490cd533f501601117e7cab4
      </div>
    );
  }
}

export default MemoryGame;