import { useEffect, useMemo, useState } from "react";
import { MoreVertical } from "react-feather";
import { Modal } from "../../components/Modal";
import { Table } from "../../components/Table";
import { Layout } from "../../layout";
import { getAllStudents } from "../../service/v1/students-service";
import { Container, Content } from "./styles";

export function Students() {
  const [students, setStudents] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAction, setIsOpenAction] = useState(false);

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

  console.log(isOpenAction);

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
      },
      {
        Header: "E-mail",
        accessor: "emailUser",
      },
      {
        Header: "Ações",
        accessor: "edit",
        Cell: () => (
          <div style={{ position: "relative" }}>
            <button
              // onClick={() => setIsOpen(!isOpen)}
              onClick={() => setIsOpenAction(!isOpenAction)}
              style={{
                border: "none",
                background: "transparent",
              }}
            >
              <MoreVertical />
            </button>
            {isOpenAction ? (
              <div
                style={{
                  position: "absolute",
                  background: "#cccccc",
                  top: "-40%",
                  right: "55%",
                  width: "9rem",
                  height: "4rem",
                  padding: ".2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <button
                  style={{ border: "none", padding: "0 .5rem" }}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  EDIT
                </button>
                <button style={{ border: "none", padding: "0 .5rem" }}>
                  DELETE
                </button>
              </div>
            ) : null}
          </div>
        ),
      },
    ],
    [isOpen, isOpenAction]
  );

  return (
    <>
      <Layout>
        <Container>
          <h1>Dashboard | Table of Students</h1>
          <Content>
            <Table data={students} columns={columns} />
          </Content>
          {isOpen ? (
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
          ) : null}
        </Container>
      </Layout>
    </>
  );
}
