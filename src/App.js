import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import './App.css';

import GameList from './GameList';
import Promo from './Promo';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={GameList} />
          <Route path="/jeu/promo/:id" component={Promo} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
