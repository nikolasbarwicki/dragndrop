import React, { useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { getRecipes, getRecipe, deleteRecipe } from '../actions/recipes';
import { setAlert } from '../actions/alert';
import RecipeItem from '../components/RecipeItem';

const Wrapper = styled.main`
  max-width: 110rem;
  margin: 0 auto;
  padding: 2rem;
`;

const Recipes = ({
  getRecipes,
  deleteRecipe,
  getRecipe,
  setAlert,
  history,
}) => {
  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  const { recipes } = useSelector((state) => state.recipes);

  return (
    <Wrapper>
      <h1 style={{ marginBottom: '4rem' }}>Przepisy</h1>
      {(!recipes || !recipes.length) && <span>Dodaj nowe przepisy...</span>}
      {recipes &&
        recipes.map((recipe) => (
          <RecipeItem
            key={recipe._id}
            id={recipe._id}
            createdAt={recipe.createdAt}
            name={recipe.name}
            ingredients={recipe.ingredients}
            getRecipe={getRecipe}
            deleteRecipe={deleteRecipe}
            setAlert={setAlert}
            history={history}
          />
        ))}
    </Wrapper>
  );
};

export default connect(null, { getRecipes, getRecipe, deleteRecipe, setAlert })(
  withRouter(Recipes),
);
