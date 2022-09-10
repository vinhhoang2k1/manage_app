import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { PATH } from "../Common/constants/path.constants";
import { RequestConfig } from "../Models/fetch.models";

const axiosInstance = axios.create({
    // baseURL: process.env.baseUrl,
    baseURL: PATH.BASE_URL,
    headers: {
        "Content-type": "application/json",
    },
});
axiosInstance.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        if (localStorage.getItem('token')) {
            (config.headers as any)["Authorization"] = 'Bearer ' + localStorage.getItem('token') || "";
        }
        return config
    },
    (error) => {
        Promise.reject(error.response);
    }
);
// axios response interceptors
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => Promise.reject(error.response)
);

export const fetchApi = (request: RequestConfig): Promise<Response> => axiosInstance.request(request);

export default axiosInstance;
