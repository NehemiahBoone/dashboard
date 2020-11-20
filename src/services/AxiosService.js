import Axios from "axios"

let baseUrl = location.host.includes("localhost")
  ? "http://localhost:3000/"
  : "/";

export const api = Axios.create({
  baseURL: "https://covidtracking.com/api/us.daily",
  timeout: 7500
})