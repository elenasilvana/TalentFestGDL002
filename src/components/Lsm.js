
import React, { Component } from 'react';
import Nav from './NavBar';
import './lsm.css'
import imageLsm from '../ImagesLSM/sordo.jpeg';

class LsmPage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <section className="container-lsm">
          <h5 className="title-lsm">Acerca del LSM</h5>

          <section className="info-container">
            <img className="image-sordo" src={imageLsm} />
            <section className="info-ver-mas">
              <p className="flow-text info-sordo">
                La Lengua de Señas Mexicana o LSM, es el medio de comunicación
                en comunidad Sorda en las regiones urbanas y rurales de México.
                Es el idioma más utilizado, de 87.000 a 100.000 señantes.
              </p>
              <a
                href="https://www.conapred.org.mx/documentos_cedoc/DiccioSenas_ManosVoz_ACCSS.pdf"
                target="_blank"
                className="waves-effect waves-light btn btn-ver-mas"
              >
                Ver más
              </a>
            </section>
          </section>
        </section>
      </div>
    );
  }
}

export default LsmPage;