import { SuccessCallback, ErrorCallback } from "./fetch.models"
export interface LoginRequest {
    email: string,
    password: string,
}

export interface RequestLogin {
    data: LoginRequest,
    successCallback?: SuccessCallback,
    errorCallback?: ErrorCallback,
}
