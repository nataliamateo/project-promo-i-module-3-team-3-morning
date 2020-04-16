import React from 'react';
import '../stylesheets/App.scss';
import {Route, Switch} from 'react-router-dom';
import UserInterface from './UserInterface';
import Landing from './Landing';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Landing}></Route>
        <Route exact path='/userinterface' component={UserInterface}></Route>
      </Switch>
    </div>
  );
}

export default App;
