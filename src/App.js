import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Twoje przepisy</Link>
            </li>
            <li>
              <Link to="/add-recipe">Dodaj przepis</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            <main>
              <div>
                <h2>Składniki</h2>
                <div>
                  <ul>
                    <li>Marchewka</li>
                    <li>Ogórek</li>
                    <li>Banan</li>
                  </ul>
                </div>
              </div>
              <div>
                <h2>Nazwa przepisu</h2>
                <div></div>
                <button>Dodaj przepis</button>
              </div>
            </main>
          </Route>
          <Route path="/add-recipe">
            <h1>Add recipe</h1>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
