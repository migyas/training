import { useEffect, useMemo, useState } from "react";
import { Table } from "../../components/Table";
import { Layout } from "../../layout";
import { getAllStudents } from "../../service/v1/students-service";
import { Container, Content } from "./styles";

export function Students() {
  const [students, setStudents] = useState([]);

  async function getStudents() {
    try {
      const data = await getAllStudents();
      if (data.lenght === 0) {
        console.log("Não tem dados");
      }
      setStudents(data);
    } catch {
      console.log("Deu erro!");
    }
  }

  useEffect(() => {
    (async () => {
      await getStudents();
    })();
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Student",
        accessor: "nameUser",
        Cell: ({ row }) => {
          return <h1>{row.original.nameUser}</h1>;
        },
      },
      {
        Header: "E-mail",
        accessor: "emailUser",
      },
    ],
    []
  );

  return (
    <Layout>
      <Container>
        <h1>Dashboard | Students</h1>
        <Content>
          <Table data={students} columns={columns} />
        </Content>
      </Container>
    </Layout>
  );
}
