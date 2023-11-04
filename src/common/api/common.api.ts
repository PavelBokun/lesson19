import axios from "axios";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
  headers: {
    "API-KEY": "073a34da-9f7d-44f8-b59a-d7955f4f8e73",
  },
});
