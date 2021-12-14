import { api } from "../api";

async function getAllStudents() {
  const { data } = await api.get("users");
  return data;
}

async function createStudent(data) {
  await api.post("users", data);
}

export { getAllStudents, createStudent };
