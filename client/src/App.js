import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import GlobalStyle from './styles/GlobalStyle';

import Navigation from './components/Navigation';
import Alert from './components/Alert';

import AddRecipe from './views/AddRecipe';
import Recipes from './views/Recipes';
import EditRecipe from './views/EditRecipe';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Navigation />
        <Alert />
        <Switch>
          <Route path="/" exact component={Recipes} />
          <Route path="/add-recipe" component={AddRecipe} />
          <Route path="/edit-recipe" component={EditRecipe} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
