import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchUsers = async () => {
  try {
    const response = await api.get("/users");
    console.log("Fetched users:", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};