

export const sortCategory = (collection, category) => {
    
    const drawings = collection.filter(d => {return d.category.replace(/\s+/g, '') === category});

    return drawings;
}