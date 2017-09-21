import React from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Map from './Map';

//import './App.styl';

class App extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Map} />

      </Switch>
    );
  }

}

render(
  <BrowserRouter><App/></BrowserRouter>,
  document.getElementById('app')
);
