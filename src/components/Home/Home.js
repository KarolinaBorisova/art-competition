import { useEffect, useState } from 'react';
import './Home.css';
import * as drawingService from '../../services/drawingService';
import Card from '../Card/Card';


export default function Home() {
    const [drawings, setDrawings] = useState([]);

    useEffect(() => {
        drawingService.getAll()
            .then(result => {
            setDrawings(Object.values(result));
            });
    }, []);


    return (
        <>
            <h1 className="tm-site-title gallery">Gallery</h1>
            <div className="card-deck">
                {drawings.length > 0

                ?drawings.map(x=> <Card key={x._id} drawing={x}/>)
                : <h2>No drawings yet</h2>
                } 
            </div>
        </>
    );
}