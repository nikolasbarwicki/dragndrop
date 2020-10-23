import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Button from './Button';

const Wrapper = styled.main`
  max-width: 110rem;
  margin: 0 auto;
`;

const InnerWrapper = styled.ul`
  background-color: #f5f6f9;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
`;

const ListItem = styled.li`
  background-color: #dee1eb;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  font-weight: 600;
  list-style: none;
  margin-bottom: 1rem;
`;

const Recipes = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  return (
    <Wrapper>
      <h1 style={{ marginBottom: '4rem' }}>Przepisy</h1>
      {!recipes.length && <span>Dodaj nowe przepisy...</span>}
      {recipes.map((recipe) => (
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h3>{recipe.name}, potrzebne składniki</h3>
            <Button
              onClick={() =>
                dispatch({
                  type: 'DELETE_ITEM',
                  payload: recipe.id,
                })
              }
            >
              Usuń przepis
            </Button>
          </div>
          <InnerWrapper>
            {recipe.ingredients.map((el) => (
              <ListItem>{el.content}</ListItem>
            ))}
          </InnerWrapper>
        </div>
      ))}
    </Wrapper>
  );
};

export default Recipes;
