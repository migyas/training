import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../layout";
import { Container, Content } from "./styles";
import { createStudent } from "../../service/v1/students-service";
import { createClass } from "../../service/v1/classes-service";
import {
  getAllMounthStatistics,
  updateMounthStatistics,
} from "../../service/v1/mounths-service";

export function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [mounths, setMounths] = useState([]);
  const history = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      selectForm: "",
    },
  });

  console.log(mounths);

  async function getMounthStatistics() {
    try {
      const data = await getAllMounthStatistics();
      setMounths(data);
    } catch {
      console.log("Deu erro");
    }
  }
  const selectForm = watch("selectForm");

  async function onSubmit({
    nameUser,
    emailUser,
    className,
    teacher,
    selectMounth,
  }) {
    if (selectForm === "student") {
      try {
        setIsLoading(true);
        await createStudent({
          nameUser,
          emailUser,
          entryMounthId: selectMounth,
        });
        await updateMounthStatistics(selectMounth, {
          obj: mounths.find((item) => item.id.toString() === selectMounth),
        });
        history("/");
      } catch {
        console.log("Deu erro!");
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        setIsLoading(true);
        await createClass({ className, teacher });
        history("/");
      } catch {
        console.log("Deu erro!");
      } finally {
        setIsLoading(false);
      }
    }
  }

  useEffect(() => {
    (async () => {
      await getMounthStatistics();
    })();
  }, []);

  return (
    <Layout>
      <Container>
        <h1>Dashboard | Register</h1>
        <Content>
          <select {...register("selectForm")}>
            <option value="">Choose your form</option>
            <option value="student">Student</option>
            <option value="class">Class</option>
          </select>
          {selectForm !== "" ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              {selectForm === "student" ? (
                <>
                  <label htmlFor="nameUser">Student</label>
                  <input
                    type="text"
                    {...register("nameUser", { required: true })}
                  />
                  <span>{errors.nameUser && "* Field required"}</span>
                  <br></br>
                  <label htmlFor="email">E-mail</label>
                  <input type="email" {...register("emailUser")} />
                  <br></br>
                  <label htmlFor="selectMounth">Select mounth entry</label>
                  <select {...register("selectMounth")}>
                    {mounths.map(({ mounth, id }) => (
                      <option key={id} value={id}>
                        {mounth}
                      </option>
                    ))}
                  </select>
                </>
              ) : null}

              {selectForm === "class" ? (
                <>
                  <label htmlFor="className">Class</label>
                  <input
                    type="text"
                    {...register("className", { required: true })}
                  />
                  <span>{errors.className && "* Field required"}</span>
                  <br></br>
                  <label htmlFor="teacher">Teacher</label>
                  <input
                    type="text"
                    {...register("teacher", { required: true })}
                  />
                </>
              ) : null}
              <button type="submit">Enviar</button>
            </form>
          ) : null}
        </Content>
      </Container>
    </Layout>
  );
}
