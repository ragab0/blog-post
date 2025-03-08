import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_API_ENDPOINT,
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

/** FIXME: we use tokens for now instead of cookies to avoid security issues on production
 *  since the api and frontend are hosted on different DOMAINS............................
 *
 */

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle auth token
api.interceptors.response.use(
  (response) => {
    // If login/register endpoint returns token, save it
    if (response.data?.accessToken) {
      localStorage.setItem("token", response.data.accessToken);
    }
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      // Clear token on auth error
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

export default api;
