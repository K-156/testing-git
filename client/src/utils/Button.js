import React from "react";
import styled from "styled-components";

const Button = () => {
  return <StyledButton>Click me</StyledButton>;
};

const StyledButton = styled.button`
  cursor: pointer;
  color: white;
  background: #645cff;
  border: transparent;
  border-radius: 0.25rem;
  letter-spacing: 1px;
  padding: 0.375rem 0.75rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: 0.3s ease-in-out all;
  text-transform: capitalize;
  display: inline-block;

  :hover {
    background: #3c3799;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

export default Button;
