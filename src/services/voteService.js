import { request } from "./utils/requestService";

const baseUrl = 'http://localhost:3030/data/votes';

export const addVote = (drawingId) => request('POST', baseUrl , {drawingId});

export const  del = (voteId) =>  request('DELETE',`${baseUrl}/${voteId}`);

export const getByDrawingId =async (drawingId) => {
    try {
        const realtions = encodeURIComponent(`user=_ownerId:users`);
        const search = encodeURIComponent(`drawingId="${drawingId}"`);
    
        let response = await request('GET', `${baseUrl}?where=${search}&load=${realtions}`);

        if(response.message === "Resource not found")
        {
            response = [];
        }
            console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
  
}

