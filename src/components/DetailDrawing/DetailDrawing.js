
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import * as drawingService from '../../services/drawingService';
import * as voteService from '../../services/voteService';
import './DetailDrawing.css'


export default function DrawingDetail() {
    const { user } = useContext(AuthContext);
    const [currentDrawing, setCurrentDrawing] = useState({});
    const [vote, setVote] = useState({});
    const [isActive, setIsActive] = useState(false);
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
                    console.log(res);
                    navigate('/');
                })
        }
    }



    const goToCategory = (e) => {
        var path = e.currentTarget.value;
        navigate(`/category/${path.replace(/\s+/g, '')}`)
    }

    let selected = "";

    const handleClick = () => {
        // 👇️ toggle
        setIsActive(current => !current);
    }

    const voteHandler = (e) => {

        if(!isActive){
            voteService.addVote(drawingId)
            .then(result =>{
                setVote(result);
            } );
            
        }
        else{
            voteService.del(vote._id);
           setVote({});
        }

        handleClick();
      
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
                    <button className="deatil-link category" value={currentDrawing.category} onClick={goToCategory} >{currentDrawing.category}</button>
                </div>
                <div className="card-title container">
                    <div className="card-text">
                        Votes: 0
                    </div>
                    {currentDrawing._ownerId !== user._id
                        ? <button className="deatil-link category"
                                 style={{
                                         backgroundColor: isActive ? '#196d92' : '',
                                         color: isActive ? 'white' : '',
                                        }}
                                 onClick={voteHandler}>Vote</button>
                        : null}
                </div>
            </div>
            {currentDrawing._ownerId == user._id
                ? <div className="card-title container">
                    <Link className="deatil-link category" to={`/drawings/${currentDrawing._id}/edit`}>Edit</Link>
                    <button className="deatil-link category" onClick={deleteDrawing} >Delete</button>
                </div>
                : null}
        </div>

    );
};

