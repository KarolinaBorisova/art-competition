import { useState , useEffect} from "react";
import { useParams} from "react-router-dom";
import { sortCategory } from "../../hooks/sortCategory";
import * as drawingService from '../../services/drawingService';
import DrawingGroupItem from "./DrawingGroupItem/DrawingGroupItem";

export default function Igroup() {

    const [drawings, setDrawings] = useState([]);
    // const { Igroup }= useParams();

    useEffect(() => {
        drawingService.getAll()
            .then(result => {
                const drawings = sortCategory(result, "I group" )
                setDrawings(drawings);
            });
           
           
           
    }, []);
    console.log(drawings);

    return <>
             <h1 className="tm-site-title gallery">I Group</h1>
             <div className="card-deck">
                 {drawings.length > 0

                ? drawings.map(x => <DrawingGroupItem key={x._id} drawing={x} />)
                : <h2>No drawings yet</h2>
                 }
            </div>
        </>
}