
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useParams } from 'react-router-dom';
import './Drawing.css'

const Drawing = ({
  drawing
}) => {
  const { user } = useContext(AuthContext);

  return (
    <>
      
      <div className="card-drawing">
      <Link className="" to={`/gallery/${drawing._id}`}>
      <img src={drawing.imgUrl} className="card-img-top" alt="..." />
                </Link>
        <div className="card-body">
          <h5 className="card-title">Name: {drawing.name}</h5>
          <div className="card-link-container">
            <p className="card-category">
              Category: {drawing.category}
            </p>
            {drawing._ownerId !== user._id
              ? <> 
              {/* <Link className="deatil-link" to={`/drawings/${drawing._id}/edit`}>Edit</Link>
               <Link className="deatil-link" to={`/gallery/${drawing._id}`}>Delete</Link> */}
                <p className="card-category">Vote</p>
                </>
              : null}
          


          </div>

        </div>

      </div>
    </>
  );
};

export default Drawing;