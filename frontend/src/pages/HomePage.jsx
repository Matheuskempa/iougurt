
import Sidebar from "../components/SideBar";
import AtendimentoCard from "../components/AtendimentoCard";
import AgendaCard from "../components/AgendaCard";
import styled from "styled-components";
import colors from "../styles/colors"
import maltesFoto from '../assets/fotos/maltes.jpeg'; // Add this import at the top


const ContainerCard = styled.div`
  border: 1px solid ${colors.GrayBlack10};
  border-radius: 10px;
  padding: 20px;
  flex: 1;
  
`;

const Container = styled.div`
  display: flex;
  background: ${colors.white};
  height: 100vh;
  width: 100%;
`;

const Content = styled.div`
  background: ${colors.white};
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  display: flex;
  gap: 2rem;
`;

const Column = styled.div`

  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${colors.black};
`;

const Home = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Column>
          <ContainerCard>

              <Title>Últimos atendimentos</Title>
              <AtendimentoCard nome="Max" tutor="Lucas Gabriel Fernandes" data="03/09/2025, 16:00" especie="Cachorro" atendimento="Vacinação" foto={maltesFoto} color={colors.card.blue} />
              <AtendimentoCard nome="Thor" tutor="Carlos Pereira Lima" data="12/08/2025, 15:30" especie="Cachorro" atendimento="Consulta" foto={maltesFoto} color={colors.card.yellow} />
              <AtendimentoCard nome="Luna Silva" tutor="Beatriz Costa" data="10/08/2025, 15:00" especie="Cachorro" atendimento="Exame" foto={maltesFoto} color={colors.card.purple} />
          </ContainerCard>
       
        </Column>
      </Content>
      <Content>
        <Column>
          <ContainerCard>
            <Title>Agenda do dia</Title>
            <AgendaCard hora="07:00" nome="Simba" tutor="João Ramos" especie="Gato" atendimento="Vacinação" foto={maltesFoto} color={colors.card.blue} bg={colors.cardDate.blue} />
            <AgendaCard hora="07:30" nome="Calvin" tutor="Mariana Castro" especie="Gato" atendimento="Consulta" foto={maltesFoto} color={colors.card.yellow} bg={colors.cardDate.yellow}  />
            <AgendaCard hora="08:30" nome="Nina Costa" tutor="Ana Souza" especie="Cachorro" atendimento="Exame" foto={maltesFoto} color={colors.card.purple} bg={colors.cardDate.purple}  />
          </ContainerCard>
        </Column>
      </Content>
    </Container>
  );
};
export default Home;

