
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as drawingService from '../../services/drawingService';
import './DetailDrawing.css'


export default function DrawingDetail() {
    const { user } = useContext(AuthContext);
    const [currentDrawing, setCurrentDrawing] = useState({});
    const { drawingId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        drawingService.getOneById(drawingId)
            .then(result => {
                setCurrentDrawing(result);
                console.log(result);
                console.log(user);
            });
    }, []);

    
        const deleteDrawing = () => {
            const confirmation = window.confirm('Are you sure you want to delete this drawing?');
    
            if (confirmation) {
                drawingService.del(drawingId)
                    .then((res) => {
                        // movieRemove(movieId);
                        console.log(res);
                        navigate('/');
                    })
            }
        }


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
                {currentDrawing._ownerId !== user._id
                ? <div className="deatil-link category">Vote</div>
                : null}
                </div>

            </div>

           

            {currentDrawing._ownerId == user._id
                ? <div className="card-title container">
                     <Link className="deatil-link category" to={`/drawings/${currentDrawing._id}/edit`}>Edit</Link>
                     <button  className="deatil-link category" onClick={deleteDrawing} >Delete</button>
                    </div>
                : null}
        </div>

    );
};

