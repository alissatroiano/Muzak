// import config from '../config';
import axios from "axios";

const KEY = "AIzaSyCjxxjhf7PIhH47-l-v3vMzbtq0ZfF6T-c";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  },
  headers: {}
});