import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import { onDragEnd } from '../utils/onDragEnd';
import ListItem from './ListItem';

const Wrapper = styled.main`
  max-width: 80rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content 1fr min-content;
  flex-direction: column;
  grid-gap: 2rem;
`;

const Button = styled.button`
  background-color: #2e2545;
  width: 15rem;
  padding: 2rem;
  color: white;
  border: none;
  border-radius: 1.5rem;
  outline: none;
  cursor: pointer;

  justify-self: end;
  grid-column: 1 / span 2;
`;

const InnerWrapper = styled.div`
  background-color: #f5f6f9;
  padding: 2rem;
  height: 50rem;
  border-radius: 1.5rem;
`;

const columnsFromBackend = {
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

const AddRecipe = () => {
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <Wrapper>
      <h2>Skladniki</h2>
      <h2>Nazwa przepisu</h2>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column]) => {
          return (
            <div key={columnId}>
              <Droppable droppableId={columnId} key={columnId}>
                {(provided, snapshot) => {
                  return (
                    <InnerWrapper
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {column.items.map((item, index) => {
                        return (
                          <ListItem
                            id={item.id}
                            index={index}
                            content={item.content}
                          />
                        );
                      })}
                      {provided.placeholder}
                    </InnerWrapper>
                  );
                }}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
      <Button>Dodaj przepis</Button>
    </Wrapper>
  );
};

export default AddRecipe;
