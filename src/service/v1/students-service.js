import { api } from "../api";

async function getAllStudents() {
  const { data } = await api.get("users");

  return data;
}

async function getAllStudentsPaginate(page, limit) {
  const { data } = await api.get(`users?_page=${page}&_limit=${limit}`);

  return data;
}

async function getForSearchTerm(term) {
  const { data } = await api.get(`users?q=${term}`);

  return data;
}

async function createStudent(data) {
  await api.post("users", data);
}

async function updateStudent(id, data) {
  await api.put(`users/${id}`, data);
}

async function deleteStudent(id) {
  await api.delete(`users/${id}`);
}

export {
  getAllStudents,
  getAllStudentsPaginate,
  getForSearchTerm,
  createStudent,
  updateStudent,
  deleteStudent,
};
