
import Sidebar from "../components/SideBar";
import AtendimentoCard from "../components/AtendimentoCard";
import AgendaCard from "../components/AgendaCard";
import styled from "styled-components";
import colors from "../styles/colors"
import maltesFoto from '../assets/fotos/maltes.jpeg'; // Add this import at the top



const ColumnLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ColumnRight = styled.div`
  flex: 1.5; /* 🔑 mais espaço pra agenda */
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContainerCard = styled.div`
  border: 1px solid ${colors.GrayBlack10};
  border-radius: 10px;
  padding: 20px;
`;

const AgendaContainerCard = styled(ContainerCard)`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: calc(100vh - 100px); /* 🔑 ajuste fino */
`;

const AtendimentoContainerCard = styled(ContainerCard)`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: calc(100vh - 100px);
`;

const AtendimentoList = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;         /* 🔑 mais juntinho */
  overflow-y: auto;
  padding-right: 6px;
`;

const AgendaList = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;         /* 🔑 */
  overflow-y: auto;
  padding-right: 6px;
`;



const Container = styled.div`
  display: flex;
  background: ${colors.white};
  height: 100vh;
  width: 100%;
`;

const Content = styled.div`
  background: ${colors.white};
  margin-top: 32px;
  margin-left: 32px;
  margin-right: 32px;

  display: flex;
  gap: 2rem;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 2rem;
  flex: 1;
  overflow-y: auto;
`;

const Column = styled.div`

  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  font-family: 'League Spartan';
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: ${colors.black};
`;


const Home = () => {
  return (
    <Container>
      <Sidebar />

      <Content>
        <ColumnLeft>
          <AtendimentoContainerCard>
            <Title>Últimos atendimentos</Title>
            <AtendimentoList>
            <AtendimentoCard
              nome="Max"
              tutor="Lucas Gabriel Fernandes"
              data="03/09/2025, 16:00"
              especie="Cachorro"
              atendimento="Vacinação"
              foto={maltesFoto}
              color={colors.card.blue}
            />

            <AtendimentoCard
              nome="Thor"
              tutor="Carlos Pereira Lima"
              data="12/08/2025, 15:30"
              especie="Cachorro"
              atendimento="Consulta"
              foto={maltesFoto}
              color={colors.card.yellow}
            />

            <AtendimentoCard
              nome="Luna Silva"
              tutor="Beatriz Costa"
              data="10/08/2025, 15:00"
              especie="Cachorro"
              atendimento="Exame"
              foto={maltesFoto}
              color={colors.card.purple}
            />
            <AtendimentoCard
              nome="Luna Silva"
              tutor="Beatriz Costa"
              data="10/08/2025, 15:00"
              especie="Cachorro"
              atendimento="Exame"
              foto={maltesFoto}
              color={colors.card.purple}
            />
            <AtendimentoCard
              nome="Luna Silva"
              tutor="Beatriz Costa"
              data="10/08/2025, 15:00"
              especie="Cachorro"
              atendimento="Exame"
              foto={maltesFoto}
              color={colors.card.purple}
            />
            <AtendimentoCard
              nome="Luna Silva"
              tutor="Beatriz Costa"
              data="10/08/2025, 15:00"
              especie="Cachorro"
              atendimento="Exame"
              foto={maltesFoto}
              color={colors.card.purple}
            />
            <AtendimentoCard
              nome="Luna Silva"
              tutor="Beatriz Costa"
              data="10/08/2025, 15:00"
              especie="Cachorro"
              atendimento="Exame"
              foto={maltesFoto}
              color={colors.card.purple}
            />
            </AtendimentoList>
          </AtendimentoContainerCard>
        </ColumnLeft>

        <ColumnRight>
          <AgendaContainerCard>
            <Title>Agenda do dia</Title>
            <AgendaList>
            <AgendaCard
              hora="07:00"
              nome="Simba"
              tutor="João Ramos"
              especie="Gato"
              atendimento="Vacinação"
              foto={maltesFoto}
              color={colors.card.blue}
              bg={colors.cardDate.blue}
            />

            <AgendaCard
              hora="07:30"
              nome="Calvin"
              tutor="Mariana Castro"
              especie="Gato"
              atendimento="Consulta"
              foto={maltesFoto}
              color={colors.card.yellow}
              bg={colors.cardDate.yellow}
            />

            <AgendaCard
              hora="08:30"
              nome="Nina Costa"
              tutor="Ana Souza"
              especie="Cachorro"
              atendimento="Exame"
              foto={maltesFoto}
              color={colors.card.purple}
              bg={colors.cardDate.purple}
            />
            <AgendaCard
              hora="08:30"
              nome="Nina Costa"
              tutor="Ana Souza"
              especie="Cachorro"
              atendimento="Exame"
              foto={maltesFoto}
              color={colors.card.purple}
              bg={colors.cardDate.purple}
            />
            <AgendaCard
              hora="08:30"
              nome="Nina Costa"
              tutor="Ana Souza"
              especie="Cachorro"
              atendimento="Exame"
              foto={maltesFoto}
              color={colors.card.purple}
              bg={colors.cardDate.purple}
            />            
            </AgendaList>
          </AgendaContainerCard>
        </ColumnRight>
      </Content>
    </Container>
  );
};
export default Home;

