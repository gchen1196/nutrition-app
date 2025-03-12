import React from "react";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip as ChartTooltip,
  Legend,
  Filler,
  ChartOptions,
  TooltipItem,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ChartTooltip,
  Legend,
  Filler,
);

// Types
export interface DailyProgress {
  day: string;
  weight: number;
  protein: number;
  carbs: number;
  fat: number;
  calories: number;
}

interface ProgressTrackingProps {
  data: DailyProgress[];
}

// Styled Components
const SectionContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing[6]};
  width: 100%;

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

const ChartWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[2]};
`;

const ChartContainer = styled.div`
  height: 300px;
  margin: ${({ theme }) => theme.spacing[6]} 0;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 250px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 200px;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing[4]};
  margin-top: ${({ theme }) => theme.spacing[6]};
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatCard = styled.div`
  background-color: ${({ theme }) => theme.colors.gray50};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing[3]};
  text-align: center;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.gray600};
  margin-bottom: ${({ theme }) => theme.spacing[1]};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray800};
`;

const StatUnit = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.gray500};
  margin-left: ${({ theme }) => theme.spacing[1]};
`;

// Component
const ProgressTracking: React.FC<ProgressTrackingProps> = ({ data }) => {
  // Calculate stats
  const weights = data.map((day) => day.weight);
  const startWeight = data[0].weight;
  const currentWeight = data[data.length - 1].weight;
  const weightChange = currentWeight - startWeight;
  const avgWeight = weights.reduce((sum, w) => sum + w, 0) / weights.length;

  // Prepare data for Chart.js
  const chartData = {
    labels: data.map((day) => day.day),
    datasets: [
      {
        label: "Weight",
        data: data.map((day) => day.weight),
        borderColor: "#81D8D0",
        backgroundColor: "rgba(129, 216, 208, 0.1)",
        pointBackgroundColor: "#81D8D0",
        pointBorderColor: "#FFFFFF",
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.3,
        fill: true,
      },
    ],
  };

  // Chart.js options
  const chartOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
          color: "#6B7280",
        },
      },
      y: {
        title: {
          display: true,
          text: "Weight (lbs)",
          font: {
            size: 12,
          },
          color: "#6B7280",
          padding: { bottom: 10 },
        },
        grid: {
          color: "#F3F4F6",
        },
        ticks: {
          font: {
            size: 12,
          },
          color: "#6B7280",
          padding: 8,
        },
        beginAtZero: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#374151",
        titleFont: {
          size: 12,
        },
        bodyFont: {
          size: 12,
        },
        padding: 10,
        cornerRadius: 6,
        displayColors: false,
        callbacks: {
          label: (context: TooltipItem<"line">) => `Weight: ${context.parsed.y.toFixed(1)} lbs`,
        },
      },
    },
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    elements: {
      line: {
        borderWidth: 2.5,
      },
    },
  };

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
          <path d="M3 3v18h18"></path>
          <path d="m19 9-5 5-4-4-3 3"></path>
        </svg>
        Weight Tracking
      </SectionTitle>

      <ChartWrapper>
        <ChartContainer>
          <Line data={chartData} options={chartOptions} />
        </ChartContainer>
      </ChartWrapper>

      <StatsContainer>
        <StatCard>
          <StatLabel>Starting</StatLabel>
          <StatValue>
            {startWeight.toFixed(1)}
            <StatUnit>lbs</StatUnit>
          </StatValue>
        </StatCard>

        <StatCard>
          <StatLabel>Current</StatLabel>
          <StatValue>
            {currentWeight.toFixed(1)}
            <StatUnit>lbs</StatUnit>
          </StatValue>
        </StatCard>

        <StatCard>
          <StatLabel>Change</StatLabel>
          <StatValue
            style={{
              color: weightChange < 0 ? "#10B981" : weightChange > 0 ? "#EF4444" : "#6B7280",
            }}
          >
            {weightChange > 0 ? "+" : ""}
            {weightChange.toFixed(1)}
            <StatUnit>lbs</StatUnit>
          </StatValue>
        </StatCard>

        <StatCard>
          <StatLabel>Average</StatLabel>
          <StatValue>
            {avgWeight.toFixed(1)}
            <StatUnit>lbs</StatUnit>
          </StatValue>
        </StatCard>
      </StatsContainer>
    </SectionContainer>
  );
};

export default ProgressTracking;
