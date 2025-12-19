import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaCalendarAlt, FaHistory, FaSignOutAlt } from "react-icons/fa";
import logoIougurt from "../assets/logo_iougurt.svg";
import colors from "../styles/colors";

const SidebarContainer = styled.div`
  background: ${colors.white};
  border-right: 1px solid ${colors.GrayBlack10};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1rem;
  font-family: 'League Spartan';
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  text-decoration: none;
  color: ${colors.GrayBlack80};
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.PrimaryPink};
  }

  &.active {
    color: ${colors.PrimaryPink};
  }
`;

const UserBox = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.GrayBlack80};
  gap: 0.8rem;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`;

const Avatar = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${colors.test};
`;

export default function Sidebar() {
  return (
    <SidebarContainer>
      <div>
        <img
          src={logoIougurt}
          alt="Logo Iougurt"
          className="logo"
          style={{ marginTop: 20,  marginBottom: 40, height: 32, width: 106 }}
        /> 

        <Nav>
          <StyledLink to="/"><FaHome /> Home</StyledLink>
          <StyledLink to="/pacientes"><FaUser /> Pacientes</StyledLink>
          <StyledLink to="/agenda"><FaCalendarAlt /> Agenda</StyledLink>
          <StyledLink to="/historico"><FaHistory /> Histórico</StyledLink>
        </Nav>
      </div>

      <div>
        <UserBox>
          <Avatar />
          <div>
            <strong>Rafael Rocha</strong>
          </div>
        </UserBox>
        <StyledLink to="/login" style={{ marginTop: "1rem" }}>
          <FaSignOutAlt /> Sair
        </StyledLink>
      </div>
    </SidebarContainer>
  );
}