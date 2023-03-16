

export const sortCategory = (collection, category) => {
    
    const drawings = collection.filter(d => {return d.category === category});

    return drawings;
}