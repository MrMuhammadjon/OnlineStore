import axios from "../lib/axios"; // yoki to'g'ridan-to'g'ri 'axios'

async function getProducts() {
  try {
    const response = await axios.get("/products");
    console.log(response.data);
  } catch (error) {
    console.error("Xatolik:", error);
  }
}

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
