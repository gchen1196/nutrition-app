import * as React from "react";
import styled, { css } from "styled-components";
import { createTransition } from "@/lib/utils";
import { Theme } from "@/lib/theme";

// Button variants
type ButtonVariant = "primary" | "secondary" | "destructive" | "outline" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg" | "icon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

// Variant styles
const variantStyles = {
  primary: css<{ theme: Theme }>`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary}dd;
    }
  `,
  secondary: css<{ theme: Theme }>`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary}dd;
    }
  `,
  destructive: css<{ theme: Theme }>`
    background-color: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    &:hover {
      background-color: ${({ theme }) => theme.colors.error}dd;
    }
  `,
  outline: css<{ theme: Theme }>`
    border: 1px solid ${({ theme }) => theme.colors.gray300};
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray700};
    box-shadow: ${({ theme }) => theme.shadows.sm};
    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
    }
  `,
  ghost: css<{ theme: Theme }>`
    color: ${({ theme }) => theme.colors.gray700};
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray100};
      color: ${({ theme }) => theme.colors.primary};
    }
  `,
  link: css<{ theme: Theme }>`
    color: ${({ theme }) => theme.colors.primary};
    text-decoration-line: underline;
    text-underline-offset: 4px;
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  `,
};

// Size styles
const sizeStyles = {
  sm: css<{ theme: Theme }>`
    height: 32px;
    padding: 0 ${({ theme }) => theme.spacing[3]};
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    border-radius: ${({ theme }) => theme.radius.md};
  `,
  md: css<{ theme: Theme }>`
    height: 40px;
    padding: 0 ${({ theme }) => theme.spacing[4]};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    border-radius: ${({ theme }) => theme.radius.md};
  `,
  lg: css<{ theme: Theme }>`
    height: 48px;
    padding: 0 ${({ theme }) => theme.spacing[6]};
    font-size: ${({ theme }) => theme.typography.fontSize.md};
    border-radius: ${({ theme }) => theme.radius.md};
  `,
  icon: css<{ theme: Theme }>`
    height: 40px;
    width: 40px;
    padding: 0;
    border-radius: ${({ theme }) => theme.radius.md};
  `,
};

const StyledButton = styled.button<ButtonProps & { theme: Theme }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  white-space: nowrap;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-family: ${({ theme }) => theme.typography.fontFamily.base};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  border: none;
  cursor: pointer;

  ${({ variant = "primary" }) => variantStyles[variant]}
  ${({ size = "md" }) => sizeStyles[size]}
  
  transition: ${createTransition([
    "background-color",
    "color",
    "border-color",
    "box-shadow",
    "opacity",
  ])};

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}40;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  & svg {
    pointer-events: none;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", fullWidth = false, ...props }, ref) => {
    return (
      <StyledButton variant={variant} size={size} fullWidth={fullWidth} ref={ref} {...props} />
    );
  },
);

Button.displayName = "Button";

export { Button };
