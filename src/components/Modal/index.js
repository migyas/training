import { X } from "react-feather";
import { useForm } from "react-hook-form";
import { updateStudent } from "../../service/v1/students-service";
import { Container } from "./styles";

export function Modal({ onClose, isOpen, rowSelect, getStudents }) {
  console.log(rowSelect);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nameUser: rowSelect.original.nameUser,
      emailUser: rowSelect.original.emailUser,
    },
  });

  async function onSubmit(data) {
    try {
      await updateStudent(rowSelect.original.id, data);
    } catch {
      console.log("Deu ruim na edição");
    } finally {
      onClose();
      getStudents();
    }
  }

  return (
    <Container isOpen={isOpen}>
      <div>
        <header>
          <h2>Edit Student</h2>
          <X onClick={onClose} style={{ cursor: "pointer" }} />
        </header>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="nameUser">Student</label>
          <input type="text" {...register("nameUser", { required: true })} />
          <span>{errors.nameUser && "* Field required"}</span>
          <br></br>
          <label htmlFor="email">E-mail</label>
          <input type="email" {...register("emailUser")} />
          <br></br>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </Container>
  );
}
