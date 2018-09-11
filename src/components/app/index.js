import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../../pages/home';
import About from '../../pages/about';
import Auth from '../../pages/auth';
import Main from '../../components/Main';
const App = () => (
  <Main>
    <Auth/>
    <Route exact path="/" render={() => <Redirect to="/books"/>} />
    <Route exact path="/books" component={Home} />
    <Route exact path="/about-us" component={About} />
  </Main>
);

export default App;
