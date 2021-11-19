import styled from "styled-components";

export const Nav = styled.nav`
  margin-top: 4rem;
  ul {
    list-style: none;
    display: flex;
    align-items: center;

    li {
      a {
        font-size: 1.6rem;
        font-weight: bold;
        text-decoration: none;
        color: #fff;
        margin-right: 6rem;
        transition: text-decoration 0.5s;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
