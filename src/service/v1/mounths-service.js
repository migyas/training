import { api } from "../api";

async function getAllMounthStatistics() {
  const { data } = await api.get("mounths");
  return data;
}

async function updateMounthStatistics(id, { obj }) {
  console.log(obj);
  console.log(id);
  await api.patch(`mounths/${id}`, {
    count: obj.count + 1,
  });
}

export { getAllMounthStatistics, updateMounthStatistics };
