import { Button } from "../Button";
import dogImg from "../../assets/dog.png";
import { Container } from "./styled";

export function Main() {
  return (
    <Container>
      <header>
        <h1>Nosso propósito é animal</h1>
        <p>Em breve você um pet-coomerce exclusivo para o seu doginho. </p>
        <Button title="Saiba mais" size="md" />
      </header>
      <div style={{ width: "66.5rem", height: "66.1rem" }}>
        <img src={dogImg} alt="dog smiling" />
      </div>
    </Container>
  );
}
