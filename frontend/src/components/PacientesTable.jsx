import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import { FaSignInAlt } from "react-icons/fa";

const Table = styled.table`
  width: 100vh;
  border-collapse: collapse;

  th, td {
    text-align: left;
    padding: 0.8rem;
    font-size: 1rem;
    color: ${colors.GrayBlack80};
  }

  th {
    border-bottom: 1px solid ${colors.GrayBlack10};
    color: ${colors.GrayBlack80};
    font-weight: 600;
  }

  td {
    border-bottom: 1px solid ${colors.GrayBlack10};
    color: ${colors.black};
  }

  tbody tr:hover {
    background: ${colors.PrymaryPink2Faded};
  }
`;

const ActionIcon = styled(FaSignInAlt)`
  cursor: pointer;
  color: ${colors.GrayBlack50};
  &:hover {
    color: ${colors.PrimaryPink};
  }
`;

const pacientes = [
  { nome: "Max", tutor: "Lucas Gabriel Fernandes Barbosa", ultimaConsulta: "03/09/2025", especie: "Cachorro" },
  { nome: "Thor", tutor: "Carlos Eduardo Pereira Lima", ultimaConsulta: "12/08/2025", especie: "Cachorro" },
  { nome: "Luna Silva", tutor: "Beatriz Fernanda Costa Nogueira", ultimaConsulta: "10/08/2025", especie: "Cachorro" },
  { nome: "Lola", tutor: "Juliana Maria Rocha Figueiredo", ultimaConsulta: "09/08/2025", especie: "Pássaro" },
  { nome: "Akemi", tutor: "Pedro Augusto Almeida Torres", ultimaConsulta: "09/08/2025", especie: "Cachorro" },
  { nome: "Simba", tutor: "João Pedro Almeida Ramos", ultimaConsulta: "07/08/2025", especie: "Gato" },
  { nome: "Claudio", tutor: "Rafael Henrique Mendes Duarte", ultimaConsulta: "05/08/2025", especie: "Gato" },
  { nome: "Cheddar", tutor: "Fernanda Cristina Martins Azevedo", ultimaConsulta: "05/08/2025", especie: "Roedor" },
  { nome: "Calvin", tutor: "Mariana Beatriz Oliveira Castro", ultimaConsulta: "06/07/2025", especie: "Gato" },
  { nome: "Nina Costa", tutor: "Ana Carolina Silva Souza", ultimaConsulta: "06/07/2025", especie: "Cachorro" },
];

export default function PacientesTable() {
  return (
    <Table>
      <thead>
        <tr>
          <th>Paciente</th>
          <th>Tutor</th>
          <th>Última consulta</th>
          <th>Espécie</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        {pacientes.map((p, i) => (
          <tr key={i}>
            <td>{p.nome}</td>
            <td>{p.tutor}</td>
            <td>{p.ultimaConsulta}</td>
            <td>{p.especie}</td>
            <td><ActionIcon /></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

