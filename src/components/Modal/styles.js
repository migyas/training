import styled, { css, keyframes } from "styled-components";

const animation1 = keyframes`
  from {
    transform: translateX(-20%);
    opacity: 10%;
  }

  to {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: fixed;
  width: 600px;
  height: 600px;
  background: #ffffff;
  border: 1px solid #d5ebe4;
  border-radius: 5px;
  transition: all 2s;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${animation1} 0.3s linear;
  opacity: 1;
  padding: 2rem;

  header {
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;

    svg {
      &:hover {
        color: blue;
      }
    }
  }

  label {
    padding: 2rem;
    margin-bottom: 1rem;
  }

  input {
    margin-bottom: 2rem;
  }

  /* ${({ isOpen }) =>
    isOpen
      ? css`
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `
      : css`
          transform: translateX(150%);
        `} */
`;
