import axios from "axios";

const authToken = localStorage?.getItem("token") || null;
const axiosConfig = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your API base URL
  headers: {
    'authToken': authToken,
  },
});
export default axiosConfig