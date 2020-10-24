import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { createRecipe } from '../actions/recipes';
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

const AddRecipe = ({ createRecipe, setAlert }) => {
  const initialState = {
    ingredientsColumn: {
      items: [
        { id: '1', content: 'banan' },
        { id: '2', content: 'marchewka' },
        { id: '3', content: 'burak' },
        { id: '4', content: 'jajko' },
        { id: '5', content: 'ziemniak' },
      ],
    },
    recipeColumn: {
      items: [],
    },
  };

  const [columns, setColumns] = useState(initialState);
  const [recipeName, setRecipeName] = useState('');

  const onSubmit = () => {
    if (!columns.recipeColumn.items.length) {
      setAlert('Dodaj składniki do przepisu', 'danger');
      return;
    }

    if (!recipeName) {
      setAlert('Nazwij swój przepis', 'danger');
      return;
    }

    createRecipe({
      name: recipeName,
      ingredients: columns.recipeColumn.items,
    });

    setColumns(initialState);
    setRecipeName('');
    setAlert('Przepis dodany pomyślnie', 'success');
  };

  return (
    <Wrapper>
      <h2>Składniki</h2>
      <Input
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        placeholder="Nazwij przepis"
      />
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column]) => {
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
        onClick={() => onSubmit()}
        style={{ justifySelf: 'end', gridColumn: ' 1 / span 2' }}
      >
        Dodaj przepis
      </Button>
    </Wrapper>
  );
};

export default connect(null, { createRecipe, setAlert })(AddRecipe);
