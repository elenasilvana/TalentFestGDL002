import React, { Component } from 'react';
import ShowCard from './ShowCard';
import letterA from '../Images/a.png';

/*const SIGNS = [
    {
    "img":
    require('./src/Imagenes/a.png'),
    "letter":
    "a" 
    },
    {
        "img":
       require('./src/Imagenes/b.png'),
        "letter":
        "b" 
        },

        {
            "img":
            require('./src/Imagenes/c.png'),
            "letter":
            "c" 
            }
            
        
    
]*/
class MemoryGame extends Component {
    render(){
        console.log('');
        return(
            <div>
            <img src={`./Imagenes/c.png`}></img>
            <ShowCard
            img={letterA}
            />
            </div>
        )
    }
}

export default MemoryGame;