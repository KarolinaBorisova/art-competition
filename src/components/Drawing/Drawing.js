
import { Link } from 'react-router-dom';
import './Drawing.css'

const Drawing = ({
  drawing
}) => {

  return (
    <>
      <div className="card-drawing">
        <img src={drawing.imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name: {drawing.name}</h5>
          <div className="card-link-container">
            <p className="card-category">
              Category: {drawing.category}
            </p>
            <Link className="deatil-link" to={`/gallery/${drawing._id}`}>Details</Link>
          </div>

        </div>

      </div>
    </>
  );
};

export default Drawing;