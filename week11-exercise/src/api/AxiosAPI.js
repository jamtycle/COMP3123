import axios from "axios";

const BASE_URL = "https://reqres.in/api";

const API = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
});

export default API;