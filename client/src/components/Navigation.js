import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #2e2545;
  padding: 2rem;
  color: white;
  margin-bottom: 4rem;

  ul {
    display: flex;
  }

  li {
    margin-right: 2rem;
    text-transform: uppercase;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink
            to="/"
            activeStyle={{
              fontWeight: 700,
            }}
            exact
          >
            Twoje przepisy
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add-recipe"
            activeStyle={{
              fontWeight: 700,
            }}
          >
            Dodaj przepis
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
};

export default Navigation;
