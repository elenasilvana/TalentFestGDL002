import React  from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import { HashRouter as BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import AlphabetPage from './components/Alphabet';
import MemoryGamePage from './components/MemoryGame';
import LsmPage from './components/Lsm';



const App = () => {
    return (
      <BrowserRouter>
    <Switch>
      <Route exact path='/' component={AlphabetPage} />
      <Route path="/jugar" component={MemoryGamePage} />
      <Route path="/lsm" component={LsmPage} />
    </Switch>
      </BrowserRouter>
    );

  
}

export default App;
