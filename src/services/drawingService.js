import { request } from "./utils/requestService";


const baseUrl = 'http://localhost:3030';

export const  getAll = () =>  request('GET',`${baseUrl}/jsonstore/data/drawings`);
// export const  getById = (drawingId) =>  request('GET',`${baseUrl}/jsonstore/data/drawings/${drawingId}`);

//TODO

// export const  getAllFirstGroup = () =>  request('GET',`${baseUrl}/jsonstore/data/drawings`);
// export const  getAllThirdGroup = () =>  request('GET',`${baseUrl}/jsonstore/data/drawings`);
// export const  getAllFourthGroup = () =>  request('GET',`${baseUrl}/jsonstore/data/drawings`);
   
