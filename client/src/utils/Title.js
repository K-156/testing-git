import React from "react";
import styled from "styled-components";

const Title = () => {
  return (
    <StyledTitle>
      <h2>section title</h2>
      <div className="title-underline"></div>
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  text-align: center;

  .title-underline {
    background: blue;
    width: 7rem;
    height: 0.25rem;
    margin: 0 auto;
  }
`;

export default Title;
