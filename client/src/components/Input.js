import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: none;
  font-size: 2rem;
  font-weight: bold;
  outline: none;
  width: 100%;
`;

const Input = (props) => {
  return <StyledInput {...props}>{props.children}</StyledInput>;
};

export default Input;
