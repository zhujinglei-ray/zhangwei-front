import axios, { AxiosRequestConfig } from "axios";
import BaseRequestConfig from "./baseRequestConfig";


const baseRequest = new BaseRequestConfig();

const requestService = axios.create({
    baseURL: baseRequest.baseURL,
    timeout: baseRequest.timeout,
    headers: baseRequest.headers
})

requestService.interceptors.response.use((res: any) => {
    return res.data as any
})

requestService.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config
    })

export default requestService;