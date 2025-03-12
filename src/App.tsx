import { useState } from "react";
import WeeklyCheckin from "@/components/WeeklyCheckin";
import Modal from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import styled from "styled-components";

const AppContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.gray50};
  min-height: 100vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 1rem;
  }
`;

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.gray800};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }
`;

const Subheading = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.gray600};
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    margin-bottom: ${({ theme }) => theme.spacing[6]};
  }
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing[6]};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[4]};
  }
`;

const CardTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.gray800};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const CardText = styled.p`
  color: ${({ theme }) => theme.colors.gray600};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const ButtonWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing[4]};
`;

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <AppContainer>
      <Heading>Nutrition Tracker</Heading>
      <Subheading>
        Track your nutrition progress and stay accountable with weekly check-ins
      </Subheading>

      <Card>
        <CardTitle>Weekly Check-in</CardTitle>
        <CardText>
          Record your weekly progress including weight, adherence to your nutrition plan, energy
          levels, sleep quality, stress levels, and strength trends.
        </CardText>
        <ButtonWrapper>
          <Button onClick={openModal}>Start Weekly Check-in</Button>
        </ButtonWrapper>
      </Card>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Weekly Check-in">
        <WeeklyCheckin />
      </Modal>
    </AppContainer>
  );
}

export default App;
