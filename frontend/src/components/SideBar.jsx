import React from "react";
import styled from "styled-components";
import { FaHome, FaUser, FaCalendarAlt, FaHistory, FaSignOutAlt } from "react-icons/fa";
import logoIougurt from "../assets/logo_iougurt.svg";
import colors from "../styles/colors"


const SidebarContainer = styled.div`
  background: ${colors.white};
  border-right: 1px solid ${colors.GrayBlack10};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1rem;
`;


const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.80rem;
  font-weight: 500;
  color: ${colors.GrayBlack80};
  cursor: pointer;
  &:hover {
    color: ${colors.PrimaryPink};
  }
`;

const UserBox = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.GrayBlack80};
  gap: 0.8rem;
  font-size: 0.9rem;
`;

const Avatar = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background:  ${colors.GrayBlack50};
`;

export default function Sidebar() {
  return (
    <SidebarContainer>
      <div>
        <img src={logoIougurt} alt="Logo Iougurt" className="logo" style={{marginTop:20, height:32, width:106}} />
        <Nav>
          <NavItem><FaHome /> Home</NavItem>
          <NavItem><FaUser /> Pacientes</NavItem>
          <NavItem><FaCalendarAlt /> Agenda</NavItem>
          <NavItem><FaHistory /> Histórico</NavItem>
        </Nav>
      </div>
      <div>
        <UserBox>
          <Avatar />
          <div>
            <strong>Rafael Rocha</strong>
          </div>
        </UserBox>
        <NavItem style={{ marginTop: "1rem" }}><FaSignOutAlt /> Sair</NavItem>
      </div>
    </SidebarContainer>
  );
}
