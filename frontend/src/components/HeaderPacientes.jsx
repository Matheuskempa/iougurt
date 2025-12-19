import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import { FaFilter, FaPlus } from "react-icons/fa";
import SearchBar from "./SearchBar";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.GrayBlack50};
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.GrayBlack80};
  font-weight: 500;
  font-size: 0.9rem;

  &:hover {
    color: ${colors.PrimaryPink};
  }
`;

export default function HeaderPacientes() {
  return (
    <Header>
      <Title>Pacientes</Title>
      <Actions>
        <SearchBar />
        <Button><FaFilter /> Filtrar</Button>
        <Button><FaPlus /> Cadastrar</Button>
      </Actions>
    </Header>
  );
}
