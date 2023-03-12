import { useEffect, useState } from 'react';
import './Home.css';
import * as drawingService from '../../services/drawingService';
import Card from '../Card/Card';


export default function Home() {
    const [drawings, setDrawings] = useState([]);

    useEffect(() => {
        drawingService.getAll()
            .then(result => {
                setDrawings(result);
            });
    }, []);


    return (
        <>
            <h1 className="tm-site-title gallery">Gallery</h1>
            <div className="card-deck">
                {console.log(drawings)};
                {/* {drawings.map(x=> <Card drawing={x}/>)} */}
            </div>
        </>
    );
}