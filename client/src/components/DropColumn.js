import React from 'react';
import styled from 'styled-components';

import DraggableItem from './DraggableItem';
import { Droppable } from 'react-beautiful-dnd';

const DropArea = styled.div`
  background-color: #f5f6f9;
  padding: 2rem;
  min-height: 50rem;
  border-radius: 1.5rem;
`;

const DropColumn = ({ column, columnId }) => {
  return (
    <div key={columnId}>
      <Droppable droppableId={columnId} key={columnId}>
        {(provided, snapshot) => {
          return (
            <DropArea {...provided.droppableProps} ref={provided.innerRef}>
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
};

export default DropColumn;
