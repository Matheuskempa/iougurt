import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";


const Card = styled.div`
  border: 1px solid ${({ color }) => color || colors.GrayBlack10};
  border-radius: 10px;
  padding: 8px 16px;
  margin-right: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px;
  min-width: 480px;
  box-shadow: 0 0 0 1px ${({ color }) => color || colors.GrayBlack10};
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Img = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
`;

const PetName = styled.div`
  font-weight: 600;
  color: ${colors.black};
`;

const Right = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px 24px;
  font-size: 0.85rem;
  color: ${colors.GrayBlack80};
`;

const Field = styled.div`
  span {
    color: ${colors.GrayBlack80};
    font-weight: 500;
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
        <Img src={foto} alt={nome} />
        <PetName>{nome}</PetName>
      </Left>
      <Right>
        <Field>
          Atendido em:&nbsp;<span>{data}</span>
        </Field>
        <Field>
          Espécie:&nbsp;<span>{especie}</span>
        </Field>
        <Field>
          Tutor:&nbsp;<span>{tutor}</span>
        </Field>
        <Field>
          Atendimento:&nbsp;<span>{atendimento}</span>
        </Field>
      </Right>
    </Card>
  );
}
