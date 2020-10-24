import React, { useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { getRecipes, getRecipe, deleteRecipe } from '../actions/recipes';

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

const IconsWrapper = styled.div`
  display: flex;
`;

const ButtonIcon = styled.button`
  width: 4rem;
  height: 4rem;
  outline: none;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  color: white;
  background-color: #2e2545;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;

  :hover {
    color: #2e2545;
    background-color: #dee1eb;
  }
`;

const Recipes = ({ getRecipes, deleteRecipe, getRecipe, history }) => {
  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  const recipes = useSelector((state) => state.recipes);

  return (
    <Wrapper>
      <h1 style={{ marginBottom: '4rem' }}>Przepisy</h1>
      {!recipes.recipes && <span>Dodaj nowe przepisy...</span>}
      {recipes.recipes &&
        recipes.recipes.map((recipe) => (
          <div key={recipe._id}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h3>{recipe.name}, potrzebne składniki</h3>
              <IconsWrapper>
                <ButtonIcon onClick={() => getRecipe(recipe._id, history)}>
                  <FiEdit />
                </ButtonIcon>
                <ButtonIcon onClick={() => deleteRecipe(recipe._id)}>
                  <FiTrash2 />
                </ButtonIcon>
              </IconsWrapper>
            </div>
            <InnerWrapper>
              {recipe.ingredients.map((el) => (
                <ListItem key={el.id}>{el.content}</ListItem>
              ))}
            </InnerWrapper>
          </div>
        ))}
    </Wrapper>
  );
};

export default connect(null, { getRecipes, getRecipe, deleteRecipe })(
  withRouter(Recipes),
);
