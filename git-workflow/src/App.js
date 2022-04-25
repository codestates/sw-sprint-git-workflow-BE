import React from 'react';
import './App.css';
import Start from './views/Start';
import End from './views/End';
import Container from './Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';

function App () {
  return (
    <Router>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/'>
            <Start />
          </Route>
          <Route path='/chapter:chapter/:number' container={<Container />}>
            <Container />
          </Route>
          <Route exact path='/end'>
            <End />
          </Route>
        </Switch>
      </BrowserRouter>
    </Router>
  );
}

export default App;
