import Sidebar from "../components/SideBar";
import styled from "styled-components";
import colors from "../styles/colors"

const Container = styled.div`
  display: flex;
  background: ${colors.white};
  height: 100vh;
  width: 100%;
`;

const Historico = () => {
   return (
    <Container>
      <Sidebar />
    </Container>
  );
};

export default Historico;