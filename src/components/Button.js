import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #2e2545;
  width: 15rem;
  padding: 2rem;
  color: white;
  border: none;
  border-radius: 1.5rem;
  outline: none;
  cursor: pointer;
`;

const Button = ({ children, onClick, style }) => {
  return (
    <StyledButton onClick={onClick} style={style}>
      {children}
    </StyledButton>
  );
};

export default Button;
