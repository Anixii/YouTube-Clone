import axios from "axios";
import queryString from "query-string";
export const instance = axios.create({
  baseURL: "https://youtube-v31.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "6b375bd8bcmsh44e0b73aa91d1e5p1eb99cjsn3516d424f820",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
  paramsSerializer: (params) => queryString.stringify({ ...params }),
});
