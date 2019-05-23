import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header'

import SetCreate from './sets/SetCreate';
import SetEdit from './sets/SetEdit';
import SetDelete from './sets/SetDelete';
import SetShow from './sets/SetShow';
import SetList from './sets/SetList';

import history from '../history';



const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={SetList} />
            <Route path="/sets/new" exact component={SetCreate} />
            <Route path="/sets/edit/:id" exact component={SetEdit} />
            <Route path="/sets/delete/:id" exact component={SetDelete} />
            <Route path="/sets/:id" exact component={SetShow} />
          </Switch>
        </div>
      </Router>
    </div>
  )
};

export default App;
