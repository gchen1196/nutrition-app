import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@/components/ui/button";
import { flexCenter } from "@/lib/utils";

// Types
type StrengthTrend = "WEAKER" | "SAME" | "STRONGER";

interface CheckinFormData {
  weight: string;
  adherence: string;
  energy: string;
  sleep: string;
  stress: string;
  strength: StrengthTrend;
  notes: string;
}

interface FormErrors {
  weight?: string;
  adherence?: string;
  energy?: string;
  sleep?: string;
  stress?: string;
  strength?: string;
}

// Styled Components
const FormTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.gray800};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    margin-bottom: ${({ theme }) => theme.spacing[3]};
  }
`;

const FormSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.gray600};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing[5]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
  }
`;

const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.gray700};
  margin-bottom: ${({ theme }) => theme.spacing[2]};
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}20;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray100};
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[2]};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  margin-top: ${({ theme }) => theme.spacing[1]};
`;

const RatingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[2]};
  margin-top: ${({ theme }) => theme.spacing[2]};
`;

const RatingButton = styled.button<{ selected: boolean }>`
  ${flexCenter}
  width: 36px;
  height: 36px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid
    ${({ theme, selected }) => (selected ? theme.colors.primary : theme.colors.gray300)};
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.white};
  color: ${({ theme, selected }) => (selected ? theme.colors.white : theme.colors.gray700)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme, selected }) =>
      selected ? theme.colors.primary : theme.colors.primary}10;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 32px;
    height: 32px;
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
  }
`;

const StrengthTrendContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-top: ${({ theme }) => theme.spacing[2]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing[2]};
  }
`;

const StrengthTrendButton = styled.button<{ selected: boolean; trend: StrengthTrend }>`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid
    ${({ theme, selected }) => (selected ? theme.colors.primary : theme.colors.gray300)};
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.white};
  color: ${({ theme, selected }) => (selected ? theme.colors.white : theme.colors.gray700)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme, selected }) =>
      selected ? theme.colors.primary : theme.colors.primary}10;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[1]};
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing[3]};
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  min-height: 100px;
  resize: vertical;
  font-family: ${({ theme }) => theme.typography.fontFamily.base};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}20;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[2]};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    min-height: 80px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing[3]};
  margin-top: ${({ theme }) => theme.spacing[6]};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-top: ${({ theme }) => theme.spacing[4]};
    gap: ${({ theme }) => theme.spacing[2]};
  }
`;

const SuccessMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.success}20;
  color: ${({ theme }) => theme.colors.success};
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.radius.md};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing[4]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing[3]};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`;

// Component
const WeeklyCheckin: React.FC = () => {
  const [formData, setFormData] = useState<CheckinFormData>({
    weight: "",
    adherence: "",
    energy: "",
    sleep: "",
    stress: "",
    strength: "SAME",
    notes: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Weight validation
    if (!formData.weight) {
      newErrors.weight = "Weight is required";
    } else if (isNaN(parseFloat(formData.weight)) || parseFloat(formData.weight) <= 0) {
      newErrors.weight = "Please enter a valid weight";
    }

    // Adherence validation
    if (!formData.adherence) {
      newErrors.adherence = "Adherence rating is required";
    }

    // Energy validation
    if (!formData.energy) {
      newErrors.energy = "Energy level is required";
    }

    // Sleep validation
    if (!formData.sleep) {
      newErrors.sleep = "Sleep quality is required";
    }

    // Stress validation
    if (!formData.stress) {
      newErrors.stress = "Stress level is required";
    }

    // Strength validation
    if (!formData.strength) {
      newErrors.strength = "Strength trend is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleRatingSelect = (field: keyof CheckinFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user selects a rating
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleStrengthSelect = (value: StrengthTrend) => {
    setFormData((prev) => ({ ...prev, strength: value }));

    // Clear error when user selects a strength trend
    if (errors.strength) {
      setErrors((prev) => ({ ...prev, strength: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form submitted:", formData);
      setIsSubmitted(true);

      // Reset form after submission
      setFormData({
        weight: "",
        adherence: "",
        energy: "",
        sleep: "",
        stress: "",
        strength: "SAME",
        notes: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      weight: "",
      adherence: "",
      energy: "",
      sleep: "",
      stress: "",
      strength: "SAME",
      notes: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  // Generate rating buttons (1-10 for adherence, 1-5 for others)
  const renderRatingButtons = (field: keyof CheckinFormData, value: string, max: number) => {
    return Array.from({ length: max }, (_, i) => i + 1).map((num) => (
      <RatingButton
        key={num}
        type="button"
        selected={value === num.toString()}
        onClick={() => handleRatingSelect(field, num.toString())}
      >
        {num}
      </RatingButton>
    ));
  };

  return (
    <>
      <FormTitle>Weekly Nutrition Check-in</FormTitle>
      <FormSubtitle>Track your progress and stay accountable</FormSubtitle>

      {isSubmitted ? (
        <>
          <SuccessMessage>Your weekly check-in has been submitted successfully!</SuccessMessage>
          <ButtonContainer>
            <Button variant="outline" onClick={handleReset}>
              Submit Another Check-in
            </Button>
          </ButtonContainer>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="weight">Current Weight (lbs)</Label>
            <Input
              id="weight"
              name="weight"
              type="number"
              value={formData.weight}
              onChange={handleInputChange}
              placeholder="Enter your current weight"
            />
            {errors.weight && <ErrorMessage>{errors.weight}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label>Adherence to Nutrition Plan (1-10)</Label>
            <RatingContainer>
              {renderRatingButtons("adherence", formData.adherence, 10)}
            </RatingContainer>
            {errors.adherence && <ErrorMessage>{errors.adherence}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label>Energy Levels (1-5)</Label>
            <RatingContainer>{renderRatingButtons("energy", formData.energy, 5)}</RatingContainer>
            {errors.energy && <ErrorMessage>{errors.energy}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label>Sleep Quality (1-5)</Label>
            <RatingContainer>{renderRatingButtons("sleep", formData.sleep, 5)}</RatingContainer>
            {errors.sleep && <ErrorMessage>{errors.sleep}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label>Stress Levels (1-5)</Label>
            <RatingContainer>{renderRatingButtons("stress", formData.stress, 5)}</RatingContainer>
            {errors.stress && <ErrorMessage>{errors.stress}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label>Strength Trend</Label>
            <StrengthTrendContainer>
              <StrengthTrendButton
                type="button"
                selected={formData.strength === "WEAKER"}
                onClick={() => handleStrengthSelect("WEAKER")}
                trend="WEAKER"
              >
                Weaker
              </StrengthTrendButton>
              <StrengthTrendButton
                type="button"
                selected={formData.strength === "SAME"}
                onClick={() => handleStrengthSelect("SAME")}
                trend="SAME"
              >
                Same
              </StrengthTrendButton>
              <StrengthTrendButton
                type="button"
                selected={formData.strength === "STRONGER"}
                onClick={() => handleStrengthSelect("STRONGER")}
                trend="STRONGER"
              >
                Stronger
              </StrengthTrendButton>
            </StrengthTrendContainer>
            {errors.strength && <ErrorMessage>{errors.strength}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="notes">Additional Notes (Optional)</Label>
            <TextArea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Any additional information you'd like to share..."
            />
          </FormGroup>

          <ButtonContainer>
            <Button variant="outline" type="button" onClick={handleReset}>
              Reset
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Check-in"}
            </Button>
          </ButtonContainer>
        </form>
      )}
    </>
  );
};

export default WeeklyCheckin;
