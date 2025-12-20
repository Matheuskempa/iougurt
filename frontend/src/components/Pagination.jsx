import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  button {
    border: 1px solid ${colors.GrayBlack10};
    background: ${colors.white};
    color: ${colors.GrayBlack80};
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;

    &.active {
      background: ${colors.PrimaryPink};
      color: ${colors.white};
      border-color: ${colors.PrimaryPink};
    }

    &:hover {
      border-color: ${colors.PrimaryPink};
    }
  }
`;

export default function Pagination() {
  return (
    <PaginationContainer>
      <button>{"<"}</button>
      <button className="active">1</button>
      <button>2</button>
      <button>3</button>
      <button>...</button>
      <button>10</button>
      <button>{">"}</button>
    </PaginationContainer>
  );
}
