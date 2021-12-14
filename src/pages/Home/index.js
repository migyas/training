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
  async function getAllUser() {
    try {
      const data = await getAllStudents();
      setStudents(data);
    } catch {
      console.log("Deu erro");
    }
  }

  useEffect(() => {
    (async () => {
      await getAllUser();
    })();
  }, []);
  const data = [
    {
      mounth: "april",
      access: 400,
      pv: 2400,
      amt: 2400,
    },
    {
      mounth: "march",
      access: 2000,
      amt: 1400,
    },
    {
      mounth: "may",
      access: 1200,
      amt: 2400,
    },
    {
      mounth: "juny",
      access: 2000,
      amt: 1000,
    },
  ];
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
              201
            </CardItem>
          </CardContainer>
          <div style={{ display: "flex", gap: "2.5rem" }}>
            <GraphicContainer>
              <h2>Graph Access</h2>
              <LineChart width={600} height={400} data={data}>
                <XAxis dataKey="mounth" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" />
                <Line type="monotone" dataKey="access" stroke="#ff7300" />
                <Line type="monotone" dataKey="amt" stroke="#402d00" />
              </LineChart>
            </GraphicContainer>
            <GraphicContainer>
              <h2>Graph Access</h2>
              <LineChart width={600} height={400} data={data}>
                <XAxis dataKey="mounth" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" />
                <Line type="monotone" dataKey="access" stroke="#ff7300" />
                <Line type="monotone" dataKey="amt" stroke="#402d00" />
              </LineChart>
            </GraphicContainer>
          </div>
        </Content>
      </Container>
    </Layout>
  );
}
