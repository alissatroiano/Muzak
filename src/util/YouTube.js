import axios from "axios";

const KEY = 'AIzaSyAcHK3DhIfDb9XE9dFU34mopQetVl3ucFI';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
  headers: {}
});