import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  max-width: 50rem;
  margin: 2rem auto;
  border-radius: 1rem;
  padding: 2rem;
  font-weight: bold;

  ${({ alertType }) =>
    alertType === 'success' &&
    `
    background-color: #d8f3dc;
  border: 1px solid #52b788;
  color: #52b788
  `}

  ${({ alertType }) =>
    alertType === 'danger' &&
    `
    background-color: #fabeba;
  border: 1px solid #eb1c24;
  color: #eb1c24
  `}
`;

const Alert = () => {
  const alerts = useSelector((state) => state.alert);

  return (
    alerts !== null &&
    alerts.length > 0 && (
      <div>
        {alerts.map((alert) => (
          <Wrapper key={alert.id} role="alert" alertType={alert.alertType}>
            {alert.message}
          </Wrapper>
        ))}
      </div>
    )
  );
};

export default Alert;
