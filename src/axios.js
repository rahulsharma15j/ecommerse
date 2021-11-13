import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/challenge-e7a2f/us-central1/api", // The api url
});

export default instance;
