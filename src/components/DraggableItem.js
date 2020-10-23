import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const ListItem = styled.div`
  background-color: #dee1eb;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  font-weight: 600;
  list-style: none;
  margin-bottom: 1rem;
`;

const DraggableItem = (props) => {
  return (
    <Draggable key={props.id} draggableId={props.id} index={props.index}>
      {(provided, snapshot) => {
        return (
          <ListItem
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              ...provided.draggableProps.style,
            }}
          >
            {props.content}
          </ListItem>
        );
      }}
    </Draggable>
  );
};

export default DraggableItem;
