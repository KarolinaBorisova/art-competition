 
 
 
 
 
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
        <div className="card-footer">
          <small className="text-muted">Votes</small>
        </div>
      </div>
      </>
    );
 };

 export default Drawing;