import React from "react";
import styled from "styled-components";
import MacroTargets, { MacroTargetsData } from "./MacroTargets";
import ProgressTracking, { DailyProgress } from "./ProgressTracking";

// Mock data for the dashboard
const mockMacroTargets: MacroTargetsData = {
  protein: 180,
  carbs: 220,
  fat: 60,
  calories: 2140,
};

const mockWeeklyProgress: DailyProgress[] = [
  { day: "Mon", weight: 185.2, protein: 175, carbs: 210, fat: 58, calories: 2062 },
  { day: "Tue", weight: 184.8, protein: 182, carbs: 225, fat: 62, calories: 2186 },
  { day: "Wed", weight: 184.5, protein: 178, carbs: 215, fat: 59, calories: 2103 },
  { day: "Thu", weight: 184.1, protein: 185, carbs: 230, fat: 63, calories: 2227 },
  { day: "Fri", weight: 183.7, protein: 177, carbs: 218, fat: 61, calories: 2129 },
  { day: "Sat", weight: 183.4, protein: 170, carbs: 240, fat: 65, calories: 2225 },
  { day: "Sun", weight: 183.0, protein: 165, carbs: 200, fat: 55, calories: 1955 },
];

// Styled Components
const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[6]};
`;

// Component
const MacroDashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <MacroTargets data={mockMacroTargets} />
      <ProgressTracking data={mockWeeklyProgress} />
    </DashboardContainer>
  );
};

export default MacroDashboard;
