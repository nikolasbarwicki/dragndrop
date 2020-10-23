import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import ListItem from './ListItem';

const Wrapper = styled.main`
  max-width: 110rem;
  margin: 0 auto;
`;

const OuterWrapper = styled.div``;

const InnerWrapper = styled.ul`
  background-color: #f5f6f9;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
`;

const Recipes = () => {
  return (
    <Wrapper>
      <h1>Przepisy</h1>
      <OuterWrapper>
        <div style={{ marginTop: '4rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h3>Przepis na zupę, potrzebne składniki</h3>
            <Button>Usuń przepis</Button>
          </div>
          <InnerWrapper>
            <ListItem>Banan</ListItem>
            <ListItem>Banan</ListItem>
            <ListItem>Banan</ListItem>
            <ListItem>Banan</ListItem>
            <ListItem>Banan</ListItem>
          </InnerWrapper>
        </div>
      </OuterWrapper>
    </Wrapper>
  );
};

export default Recipes;
