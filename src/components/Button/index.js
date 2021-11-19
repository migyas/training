import { Container } from "./styled";

export function Button({ title, fontsize, fontweight, size }) {
  return (
    <Container fontsize={fontsize} fontweight={fontweight} size={size}>
      {title}
    </Container>
  );
}
