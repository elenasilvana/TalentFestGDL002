import React, { Component } from 'react';

class ShowCard extends Component {
    render() {
        return (
            <div class="row">
            <div class="col s12 m6">
              <div class="card">
                <div class="card-image">
                  <img src="images/sample-1.jpg"></img>
                  <span class="card-title">Card Title</span>
                  <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                </div>
                <div class="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>
              </div>
            </div>
          </div>
                );
            }
}
export default ShowCard;