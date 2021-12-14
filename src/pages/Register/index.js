import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../layout";
import { Container, Content } from "./styles";
import { createStudent } from "../../service/v1/students-service";

export function Register() {
  const history = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      // LOADING TRUE
      await createStudent(data);
      history("/");
    } catch {
      console.log("Deu erro!");
    } finally {
      // LOADING FALSE
    }
  }
  return (
    <Layout>
      <Container>
        <h1>Dashboard | Register</h1>
        <Content>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="nameUser">Student</label>
            <input type="text" {...register("nameUser", { required: true })} />
            <span>{errors.nameUser && "* Field required"}</span>
            <br></br>

            <label htmlFor="nameUser">E-mail</label>
            <input type="email" {...register("emailUser")} />

            <button type="submit">Enviar</button>
          </form>
        </Content>
      </Container>
    </Layout>
  );
}
