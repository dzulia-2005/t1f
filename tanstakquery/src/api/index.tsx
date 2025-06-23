import axios, {type CreateAxiosDefaults} from "axios";

const axiosConfig:CreateAxiosDefaults = {
    baseURL: "http://localhost:5183/api",
};

export const httpClient = axios.create(axiosConfig)

export const setAuthorizationHeader = (token:string) => {
    httpClient.defaults.headers.common["Authorization"] = `${token}`;
    console.log(token,"esaa tokeni")
}
