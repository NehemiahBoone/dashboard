import Axios from "axios"

let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

export const api = Axios.create({
  baseURL: "https://api.covidtracking.com/v1/us",
  timeout: 7500
})