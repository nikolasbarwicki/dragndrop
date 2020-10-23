import React from 'react';
import styled from 'styled-components';

const StyledListItem = styled.li`
  background-color: #dee1eb;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  font-weight: 600;
`;

const ListItem = ({ children }) => {
  return <StyledListItem>{children}</StyledListItem>;
};

export default ListItem;
