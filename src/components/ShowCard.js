import React, { Component } from 'react';
import './cards.css'

class ShowCard extends Component {
    render() {
        return (
            <div className="card img-cards">
              <div className="card-image">
                <img alt="sordo" src={this.props.img} />
              </div>
           </div>
                );
            }
}
export default ShowCard;