
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import './DrawingGroupItem.css'

const DrawingGroupItem = ({
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
      <Link className="" to={`/gallery/${drawing._id}`}>
      <img src={drawing.imgUrl} className="card-img-top" alt="..." />
                </Link>
        <div className="card-body">
          <h5 className="card-title">{drawing.name}</h5>
          <h5 className="card-title">{drawing.age} years</h5>
          <div className="card-link-container">
            {drawing._ownerId !== user._id
              ? <> 
              {/* <Link className="deatil-link" to={`/drawings/${drawing._id}/edit`}>Edit</Link>
               <Link className="deatil-link" to={`/gallery/${drawing._id}`}>Delete</Link> */}
                <p className="card-category">Vote</p>
                
                </>
              : null}
             <p className="card-title">Votes</p>

          </div>

        </div>

      </div>
    </>
  );
};

export default DrawingGroupItem;