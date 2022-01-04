import { useEffect, useMemo, useRef, useState } from "react";
import { MoreVertical } from "react-feather";
import { Modal } from "../../components/Modal";
import { Table } from "../../components/Table";
import useOutsideClick from "../../hooks/useOutsideClick";
import { Layout } from "../../layout";
import { getAllStudents } from "../../service/v1/students-service";
import { Container, Content } from "./styles";

export function Students() {
  const [students, setStudents] = useState([]);
  const [rowSelect, setRowSelect] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const rowRef = useRef();
  const expandedRef = useRef();

  useOutsideClick(rowRef, () => {
    if (isOpen) {
      rowSelect.toggleRowExpanded();
      setIsOpen(false);
    }
  });

  useOutsideClick(expandedRef, () => {
    if (rowSelect.isExpanded) {
      rowSelect.toggleRowExpanded();
    }
  });

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
      },
      {
        Header: "E-mail",
        accessor: "emailUser",
      },
      {
        Header: "Ações",
        accessor: "edit",
        Cell: ({ row }) => {
          return (
            <div style={{ position: "relative" }}>
              <button
                ref={expandedRef}
                {...row.getToggleRowExpandedProps()}
                style={{
                  border: "none",
                  background: "transparent",
                }}
              >
                <MoreVertical />
              </button>
              {row.isExpanded ? (
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
                    onClick={() => {
                      setIsOpen(true);
                      setRowSelect(row);
                    }}
                  >
                    EDIT
                  </button>
                  <button style={{ border: "none", padding: "0 .5rem" }}>
                    DELETE
                  </button>
                </div>
              ) : null}
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <>
      <Layout>
        <Container>
          <h1>Dashboard | Table of Students</h1>
          <Content>
            <Table data={students} columns={columns} />
          </Content>
        </Container>
      </Layout>
      {isOpen ? (
        <div ref={rowRef}>
          <Modal
            rowSelect={rowSelect}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          />
        </div>
      ) : null}
    </>
  );
}
