import { request } from "./utils/requestService";

const baseUrl = 'http://localhost:3030/data/votes';

export const addVote = (drawingId) => request('POST', baseUrl , {drawingId});

export const  del = (voteId) =>  request('DELETE',`${baseUrl}/${voteId}`);
