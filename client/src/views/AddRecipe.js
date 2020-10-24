import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { connect } from 'react-redux';
import { createRecipe } from '../actions/recipes';
import { setAlert } from '../actions/alert';

import { onDragEnd } from '../utils/onDragEnd';
import { ingredientsList } from '../utils/ingredientsList';
import Button from '../components/Button';
import Input from '../components/Input';
import DropColumn from '../components/DropColumn';
import GridTemplate from '../templates/GridTemplate';

const AddRecipe = ({ createRecipe, setAlert }) => {
  const initialState = {
    ingredientsColumn: {
      items: ingredientsList,
    },
    recipeColumn: {
      items: [],
    },
  };

  const [columns, setColumns] = useState(initialState);
  const [recipeName, setRecipeName] = useState('');

  // Create new recipe
  const onSubmit = () => {
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
    createRecipe({
      name: recipeName,
      ingredients: columns.recipeColumn.items,
    });

    // Reset columns
    setColumns(initialState);
    setRecipeName('');

    setAlert('Przepis dodany pomyślnie', 'success');
  };

  return (
    <GridTemplate>
      <h2>Dostępne składniki</h2>
      <Input
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        placeholder="Nazwij przepis"
      />

      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column]) => (
          <DropColumn column={column} columnId={columnId} key={columnId} />
        ))}
      </DragDropContext>

      <Button
        onClick={() => onSubmit()}
        style={{ justifySelf: 'end', gridColumn: ' 1 / span 2' }}
      >
        Dodaj przepis
      </Button>
    </GridTemplate>
  );
};

export default connect(null, { createRecipe, setAlert })(AddRecipe);
