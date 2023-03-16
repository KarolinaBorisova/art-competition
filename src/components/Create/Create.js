import * as drawingService from '../../services/drawingService';
import { useContext } from 'react';

import { DrawingContext } from '../../contexts/DrawingContext';

import './Create.css';


export default function Create() {
    const { addDrawing } = useContext(DrawingContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const drawingData = Object.fromEntries(new FormData(e.target));

        drawingService.create(drawingData)
            .then(result => {
                addDrawing(result);
                console.log(result);
            })

    }
    return (
        <div className="form">
            <div className="form-toggle" />
            <div className="form-panel one">
                <div className="form-header">
                    <h1>Add drawing</h1>
                </div>
                <div className="form-content">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                required="required"
                                name="name"
                                placeholder="First and Last name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Drawing title</label>
                            <input
                                type="text"
                                required="required"
                                name="title"
                                placeholder="Title"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <select  name ="category" required="required" placeholder="Title">
                            <option value="" disabled selected>Select category</option>
                                <option value="I group">I group (3-4 years)</option>
                                <option value="II group">II group (4-5 years)</option>
                                <option value="III group">III group (5-6 years)</option>
                                <option value="IV group">IV group (6-7 years)</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="imgUrl">Image URL</label>
                            <input
                                type="text"
                                required="required"
                                name="imgUrl"
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
                            <button type="submit">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}