import axios from 'axios';
const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_PATH,
  headers: {
    "Content-Type": "application/json",
  },
});
const baseUrl = process.env.NEXT_PUBLIC_API_PATH

export {http, baseUrl}