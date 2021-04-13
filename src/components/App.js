import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import * as Pages from '../pages';
import 'styles/reset.scss';
import 'styles/utils.scss';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route exact path='/'
      render={() => <Pages.Home/>}
      />
    </Switch>
    <Switch>
      <Route exact path='/introduce'
      render={() => <Pages.Introduce/>}
      />
    </Switch>
    <Switch>
      <Route exact path='/projects'
      render={() => <Pages.Projects/>}
      />
    </Switch>
    </BrowserRouter>
    </>
  );
};

export default App;
