import React from "react";
import styled from "styled-components";

// Types
export interface MacroTargetsData {
  protein: number;
  carbs: number;
  fat: number;
  calories: number;
}

interface MacroTargetsProps {
  data: MacroTargetsData;
}

// Styled Components
const SectionContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[4]};
  }
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.gray800};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  display: flex;
  align-items: center;

  svg {
    margin-right: ${({ theme }) => theme.spacing[2]};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MacroGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const MacroCard = styled.div`
  background-color: ${({ theme }) => theme.colors.gray50};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing[4]};
  text-align: center;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const MacroLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.gray600};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const MacroValue = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray800};
`;

const MacroUnit = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray500};
  margin-left: ${({ theme }) => theme.spacing[1]};
`;

// Component
const MacroTargets: React.FC<MacroTargetsProps> = ({ data }) => {
  return (
    <SectionContainer>
      <SectionTitle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
          <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
          <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
        </svg>
        Current Macro Targets
      </SectionTitle>

      <MacroGrid>
        <MacroCard>
          <MacroLabel>Protein</MacroLabel>
          <MacroValue>
            {data.protein}
            <MacroUnit>g</MacroUnit>
          </MacroValue>
        </MacroCard>

        <MacroCard>
          <MacroLabel>Carbs</MacroLabel>
          <MacroValue>
            {data.carbs}
            <MacroUnit>g</MacroUnit>
          </MacroValue>
        </MacroCard>

        <MacroCard>
          <MacroLabel>Fat</MacroLabel>
          <MacroValue>
            {data.fat}
            <MacroUnit>g</MacroUnit>
          </MacroValue>
        </MacroCard>

        <MacroCard>
          <MacroLabel>Calories</MacroLabel>
          <MacroValue>
            {data.calories}
            <MacroUnit>kcal</MacroUnit>
          </MacroValue>
        </MacroCard>
      </MacroGrid>
    </SectionContainer>
  );
};

export default MacroTargets;
