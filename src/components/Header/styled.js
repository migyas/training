import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`;

export const Navbar = styled.nav`
  ul {
    list-style: none;
    display: flex;

    li {
      margin-right: 1rem;
      transition: all 0.5s;

      a {
        font-size: 1.5rem;
        text-decoration: none;
        color: #222;
        border-bottom: 1px solid #bdbdbd;

        &:hover {
          color: #bdbd22;
        }
      }
      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;
