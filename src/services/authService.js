import { request } from "./utils/requestService";

const baseUrl = 'http://localhost:3030'
export const login = (email, password) => 
    request('POST', `${baseUrl}/users/login`, { email, password });