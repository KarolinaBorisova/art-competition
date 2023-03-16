
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as drawingService from '../../services/drawingService';
import './DetailDrawing.css'


export default function DrawingDetail() {
    const { user } = useContext(AuthContext);
    const [currentDrawing, setCurrentDrawing] = useState({});
    const { drawingId } = useParams();

    useEffect(() => {
        drawingService.getOneById(drawingId)
            .then(result => {
                setCurrentDrawing(result);
                console.log(result);
                console.log(user);
            });
    }, []);
    return (

        <div className="card-drawing detail">
            <h5 className="card-text title">Title: {currentDrawing.title}</h5>
            <img src={currentDrawing.imgUrl} className="card-img-top detail" alt="..." />
            <div className="card-body">
                <div className="card-title container">
                <div className="card-text">
                    Author: {currentDrawing.name}
                </div> 
                <Link className="deatil-link category" to={`/gallery/${currentDrawing._id}`}>{currentDrawing.category}</Link>
                </div>
                <div className="card-title container">
                <div className="card-text">
                    Votes: 5
                </div> 
                <div className="deatil-link category">Vote</div>
                </div>

            </div>

           

            {currentDrawing._ownerId == user._id
                ? <div className="card-title container">
                     <Link className="deatil-link category" to={`/drawings/${currentDrawing._id}/edit`}>Edit</Link>
                    <Link className="deatil-link category" to={`/gallery/${currentDrawing._id}`}>Delete</Link>
                    </div>
                : null}
        </div>

    );
};

