const baseUrl = 'http://localhost:3030';

export const  getAll = () => {

    return fetch(`${baseUrl}/jsonstore/data/drawings`)
    .then(res => res.json())
};