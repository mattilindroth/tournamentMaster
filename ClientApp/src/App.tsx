import React from 'react';
import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import Users from './Users/users';
import TournamentsList from './Tournaments/tournamentsList';
import {TopMenuBar} from './Layout/topMenuBar';
import {TournamentView} from './Tournaments/tournamentView';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
            <TopMenuBar isLoggedIn={true} />
            <Route exact path="/" component={TournamentsList} />
            <Route path="/users" component={Users} />
            <Route path="/tournaments" component={TournamentsList} />
            <Route path="/tournamentview/:id" component={TournamentView} />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
