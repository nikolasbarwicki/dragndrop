import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import GlobalStyle from './styles/GlobalStyle';
import Navigation from './components/Navigation';
import AddRecipe from './components/AddRecipe';
import Recipes from './components/Recipes';
import EditRecipe from './components/EditRecipe';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Recipes />
          </Route>
          <Route path="/add-recipe">
            <AddRecipe />
          </Route>
          <Route path="/edit-recipe">
            <EditRecipe />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
