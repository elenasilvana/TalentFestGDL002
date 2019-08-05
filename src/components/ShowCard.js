import React, { Component } from 'react';

class ShowCard extends Component {
    render() {
        return (
            <div class="row">
            <div class="col s6 m2">
              <div class="card">
                <div class="card-image">
                  <img src={this.props.img}></img>
                </div>
              </div>
            </div>
          </div>
                );
            }
}
export default ShowCard;