
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

import './Drawing.css'

const Drawing = ({
  drawing
}) => {
  const { user } = useContext(AuthContext);

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
            <Link className="card-category" to={`/category/${drawing.category?.replace(/\s+/g, '')}`}>
              {drawing?.category}
            </Link>
            {drawing._ownerId !== user._id
              ? <> 
              {/* <Link className="deatil-link" to={`/drawings/${drawing._id}/edit`}>Edit</Link>
               <Link className="deatil-link" to={`/gallery/${drawing._id}`}>Delete</Link> */}
                {/* <p className="card-category">Vote</p> */}
                </>
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawing;