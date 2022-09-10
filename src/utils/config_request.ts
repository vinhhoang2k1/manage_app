import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { Path } from "../Common/constants/path.constants";
import { RequestConfig } from "../Models/fetch.models";

const axiosInstance = axios.create({
    // baseURL: process.env.baseUrl,
    baseURL: Path.base_url,
    headers: {
        "Content-type": "application/json",
    },
});

// axios response interceptors
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => Promise.reject(error.response)
);

export const fetchApi = (request: RequestConfig): Promise<Response> => axiosInstance.request(request);

export default axiosInstance;
