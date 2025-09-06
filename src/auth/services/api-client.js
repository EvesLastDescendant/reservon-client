import axios from "axios";

const BASE_URL = import.meta.env.VITE_APP_API_URL;

// new Axios instance
export const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Added a request interceptor to attach the token to every request
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken"); // wherever token is stored
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);