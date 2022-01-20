import { useEffect, useMemo, useRef, useState } from "react";
import { MoreVertical } from "react-feather";
import { Modal } from "../../components/Modal";
import { Table } from "../../components/Table";
import useOutsideClick from "../../hooks/useOutsideClick";
import { Layout } from "../../layout";
import {
  deleteStudent,
  getAllStudents,
} from "../../service/v1/students-service";
import { Container, Content } from "./styles";

export function Students() {
  const [students, setStudents] = useState([]);
  const [rowSelect, setRowSelect] = useState({});
  const [limitPage, setLimitPage] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  const rowRef = useRef();
  const expandedRef = useRef();

  const pageNumbers = Array(5)
    .fill(undefined)
    .map((_, index) => index + 1);

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
      const data = await getAllStudents(1, limitPage);
      if (data.lenght === 0) {
        console.log("Não tem dados");
      }
      setStudents(data);
    } catch {
      console.log("Deu erro!");
    }
  }

  async function deleteStudentById(id) {
    await deleteStudent(id);
    getStudents();
  }

  useEffect(() => {
    (async () => {
      await getStudents();
    })();
  }, [limitPage]);

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
                  <button
                    style={{ border: "none", padding: "0 .5rem" }}
                    onClick={() => deleteStudentById(row.original.id)}
                  >
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
            <h3>Select Show Items:</h3>
            <select onChange={(e) => setLimitPage(e.target.value)}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span>Shower {students.length}</span>
            <Table data={students} columns={columns} />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "2rem",
              }}
            >
              <div
                style={{
                  width: "15%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {pageNumbers.map((item) => (
                  <div
                    key={item}
                    style={{
                      width: "25px",
                      textAlign: "center",
                      backgroundColor: "#bdbdbd",
                      cursor: "pointer",
                      color: "#fff",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Content>
        </Container>
      </Layout>

      {isOpen ? (
        <div ref={rowRef}>
          <Modal
            rowSelect={rowSelect}
            isOpen={isOpen}
            getStudents={getStudents}
            onClose={() => setIsOpen(false)}
          />
        </div>
      ) : null}
    </>
  );
}
