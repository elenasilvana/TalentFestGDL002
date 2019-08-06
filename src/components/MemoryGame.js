import React, { Component } from 'react';
import ShowCard from './ShowCard';
import * as CARDIMG  from '../Data/IMAGES';
import Nav from './NavBar';
import a from '../ImagesTrivia/a-1.png';

class MemoryGame extends Component {
  render() {
    return (
      <div>
        <Nav />
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
                
            <button className="waves-effect waves-light btn btn-ver-mas" >Siguiente</button>
          </section>
        </section>
      </div>
    );
  }
}

export default MemoryGame;