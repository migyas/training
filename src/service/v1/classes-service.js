import { api } from "../api";

async function getAllClasses() {
  const { data } = await api.get("classes");
  return data;
}

async function createClass(data) {
  await api.post("classes", data);
}
export { getAllClasses, createClass };
