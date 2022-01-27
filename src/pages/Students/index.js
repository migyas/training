import { useEffect, useMemo, useRef, useState } from "react";
import { MoreVertical } from "react-feather";
import Select, { components } from "react-select";
import { Modal } from "../../components/Modal";
import { Table } from "../../components/Table";
import useOutsideClick from "../../hooks/useOutsideClick";
import { Layout } from "../../layout";
import {
  deleteStudent,
  getAllStudents,
  getAllStudentsPaginate,
  getForSearchTerm,
} from "../../service/v1/students-service";
import { Container, Content, Pagination } from "./styles";

export function Students() {
  const [inputText, setInputText] = useState("");
  const [students, setStudents] = useState({
    items: [],
    count: 0,
  });
  const [rowSelect, setRowSelect] = useState({});
  const [limitPage, setLimitPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const rowRef = useRef();
  const expandedRef = useRef();

  function getPagination() {
    const resultDiv = Math.ceil(students.count / limitPage);
    if (students.items.length === 0 || students.items.length < limitPage) {
      return [];
    }

    return Array(resultDiv)
      .fill(undefined)
      .map((_, index) => index + 1);
  }

  function handleSearchChange(term) {
    setInputText(term);
  }

  // useEffect(() => {
  //   const intersectionObserver = new IntersectionObserver((entries) => {
  //     if (entries[0].isIntersecting === true) {
  //       console.log("Está mostrando", entries);
  //       setLimitPage((prevState) => prevState + 5);
  //     }
  //   });
  //   intersectionObserver.observe(document.querySelector("#sentinela"));

  //   return () => intersectionObserver.disconnect();
  // }, []);

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
      setIsLoading(true);
      const data = await getAllStudents();
      const dataPerPage = await getAllStudentsPaginate(currentPage, limitPage);
      if (data.lenght === 0) {
        console.log("Não tem dados");
      }
      setStudents(() => ({
        count: data.length,
        items: dataPerPage,
      }));
    } catch {
      console.log("Deu erro!");
    } finally {
      setIsLoading(false);
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
  }, [limitPage, currentPage]);

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

  const options = [
    {
      label: "ihul",
      value: "ihaaaa",
    },
    {
      label: "asd",
      value: "asd",
    },
    {
      label: "sws",
      value: "sws",
    },
  ];

  // const CustomOption = (props) => {
  //   console.log(options);
  //   const { data } = props;
  //   console.log(data);
  //   return (
  //     <components.Option {...props}>
  //       <div>
  //         <div
  //           className="material-icons-outlined"
  //           marginRight="2"
  //           fontSize="xl"
  //         >
  //           {data.value}
  //         </div>
  //         <h2>{data.label}</h2>
  //       </div>
  //     </components.Option>
  //   );
  // };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      if (inputText.length >= 3) {
        const data = await getForSearchTerm(inputText);
        if (inputText === "") {
          await getStudents();
        }
        setStudents((prevState) => ({ ...prevState, items: data }));
      }
      setIsLoading(false);
    })();
  }, [inputText]);

  console.log(students);

  return (
    <>
      <Layout>
        <Container>
          <h1>Dashboard | Table of Students</h1>
          <Content>
            <h3>Select Show Items:</h3>
            <select
              onChange={(e) => {
                setLimitPage(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span>
              Shower {students.items.length} of {students.count}
            </span>
            {/* <Select options={options} components={{ Option: CustomOption }} /> */}
            {/* <div style={{ height: "200px", overflowY: "auto" }}>
              {students.items.map((student) => (
                <div
                  key={student.id}
                  style={{ width: "250px", height: "100px" }}
                >
                  {student.nameUser}
                </div>
              ))}

              {students.count >= limitPage ? (
                <div id="sentinela">Loading...</div>
              ) : (
                <div id="sentinela" />
              )}
            </div> */}
            <div>
              <input
                type="text"
                placeholder="Search for student name"
                onChange={(e) => handleSearchChange(e.target.value)}
              />
            </div>
            {isLoading ? (
              "Loading..."
            ) : (
              <>
                {students.items.length === 0 ? (
                  <p
                    style={{
                      padding: "5rem 0",
                      textAlign: "center",
                      fontSize: "3.5rem",
                    }}
                  >
                    Not found student
                  </p>
                ) : (
                  <>
                    <Table data={students.items} columns={columns} />
                  </>
                )}
              </>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "2rem",
              }}
            >
              <Pagination
                style={{
                  width: "15%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {getPagination().map((item) => (
                  <div
                    key={item}
                    className={item === currentPage ? "active" : "page__number"}
                    onClick={() => setCurrentPage(item)}
                  >
                    {item}
                  </div>
                ))}
              </Pagination>
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
