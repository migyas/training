import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const TableContainer = styled.table`
  width: 100%;

  thead {
    height: 5rem;
    background: #222;
  }

  th {
    color: #fff;
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  tbody {
    tr {
      height: 5rem;
      text-align: center;
      font-size: 1.25rem;

      td {
        border-bottom: 1px solid #eeeeee;
      }
    }
  }
`;
