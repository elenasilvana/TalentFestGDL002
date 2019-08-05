import React, { Component } from 'react';
import './cards.css'

class ShowCard extends Component {
    render() {
        return (
            <div class="card img-cards">
              <div class="card-image">
                <img alt="sordo" src={this.props.img} />
              </div>
           </div>
                );
            }
}
export default ShowCard;