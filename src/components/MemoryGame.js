import React, { Component } from 'react';
const SIGNS = [
    {
    "img":
    require("./src/components/Imagenes/a.png;"),
    "letter":
    "a" 
    },
    {
        "img":
       require("./src/components/Imagenes/b.png;"),
        "letter":
        "b" 
        },
        {
            "img":
            require("./src/components/Imagenes/c.png;"),
            "letter":
            "c" 
            }
            
        
    
]
class MemoryGame extends Component {
    render(){
        console.log(SIGNS);
        return(
        <div>juega{SIGNS[1].img}</div>
        )
    }
}

export default MemoryGame;