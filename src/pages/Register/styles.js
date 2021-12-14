import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem;
  h1 {
    font-weight: 700;
    font-size: 2.5rem;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  form {
    width: 50%;
    margin-top: 4rem;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 2px solid #bddbdb;

    input {
      width: 30%;
      height: 22px;
    }

    button {
      background: #bdbdd2;
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 5px;
      margin-top: 0.5rem;
      font-size: 1rem;
    }

    span {
      margin-top: 0.5rem;
      color: red;
      font-weight: bold;
    }
  }
`;
