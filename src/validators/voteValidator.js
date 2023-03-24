import { sortCategory } from "../components/common/sortCategory";

export const votedIgroup = (collection, user) => {
    
    const drawings = sortCategory(collection, 'Igroup')
    const isVoted = drawings.some(d=>d._ownerId === user._id);

    return isVoted;
}
export const votedIIgroup = (collection, user) => {
    
    const drawings = sortCategory(collection, 'IIgroup')
    const isVoted = drawings.some(d=>d._ownerId === user._id);

    return drawings;
}
export const votedIIIgroup = (collection, user) => {
    
    const drawings = sortCategory(collection, 'IIIgroup')
    const isVoted = drawings.some(d=>d._ownerId === user._id);

    return drawings;
}
export const votedIVgroup = (collection, user) => {
    
    const drawings = sortCategory(collection, 'IVgroup')
    const isVoted = drawings.some(d=>d._ownerId === user._id);

    return drawings;
}