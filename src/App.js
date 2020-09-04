import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound';
import CountryDetails from './Components/CountryDetails/CountryDetails';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/country/:countryName">
            <CountryDetails></CountryDetails>
          </Route>
          <Route path="*">
          <NotFound></NotFound>
          </Route>          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
