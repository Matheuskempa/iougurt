import React from "react";
import Sidebar from "../components/SideBar";
import HeaderPacientes from "../components/HeaderPacientes";
import PacientesTable from "../components/PacientesTable";
import Pagination from "../components/Pagination";
import styled from "styled-components";
import colors from "../styles/colors";

const ContainerCard = styled.div`
  background: ${colors.test};
  height: 100vh;
  width: 100%;
  padding: 20px;  
  flex-direction: row;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  background: ${colors.white};
  height: 100vh;
  width: 100%;
`;

const Content = styled.div`
  flex: 1;
  background: ${colors.PrymaryPink2};
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  color: ${colors.GrayBlack60};
  font-size: 1rem;
`;

export default function Pacientes() {
  return (
    <Container>
      <Sidebar />
      <ContainerCard>
        <Content>
          <HeaderPacientes />
          <PacientesTable />
          <Footer>
            <span>Exibindo de 1 a 10 de 100 resultados</span>
            <Pagination />
          </Footer>
        </Content>
      </ContainerCard>
    </Container>
  );
}
