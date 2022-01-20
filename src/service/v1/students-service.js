import { api } from "../api";

async function getAllStudents(page, limit) {
  const obj = {
    items: "",
    count: 0,
  };

  const { data } = await api.get("users");
  const { data: data2 } = await api.get(`users?_page=${page}&_limit=${limit}`);

  const obj2 = obj.items.push(data);
  console.log(obj2);
  console.log(obj);

  const result = data2.map((item) => ({
    count: data.lenght,
    ...item,
  }));
  console.log(result);

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

export { getAllStudents, createStudent, updateStudent, deleteStudent };
