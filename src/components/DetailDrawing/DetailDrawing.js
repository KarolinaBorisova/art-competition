
import { useState, useEffect } from "react";
import { useParams , Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as drawingService from '../../services/drawingService';


export default function DrawingDetail () {
    const {user} = useContext(AuthContext);
    const [currentDrawing, setCurrentDrawing] = useState({});
    const {drawingId} = useParams();

    useEffect(() => {
        drawingService.getOneById(drawingId)
            .then(result => {
                setCurrentDrawing(result);
            console.log(result);
            console.log(user);
            });
    }, []);
return(

    <div className="card-drawing">
        <img src={ currentDrawing.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Title: {currentDrawing.title}</h5>
            <p className="card-text">
                Author: {user.username}
            </p>
        </div>
        <div className="card-footer">
            <small className="text-muted">Votes</small>
        </div>
        {currentDrawing._ownerId == user._id
              ? <> <Link className="deatil-link" to={`/drawings/${currentDrawing._id}/edit`}>Edit</Link>
                <Link className="deatil-link" to={`/gallery/${currentDrawing._id}`}>Delete</Link>
                </>
              : null}
    </div>

);
};

