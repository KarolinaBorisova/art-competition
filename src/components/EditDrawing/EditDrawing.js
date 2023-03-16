import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";

import * as drawingService from "../../services/drawingService"
import { DrawingContext } from "../../contexts/DrawingContext"

export default function EditDrawing() {

    const [currentDrawing, setCurrentDrawing] = useState({});
    const {} = useContext(DrawingContext);
    const {drawingId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        drawingService.getOneById(drawingId)
        .then( drawingData => {
            setCurrentDrawing(drawingData);
        })
    },[])

    const onSubmit = (e) => {
        e.preventDefault();

        const drawingData = Object.fromEntries(new FormData(e.target));

        drawingService.edit(drawingId, drawingData)
        .then(result => {
            console.log(result);
            navigate('/')
        })

    }

    return         <div className="form">
    <div className="form-toggle" />
    <div className="form-panel one">
        <div className="form-header">
            <h1>Add drawing</h1>
        </div>
        <div className="form-content">
            <form onSubmit = { onSubmit }>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        required="required"
                        name="name"
                        placeholder="First and Last name"
                        defaultValue={currentDrawing.name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Drawing title</label>
                    <input
                        type="text"
                        required="required"
                        name="title"
                        placeholder="Title"
                        defaultValue={currentDrawing.title}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input
                        type="text"
                        required="required"
                        name="category"
                        placeholder="category"
                        defaultValue={currentDrawing.category}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="imgUrl">Image URL</label>
                    <input
                        type="text"
                        required="required"
                        name="imgUrl"
                        defaultValue={currentDrawing.imgUrl}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="add">Add file</label>
                    <input
                        type="file"
                        name="add"
                    />
                </div>
                <div className="form-group">
                    <button type="submit">Edit</button>
                </div>
            </form>
        </div>
    </div>
</div>

}