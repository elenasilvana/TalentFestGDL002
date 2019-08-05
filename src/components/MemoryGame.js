import React, { Component } from 'react';
import ShowCard from './ShowCard';
import Nav from './NavBar';
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
            
        <div><Nav />
            <ShowCard /></div>
        )
    }
}

export default MemoryGame;