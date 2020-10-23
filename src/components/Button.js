import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
  background-color: #2e2545;
  width: 15rem;
  padding: 2rem;
  color: white;
  border: none;
  border-radius: 1.5rem;
  outline: none;
  cursor: pointer;
`;

const Button = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Button;
