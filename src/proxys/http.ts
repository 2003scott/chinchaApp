import axios from "axios";
import { API_URL } from "../constants";

export const http = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-type": "application/json"
    }
});
