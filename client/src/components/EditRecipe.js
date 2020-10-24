import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import _ from 'lodash';

import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateRecipe } from '../actions/recipes';
import { setAlert } from '../actions/alert';

import { onDragEnd } from '../utils/onDragEnd';
import DraggableItem from './DraggableItem';
import Button from './Button';

const Wrapper = styled.main`
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content 1fr min-content;
  flex-direction: column;
  grid-gap: 2rem;
`;

const DropArea = styled.div`
  background-color: #f5f6f9;
  padding: 2rem;
  height: 50rem;
  border-radius: 1.5rem;
`;

const Input = styled.input`
  border: none;
  font-size: 2rem;
  font-weight: bold;
  outline: none;
  width: 100%;
`;

const EditRecipe = ({ updateRecipe, setAlert, history }) => {
  const usedIngredients = useSelector(
    (state) => state.editRecipe.recipe.ingredients,
  );
  const name = useSelector((state) => state.editRecipe.recipe.name);
  const ID = useSelector((state) => state.editRecipe.recipe._id);

  const newArray = _.differenceBy(
    [
      { id: '1', content: 'banan' },
      { id: '2', content: 'marchewka' },
      { id: '3', content: 'burak' },
      { id: '4', content: 'jajko' },
      { id: '5', content: 'ziemniak' },
    ],
    usedIngredients,
    'content',
  );

  const columnsContent = {
    ingredientsColumn: {
      items: newArray,
    },
    recipeColumn: {
      items: usedIngredients,
    },
  };

  const [columns, setColumns] = useState(columnsContent);
  const [recipeName, setRecipeName] = useState(name);

  const editRecipe = (recipeId) => {
    if (columns.recipeColumn.items.length) {
      updateRecipe(recipeId, {
        name: recipeName || 'Przepis',
        ingredients: columns.recipeColumn.items,
      });

      //   setColumns(columnsFromBackend);
      setRecipeName('');
      setAlert('Przepis zaktualizowany', 'success');
      history.push('/');
    }
  };

  return (
    <Wrapper>
      <h2>Składniki</h2>
      <Input
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        placeholder="Podaj nazwę przepisu"
      />
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {usedIngredients.length > 0 &&
          Object.entries(columns).map(([columnId, column]) => {
            return (
              <div key={columnId}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <DropArea
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <DraggableItem
                              key={item.id}
                              id={item.id}
                              index={index}
                              content={item.content}
                            />
                          );
                        })}
                        {provided.placeholder}
                      </DropArea>
                    );
                  }}
                </Droppable>
              </div>
            );
          })}
      </DragDropContext>
      <Button
        onClick={() => editRecipe(ID)}
        style={{ justifySelf: 'end', gridColumn: ' 1 / span 2' }}
      >
        Edytuj przepis
      </Button>
    </Wrapper>
  );
};

export default connect(null, { updateRecipe, setAlert })(
  withRouter(EditRecipe),
);
