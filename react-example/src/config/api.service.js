import axios from "axios";
import { TOKEN } from '../config/constants'
import { LOGOUT_USER } from '../redux/actions/actions'
import store from "../redux/store/store";

const UNPROTECTED_PATHS = [
  "loginUser",
  "registerUser"
]

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.withCredentials = true;

const isUnprotectedPath = (url) => {
  for (let path of UNPROTECTED_PATHS) {
    if (url.includes(path)) {
      return true
    }
  }
  return false
}

axios.interceptors.request.use(
  async config => {
    console.log(config)

    if (isUnprotectedPath(config.url)) {
      return config
    }

    let token = localStorage.getItem(TOKEN);
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  async error => {
    throw error;
  },
);

// Redirect to login page in case of 401 response
axios.interceptors.response.use(
  async config => {
    return config;
  },
  async error => {
    if (error.request === undefined) throw error;

    let url = error.request.responseURL;
    if (error.request.status === 401 && isUnprotectedPath(url)) {
      throw error;
    }

    if (error.request.status === 401) {
      console.log("Session expire, redirect to login");

      localStorage.removeItem(TOKEN)
      store.dispatch({ type: LOGOUT_USER })
    }

    throw error;
  },
);

export default axios