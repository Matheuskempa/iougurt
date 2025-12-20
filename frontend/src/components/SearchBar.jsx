import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import colors from "../styles/colors";

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid ${colors.GrayBlack50};
  border-radius: 10px;
  padding: 0.4rem 0.8rem;
  min-width: 220px;
  background: ${colors.white};
  color: ${colors.GrayBlack50};

  input {
    border: none;
    outline: none;
    width: 100%;
    color: ${colors.GrayBlack50};
    background: ${colors.white};
    font-size: 0.9rem;
  }
`;

export default function SearchBar() {
  return (
    <SearchBox>
      <FaSearch size={14} />
      <input placeholder="Pesquisar" />
    </SearchBox>
  );
}
