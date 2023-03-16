import { request } from "./utils/requestService";


const baseUrl = 'http://localhost:3030/data/drawings';

export const  getAll = () =>  request('GET',baseUrl);

export const create = (drawingData) => request('POST',baseUrl, drawingData);

export const edit = (drawingId, drawingData) => request('PUT',`${baseUrl}/${drawingId}`, drawingData);

export const  del = (drawingId) =>  request('DELETE',`${baseUrl}/${drawingId}`);

export const  getOneById = (drawingId) =>  request('GET',`${baseUrl}/${drawingId}`);

//TODO

// export const  getAllFirstGroup = () =>  request('GET',`${baseUrl}/jsonstore/data/drawings`);
// export const  getAllThirdGroup = () =>  request('GET',`${baseUrl}/jsonstore/data/drawings`);
// export const  getAllFourthGroup = () =>  request('GET',`${baseUrl}/jsonstore/data/drawings`);
   
