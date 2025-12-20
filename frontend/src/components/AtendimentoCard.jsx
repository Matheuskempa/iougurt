import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

/* CARD */
const Card = styled.div`
  border: 2px solid ${({ color }) => color || colors.GrayBlack10};
  border-radius: 16px;

  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 12px;
  padding: 10px 14px; /* 🔑 menor */
  margin: 0;          /* 🔑 remove espaço extra */
`;

/* FOTO */
const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

/* BLOCO ESQUERDO (nome + foto) */
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 160px;
`;

/* NOME DO PET */
const PetName = styled.div`
  font-family: 'League Spartan';
  font-size: 16px;
  font-weight: 500;
  color: ${colors.black};
  white-space: nowrap;
`;

/* BLOCO DIREITO (infos) */
const Right = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 48px;
  row-gap: 8px;
`;

/* CAMPO */
const Field = styled.div`
  display: flex;
  gap: 6px;

  font-family: 'League Spartan';
  font-size: 14px;
  line-height: 20px;

  span:first-child {
    color: ${colors.GrayBlack50};
    white-space: nowrap;
  }

  span:last-child {
    color: ${colors.black};
    white-space: nowrap;
  }
`;

export default function AtendimentoCard({
  nome,
  tutor,
  data,
  especie,
  atendimento,
  foto,
  color,
}) {
  return (
    <Card color={color}>
      <Left>
        <Avatar src={foto} alt={nome} />
        <PetName>{nome}</PetName>
      </Left>

      <Right>
        <Field>
          <span>Atendido em:</span>
          <span>{data}</span>
        </Field>

        <Field>
          <span>Espécie:</span>
          <span>{especie}</span>
        </Field>

        <Field>
          <span>Tutor:</span>
          <span>{tutor}</span>
        </Field>

        <Field>
          <span>Atendimento:</span>
          <span>{atendimento}</span>
        </Field>
      </Right>
    </Card>
  );
}
