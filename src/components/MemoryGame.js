import React, { Component } from 'react';
import ShowCard from './ShowCard';
import * as CARDIMG  from '../Data/IMAGES';
import Nav from './NavBar';



class MemoryGame extends Component {

    
    render(){

        //CARDIMG.SINGSLETTERS.map((card)=>{console.log(card)});
        return(
            
        <div>
            <Nav />
            <ShowCard />
                {
                   CARDIMG.SINGSLETTERS.map((card,index) =>(
                    <ShowCard
                    img={card}/>  
                   ))
                   
                }
            
            
            </div>
        )
    }
}

export default MemoryGame;