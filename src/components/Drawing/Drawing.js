 
import { Link } from 'react-router-dom';
import './Drawing.css' 

 const Drawing = ({
     drawing
    }) => {

    return(
        <>
        <div className="card-drawing">
        <img src={ drawing.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Title: {drawing.text}</h5>
          <p className="card-text">
           Author:
          </p>
        </div>
        {/* <Link className="deatil-link" to={`/gallery/${drawing._id}`}>Details</Link> */}
      </div>
      </>
    );
 };

 export default Drawing;