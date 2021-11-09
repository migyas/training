import { Component } from "react";
import { Container, Navbar } from "./styled";
import logoImg from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <Container>
        <img src={logoImg} alt="logo" />
        <Navbar>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <a href="/">CONTACT</a>
            </li>
          </ul>
        </Navbar>
      </Container>
    );
  }
}
