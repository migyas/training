import styled, { css } from "styled-components";

export const Container = styled.button`
  background: #fab811;
  color: #ffffff;
  font-weight: bold;
  border: none;
  border-radius: 20.5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ca9100;
  }

  ${({ size }) =>
    size === "sm" &&
    css`
      padding: 1rem 1.9rem;
      font-size: 1.6rem;
    `}

  ${({ size }) =>
    size === "md" &&
    css`
      padding: 1.5rem 5.7rem;
      font-size: 2rem;
    `}
`;
