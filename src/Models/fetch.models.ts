import { AxiosRequestConfig, Method } from "axios";

export interface RequestConfig extends AxiosRequestConfig {
  url: string;
  method: Method;
}

export type ErrorCallback = (error: any) => void;

export type SuccessCallback = (response: SuccessResponse<any>) => void;

export interface FetcherRequest {
  data: RequestConfig;
  successCallback: SuccessCallback;
  errorCallback?: ErrorCallback;
}

export interface SuccessResponse<T> {
  status: number;
  result: T;
  message?: string;
}