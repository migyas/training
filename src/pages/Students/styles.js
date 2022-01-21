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
`;

export const Pagination = styled.div`
  .page__number {
    width: 25px;
    text-align: center;
    background-color: #bdbdbd;
    cursor: pointer;
    color: #fff;
  }

  .active {
    width: 25px;
    text-align: center;
    cursor: pointer;
    color: #fff;
    background: red;
  }
`;
