import { Button } from "@/components/ui/button";
import styled from "styled-components";

const AppContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  color: ${({ theme }) => theme.colors.hof};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[4]};
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.hof};
`;

function App() {
  return (
    <AppContainer>
      <Heading>Styled Components Theme Demo</Heading>

      <Section>
        <SectionTitle>Button Variants</SectionTitle>
        <ButtonContainer>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </ButtonContainer>
      </Section>

      <Section>
        <SectionTitle>Button Sizes</SectionTitle>
        <ButtonContainer>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">🔍</Button>
        </ButtonContainer>
      </Section>

      <Section>
        <SectionTitle>Full Width Button</SectionTitle>
        <Button fullWidth>Full Width Button</Button>
      </Section>
    </AppContainer>
  );
}

export default App;
