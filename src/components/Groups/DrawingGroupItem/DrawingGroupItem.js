
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

import * as voteService from '../../../services/voteService';
import './DrawingGroupItem.css'

const DrawingGroupItem = ({
  drawing
}) => {
  const { user } = useContext(AuthContext);
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    voteService.getByDrawingId(drawing._id)
    .then(votesDate => {
      console.log("votesDate");
      console.log(votesDate);
       setVotes(votesDate)
    })
   
},[drawing._id])
console.log("votes");
console.log(votes);
  let selected = "";

  if(drawing._ownerId === user._id){
    selected = "selected"
  }
  return (
    <>
      
      <div className={`card-drawing some ${selected}`}>
      <Link className="" to={`/drawings/${drawing._id}`}>
      <img src={drawing.imgUrl} className="card-img-top" alt="..." />
                </Link>
        <div className="card-body">
          <h5 className="card-title">{drawing.name}</h5>
          <h5 className="card-title">{drawing.age} years</h5>
          <div className="card-link-container">
        
             <p className="card-title">Votes: {votes.length}</p>

          </div>

        </div>

      </div>
    </>
  );
};

export default DrawingGroupItem;