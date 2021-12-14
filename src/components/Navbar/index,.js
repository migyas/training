import { User } from "react-feather";
import { Link } from "react-router-dom";
import { Container, Content, Nav, Profile, Image } from "./styles";

export function Navbar() {
  return (
    <Container>
      <Content>
        <Profile>
          <Image>
            <User size={55} color="#222" />
          </Image>
          <div>
            <h2>USER NAME</h2>
            <p>user@test.com</p>
          </div>
        </Profile>
        <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/students">Students</Link>
            </li>
          </ul>
        </Nav>
      </Content>
    </Container>
  );
}
