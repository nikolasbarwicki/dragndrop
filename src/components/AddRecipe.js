import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import ListItem from './ListItem';

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  height: calc(100vh - 9.8rem);
`;

const OuterWrapper = styled.div`
  width: 35rem;
  margin: 4rem;
  height: 60rem;
`;

const InnerWrapper = styled.div`
  background-color: #f5f6f9;
  padding: 2rem;
  height: 50rem;
  margin: 2rem 0;
  border-radius: 1.5rem;

  li {
    margin-bottom: 1rem;
  }
`;

const AddRecipe = () => {
  return (
    <Wrapper>
      <OuterWrapper>
        <h2>Składniki</h2>
        <InnerWrapper>
          <ul>
            <ListItem>Marchewka</ListItem>
            <ListItem>Ogórek</ListItem>
            <ListItem>Banan</ListItem>
          </ul>
        </InnerWrapper>
      </OuterWrapper>
      <OuterWrapper>
        <h2>Nazwa przepisu</h2>
        <InnerWrapper></InnerWrapper>
        <Button>Dodaj przepis</Button>
      </OuterWrapper>
    </Wrapper>
  );
};

export default AddRecipe;
