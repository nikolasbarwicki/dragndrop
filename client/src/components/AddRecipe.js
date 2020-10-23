import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { onDragEnd } from '../utils/onDragEnd';
import DraggableItem from './DraggableItem';
import Button from './Button';

const Wrapper = styled.main`
  max-width: 80rem;
  margin: 0 auto;
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
`;

const AddRecipe = () => {
  const dispatch = useDispatch();
  const columnsFromBackend = useSelector((state) => state.columns);

  const [columns, setColumns] = useState(columnsFromBackend);
  const [recipeName, setRecipeName] = useState('');

  const addRecipe = () => {
    if (columns.recipeColumn.items.length) {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          id: uuidv4(),
          name: recipeName || 'Przepis',
          ingredients: columns.recipeColumn.items,
        },
      });
      setColumns(columnsFromBackend);
      setRecipeName('');
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
        onClick={() => addRecipe()}
        style={{ justifySelf: 'end', gridColumn: ' 1 / span 2' }}
      >
        Dodaj przepis
      </Button>
    </Wrapper>
  );
};

export default AddRecipe;
