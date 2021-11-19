import { Button } from "../Button";
import logoImg from "../../assets/logo.svg";
import { Nav } from "./styled";

export function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: "16.7rem", height: "10.8rem", marginTop: "5.3rem" }}>
        <img src={logoImg} alt="logo main" />
      </div>
      <Nav>
        <ul>
          <li>
            <a href="/">Diferenciais</a>
          </li>
          <li>
            <a href="/">Pet-commerce</a>
          </li>
          <li>
            <a href="/">Contato</a>
          </li>
          <Button title="Cadastre-se" size="sm" />
        </ul>
      </Nav>
    </header>
  );
}
