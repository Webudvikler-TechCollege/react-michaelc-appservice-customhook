import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;

  img {
    width: 100%;
    aspect-ratio: 2/1;
    object-fit: cover;
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  article {
    padding: 2px 16px;
  }
`;

export const StageCard = ({ item }) => {
  const { name, description } = item;
  return (
    <StyledCard>
      <article>
        <h4>
          <b>{name}</b>
        </h4>
        <p>{description}</p>
      </article>
    </StyledCard>
  );
};
