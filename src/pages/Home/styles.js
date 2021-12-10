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

export const CardContainer = styled.section`
  display: flex;
  gap: 2rem;
  width: 40%;
  justify-content: space-between;
  margin: 4rem 0;
`;

export const CardItem = styled.article`
  height: 10rem;
  width: 25rem;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #bdbdbd;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 300;

  span {
    padding-bottom: 1rem;
    font-size: 1.75rem;
    font-weight: bold;
  }
`;

export const GraphicContainer = styled.div`
  background: #fff;
  border: 1px solid #bdbdbd;
  width: 47%;
  border-radius: 5px;
  padding: 2rem 1rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  h2 {
    color: #222;
    margin-bottom: 2rem;
  }
`;
