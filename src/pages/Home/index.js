import { useEffect, useState } from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
  Tooltip,
  BarChart,
} from "recharts";
import { Layout } from "../../layout";
import { getAllClasses } from "../../service/v1/classes-service";
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
  const [graph1, setGraph1] = useState([]);
  // const mounths = [
  //   { mounth: "january" },
  //   { mounth: "february" },
  //   { mounth: "march" },
  //   { mounth: "april" },
  //   { mounth: "may" },
  //   { mounth: "june" },
  //   { mounth: "july" },
  //   { mounth: "august" },
  //   { mounth: "september" },
  //   { mounth: "october" },
  //   { mounth: "november" },
  //   { mounth: "december" },
  // ];
  async function getAllUser() {
    try {
      const data = await getAllStudents();
      // const filterAny = data.filter((r) => r.mounth);
      console.log(data);
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

  useEffect(() => {
    (async () => {
      await getAllUser();
      await getAllClass();
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
              <LineChart width={850} height={400} data={graph1}>
                <XAxis dataKey="mounth" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="numbers" stroke="#ff7300" />
                <Line type="monotone" dataKey="amt" stroke="#402d00" />
              </LineChart>
            </GraphicContainer>
            {/* <GraphicContainer>
              <h2>Graph Access</h2>
              <LineChart width={600} height={400} data={data}>
                <XAxis />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" />
                <Line type="monotone" dataKey="access" stroke="#ff7300" />
                <Line type="monotone" dataKey="amt" stroke="#402d00" />
              </LineChart>
            </GraphicContainer> */}
          </div>
        </Content>
      </Container>
    </Layout>
  );
}
