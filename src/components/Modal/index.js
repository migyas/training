import { X } from "react-feather";
import { Container } from "./styles";

export function Modal({ onClose, isOpen, rowSelect }) {
  return (
    <Container isOpen={isOpen}>
      <div>
        <header>
          <h2>Edit Student</h2>
          <X onClick={onClose} style={{ cursor: "pointer" }} />
        </header>
        <p>{rowSelect.original.nameUser}</p>

        <form></form>
      </div>
    </Container>
  );
}
