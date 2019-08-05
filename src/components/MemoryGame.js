import React, { Component } from 'react';
const SIGNS = require('../Data/data.JSON');
class MemoryGame extends Component {
    render(){
        console.log(SIGNS);
        return(
        <div>juega{SIGNS[1].img}</div>
        )
    }
}

export default MemoryGame;