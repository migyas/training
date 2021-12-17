import { useEffect, useState } from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Layout } from "../../layout";
import { getAllClasses } from "../../service/v1/classes-service";
import { getAllMounthStatistics } from "../../service/v1/mounths-service";
import { getAllStudents } from "../../service/v1/students-service";
import {
  CardContainer,
  CardItem,
  Container,
  Content,
  GraphicContainer,
} from "./styles";

export function Home() {
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [graphStudents, setGraphStudents] = useState([]);

  async function getAllUser() {
    try {
      const data = await getAllStudents();
      setStudents(data);
    } catch {
      console.log("Deu erro");
    }
  }

  async function getAllClass() {
    try {
      const data = await getAllClasses();
      setClasses(data);
    } catch {
      console.log("Deu erro");
    }
  }

  async function getMounthStatistics() {
    try {
      const data = await getAllMounthStatistics();
      setGraphStudents(data);
    } catch {
      console.log("Deu erro");
    }
  }

  useEffect(() => {
    (async () => {
      await getAllUser();
      await getAllClass();
      await getMounthStatistics();
    })();
  }, []);

  return (
    <Layout>
      <Container>
        <h1>Dashboard | Home</h1>
        <Content>
          <CardContainer>
            <CardItem>
              <span>Nº Students</span>
              {students ? students.length : 0}
            </CardItem>
            <CardItem>
              <span>Nº Classes</span>
              {classes ? classes.length : 0}
            </CardItem>
          </CardContainer>
          <div style={{ display: "flex", gap: "2.5rem" }}>
            <GraphicContainer>
              <h2>Students Registers</h2>
              <LineChart width={950} height={400} data={graphStudents}>
                <XAxis dataKey="mounth" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" />
                <Line type="monotone" dataKey="count" stroke="#ff7300" />
              </LineChart>
            </GraphicContainer>
          </div>
        </Content>
      </Container>
    </Layout>
  );
}
