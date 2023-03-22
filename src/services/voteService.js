import { request } from "./utils/requestService";

const baseUrl = 'http://localhost:3030/data/votes';

export const addVote = (drawingId) => request('POST', baseUrl , {drawingId});

export const  del = (voteId) =>  request('DELETE',`${baseUrl}/${voteId}`);

export const getByDrawingId = (drawingId) => {
    const realtions = encodeURIComponent(`user=_ownerId:users`);
    const search = encodeURIComponent(`drawingId="${drawingId}"`);

    return request('GET', `${baseUrl}?where=${search}&load=${realtions}`);
}
