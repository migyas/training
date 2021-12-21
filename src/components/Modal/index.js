import { X } from "react-feather";
import { Container } from "./styles";

export function Modal({ onClose, isOpen }) {
  return (
    <Container isOpen={isOpen}>
      <header>
        <h2>Edit Student</h2>
        <X onClick={onClose} style={{ cursor: "pointer" }} />
      </header>
      <form></form>
    </Container>
  );
}
