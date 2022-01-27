import { api } from "../api";

async function getAllMounthStatistics() {
  const { data } = await api.get("mounths");
  return data;
}

async function updateMounthStatistics(id, { obj }) {
  await api.patch(`mounths/${id}`, {
    count: obj.count + 1,
  });
}

export { getAllMounthStatistics, updateMounthStatistics };
