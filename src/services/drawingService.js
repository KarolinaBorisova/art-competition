import { request } from "./utils/requestService";


const baseUrl = 'http://localhost:3030';

export const  getAll = () =>  request('GET',`${baseUrl}/jsonstore/data/drawings`);
   
