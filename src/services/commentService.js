import { request } from "./utils/requestService";

const baseUrl = 'http://localhost:3030/data/comments';

export const create = (drawingId, comment) => {
   return request('POST', baseUrl , {drawingId, text: comment}); 
}


export const getByDrawingId = async (drawingId) => {
    try {
        const realtions = encodeURIComponent(`user=_ownerId:users`);
        const search = encodeURIComponent(`drawingId="${drawingId}"`);
    
        let response = await request('GET', `${baseUrl}?where=${search}&load=${realtions}`);

        if(response.message === "Resource not found")
        {
            response = [];
        }
        
        return response;
    } catch (error) {
        console.log(error);
    }
  
}

export const  del = (commentId) =>  request('DELETE',`${baseUrl}/${commentId}`);

