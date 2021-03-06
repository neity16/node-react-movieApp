import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './views/LandingPage/LandingPage'
import LoginPage from './views/LoginPage/LoginPage';
import RegisterPage from './views/RegisterPage/RegisterPage';
import Auth from '../hoc/auth';
import MovieDetail from './views/MovieDetail/MovieDetail';
import FavoritePage from './views/FavoritePage/FavoritePage';
import NavBar from './views/NavBar/NavBar';

function App() {
  return ( 
    <Router>
      <NavBar />
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null )  } />
          <Route exact path="/login" component={Auth(LoginPage, false) } />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/movie/:movieId" component={Auth(MovieDetail, null)} />
          <Route exact path="/favorite" component={Auth(FavoritePage, true)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

