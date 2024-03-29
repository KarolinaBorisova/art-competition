import { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import * as drawingService from '../../services/drawingService';
import * as voteService from '../../services/voteService';
import * as commentService from '../../services/commentService';
import Comment from './Comment/Comment'
import './DetailDrawing.css'
import { login } from "../../services/authService";


export default function DrawingDetail() {
    const ref = useRef();

    const { user } = useContext(AuthContext);
    const [currentDrawing, setCurrentDrawing] = useState({});
    const [votes, setVotes] = useState([]);
    const [comments, setComments] = useState([]);

    const { drawingId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const drawing = await drawingService.getOneById(drawingId);
            setCurrentDrawing(drawing)
            const drawingVotes = await voteService.getByDrawingId(drawingId);
            setVotes(drawingVotes);
            const drawingComments = await commentService.getByDrawingId(drawingId);
            setComments(drawingComments);

            setCurrentDrawing( {...drawing, comments : drawingComments});
           
        })();
    }, [drawingId]);


    const deleteDrawing = () => {
        const confirmation = window.confirm('Are you sure you want to delete this drawing?');

        if (confirmation) {
            drawingService.del(drawingId)
                .then((res) => {
                    navigate('/');
                })
        }
    }

    const commentsDel=(commentId)=>{
       return setComments(oldComments => oldComments.filter(c=>c._id !== commentId))
    }

    const goToCategory = (e) => {
        var path = e.currentTarget.value;
        navigate(`/category/${path.replace(/\s+/g, '')}`)
    }

    const alreadyVoted = votes.some(v => v._ownerId === user._id);
    const userVote = votes.find(v => v._ownerId === user._id);

    let isActive = false;
    if (userVote !== undefined) {
        isActive = true;
    }

    const voteHandler = (e) => {
        if (!alreadyVoted) {
            voteService.addVote(drawingId)
                .then(result => {
                    setVotes(oldVotes => [...oldVotes, result])
                })
                .catch(() => {
                    navigate('/error')
                });
        }
        else {
            voteService.del(userVote._id);
            setVotes(oldVotes => [...oldVotes.filter(v => v._id !== userVote._id)]);
        }
    }

    const addCommentHandler =async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const comment = formData.get('comment');
        

       const test = await commentService.create(drawingId, comment);
        const drawingComments = await commentService.getByDrawingId(drawingId);
        setComments(drawingComments);
        
        ref.current.value='';
    }

    return (
        <>
            <div className="card-drawing detail">
                <h5 className="card-text title">~ {currentDrawing.title} ~</h5>
                <img src={currentDrawing.imgUrl} className="card-img-top detail" alt="..." />
                <div className="card-body">
                    <div className="card-title container">
                        <div className="card-text">
                            {currentDrawing.name}
                        </div>
                        <button className="deatil-link category" value={currentDrawing.category} onClick={goToCategory} >{currentDrawing.category}</button>
                    </div>
                    <div className="card-title container">
                        <div className="card-text">
                            Votes: {votes.length}
                        </div>
                        {
                            currentDrawing._ownerId !== user._id && user._id != null
                                ? <button className="deatil-link category"
                                    style={{
                                        backgroundColor: isActive ? '#196d92' : '',
                                        color: isActive ? 'white' : '',
                                    }}
                                    onClick={voteHandler}> {isActive ? 'Unvote' : 'Vote'}</button>
                                : null}
                    </div>
                </div>
                {currentDrawing._ownerId === user._id
                    ? <div className="card-title container">
                        <Link className="deatil-link category" to={`/drawings/${currentDrawing._id}/edit`}>Edit</Link>
                        <button className="deatil-link category" onClick={deleteDrawing} >Delete</button>
                    </div>
                    : null}
            </div>
            {user._id
            ?  <div className=" item write-comment-container">
            <form className="form-comment" onSubmit={addCommentHandler}>
                <textarea
                    className="item comment-area"
                    name="comment"
                    placeholder="Write comment"
                    ref={ref}
                />
                <button className="comment-btn">Comment</button>
            </form>
        </div>
        : null
            }
            <div className="comments-container">
                {comments.length > 0
                    ?  comments.map(x => <Comment key={x._id} comment={x} commentDel={commentsDel} />).reverse()
                    : <h2>No comments yet</h2>
                }
            </div>
        </>
    );
};

