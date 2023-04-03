import { request } from "./utils/requestService";


const baseUrl = 'http://localhost:3030/data/drawings';

export const  getAll = async () =>{
    try {
        let response = await request('GET',baseUrl);
        if(response.message === "Resource not found")
        {
            response = [];
        }
       
        return response;
    } catch (error) {
        console.log(error);
    }
    
};


export const create = (drawingData) => request('POST',baseUrl, drawingData);

export const edit = (drawingId, drawingData) => request('PUT',`${baseUrl}/${drawingId}`, drawingData);

export const  del = (drawingId) =>  request('DELETE',`${baseUrl}/${drawingId}`);

export const  getOneById = (drawingId) =>  request('GET',`${baseUrl}/${drawingId}`);


   
