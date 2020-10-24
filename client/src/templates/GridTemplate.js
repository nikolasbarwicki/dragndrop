import React from 'react';
import styled from 'styled-components';

const Grid = styled.main`
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content 1fr min-content;
  flex-direction: column;
  grid-gap: 2rem;
`;

const GridTemplate = ({ children }) => {
  return <Grid>{children}</Grid>;
};

export default GridTemplate;
