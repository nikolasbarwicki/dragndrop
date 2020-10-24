import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateRecipe } from '../actions/recipes';
import { setAlert } from '../actions/alert';

import { onDragEnd } from '../utils/onDragEnd';
import { ingredientsList } from '../utils/ingredientsList';
import Button from '../components/Button';
import Input from '../components/Input';
import DropColumn from '../components/DropColumn';
import GridTemplate from '../templates/GridTemplate';

const EditRecipe = ({ updateRecipe, setAlert, history }) => {
  const recipe = useSelector((state) => state.editRecipe.recipe);

  const { name, _id, ingredients } = recipe;

  // Get available ingredients by difference
  const availableIngredients = _.differenceBy(
    ingredientsList,
    ingredients,
    'content',
  );

  // Set data in columns according to currently edited recipe
  const columnsContent = {
    ingredientsColumn: {
      items: availableIngredients,
    },
    recipeColumn: {
      items: ingredients,
    },
  };

  const [columns, setColumns] = useState(columnsContent);
  const [recipeName, setRecipeName] = useState(name);

  // Update recipe
  const onSubmit = (recipeId) => {
    // Check if there is at least one ingredient
    if (!columns.recipeColumn.items.length) {
      setAlert('Dodaj składniki do przepisu', 'danger');
      return;
    }

    // Check if name has been specified
    if (!recipeName) {
      setAlert('Nazwij swój przepis', 'danger');
      return;
    }

    // Dispatch action, make api call
    updateRecipe(recipeId, {
      name: recipeName,
      ingredients: columns.recipeColumn.items,
    });

    setAlert('Przepis zaktualizowany', 'success');

    // Redirect user to the recipes list
    history.push('/');
  };

  return (
    <GridTemplate>
      <h2>Dostępne składniki</h2>
      <Input
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        placeholder="Podaj nazwę przepisu"
      />

      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {ingredients.length > 0 &&
          Object.entries(columns).map(([columnId, column]) => (
            <DropColumn column={column} columnId={columnId} key={columnId} />
          ))}
      </DragDropContext>

      <Button
        onClick={() => onSubmit(_id)}
        style={{ justifySelf: 'end', gridColumn: ' 1 / span 2' }}
      >
        Edytuj przepis
      </Button>
    </GridTemplate>
  );
};

export default connect(null, { updateRecipe, setAlert })(
  withRouter(EditRecipe),
);
