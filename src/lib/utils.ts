// Utility functions for styled-components

/**
 * Utility functions for styled-components
 */
import { css } from "styled-components";

/**
 * Helper function to create media queries for responsive design
 */
export const media = {
  xs: (styles: string) => `@media (max-width: 480px) { ${styles} }`,
  sm: (styles: string) => `@media (min-width: 576px) { ${styles} }`,
  md: (styles: string) => `@media (min-width: 768px) { ${styles} }`,
  lg: (styles: string) => `@media (min-width: 992px) { ${styles} }`,
  xl: (styles: string) => `@media (min-width: 1200px) { ${styles} }`,
  "2xl": (styles: string) => `@media (min-width: 1440px) { ${styles} }`,
};

/**
 * Helper function to create a CSS transition string
 */
export function createTransition(
  properties: string[],
  duration = 300,
  timingFunction = "ease",
): string {
  return properties.map((property) => `${property} ${duration}ms ${timingFunction}`).join(", ");
}

/**
 * Helper to create a truncated text style
 */
export const truncate = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

/**
 * Helper to hide an element visually but keep it accessible for screen readers
 */
export const visuallyHidden = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

/**
 * Helper to create a flex container
 */
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * Helper to create a grid with responsive columns
 */
export const responsiveGrid = (minWidth = "250px", gap = "1rem") => css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${minWidth}, 1fr));
  gap: ${gap};
`;

/**
 * Helper to create a box shadow with hover effect
 */
export const hoverShadow = css`
  transition: ${createTransition(["box-shadow"])};
  &:hover {
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;
