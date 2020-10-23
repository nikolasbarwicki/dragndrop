import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';
import Navigation from './components/Navigation';
import AddRecipe from './components/AddRecipe';
import Recipes from './components/Recipes';

const App = () => {
  return (
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
      </Switch>
    </Router>
  );
};

export default App;
