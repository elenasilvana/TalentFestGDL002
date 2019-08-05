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
                {
                    //for(let i=0; i>)
                }
            <img src={require(`../Images/c.png`)}></img>
            <ShowCard
            img={letterA}
            />
            </div>
        )
    }
}

export default MemoryGame;