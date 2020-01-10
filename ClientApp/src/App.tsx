import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Users from './Users/users';
import Tournament from './Tournaments/tournaments';
import {TopMenuBar} from './Layout/topMenuBar';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
            <TopMenuBar isLoggedIn={true} />
            <Route exact path="/" component={Tournament} />
            <Route path="/users" component={Users} />
            <Route path="/contact" component={Tournament} />
        
          <Button variant="contained" color="primary">
            Hello world!
          </Button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
