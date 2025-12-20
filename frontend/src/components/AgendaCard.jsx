import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
`;

const Hora = styled.div`
  text-align: right;
  font-weight: 500;
  font-size: 1rem;
  color: ${colors.black};
`;

const Card = styled.div`
  flex: 1;
  background: ${({ bg }) => bg || colors.white};
  border: 2px solid ${({ color }) => color || colors.GrayBlack10};
  margin-bottom: 20px;
  color: ${colors.black};
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-radius: 12px;
  padding: 10px 14px;
  margin: 0;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Img = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

const Nome = styled.div`
  font-weight: 600;
  font-size: 0.95rem;
`;

const Linha = styled.div`
  font-size: 0.8rem;
  color: ${colors.GrayBlack80};

  span {
    font-weight: 500;
    color: ${colors.GrayBlack80};
  }
`;


export default function AgendaCard({ hora, nome, tutor, especie, atendimento, foto, color, bg }) {
  return (
    <Container>
      <Hora>{hora}</Hora>
      <Card color={color} bg={bg}>
        <Header>
          <Img src={foto} alt={nome} />
          <Nome>{nome}</Nome>
        </Header>
        <Linha>
          <strong>Atendimento:</strong> <span>{atendimento}</span>
        </Linha>
        <Linha>
          <strong>Tutor:</strong> <span>{tutor}</span>
        </Linha>
        <Linha>
          <strong>Espécie:</strong> <span>{especie}</span>
        </Linha>
      </Card>
    </Container>
  );
}
