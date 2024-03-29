import { request } from "./utils/requestService";

const baseUrl = 'http://localhost:3030/users'
export const login = (email, password) =>
    request('POST', `${baseUrl}/login`, { email, password });

export const logout = async (accessToken) =>{ 
try {
    const response = await fetch(`${baseUrl}/logout`, {
        headers: {
            'X-Authorization': accessToken
        }
    });
    return response;
}
    catch (error) {
        console.log(error);
    }
}

export const register = (email, password , username) =>
    request('POST', `${baseUrl}/register`, { email, password, username });

export const  getOwnerById = (ownerId) =>  request('GET',`${baseUrl}/${ownerId}`);