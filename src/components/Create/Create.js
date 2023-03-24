import * as drawingService from '../../services/drawingService';
import { useContext, useState } from 'react';

import { DrawingContext } from '../../contexts/DrawingContext';

import './Create.css';


export default function Create() {
    const { addDrawing } = useContext(DrawingContext);
    const [formErrors, setFormErrors] = useState({
        name: '',
        age: '',
        category: '',
        title: '',
        imgUrl: ''
    })
    const [formValues, setFormValues] = useState({
        name: '',
        age: '',
        category: '',
        title: '',
        imgUrl: ''

    })

    const onSubmit = (e) => {
        e.preventDefault();

        const drawingData = Object.fromEntries(new FormData(e.target));

        drawingService.create(drawingData)
            .then(result => {
                addDrawing(result);
                console.log(result);
            })

    }

    const onChange = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }
    const formChangeHandler = (e) => {
        const value = e.target.value;
        let errors = {};
        if (e.target.name === 'name' && value.length < 3 || value.length > 50) {

            errors.name = 'Name should be between 3 and 50 charachters';
        }
        if (e.target.age === 'age' && Number(value) < 3 || Number(value) > 7) {

            errors.age = 'Artist should be between 3 and 7 years old';
        }

        setFormErrors(errors);

    };
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
                            <label htmlFor="name" >Artist name</label>
                            <input
                                type="text"
                                required="required"
                                name="name"
                                id="name"
                                placeholder="First and Last name"
                                value={formValues.name}
                                onChange={onChange}
                                onBlur={formChangeHandler}
                            />
                        </div>
                        {formErrors.name &&
                            <p  className="errorMessage">{formErrors.name}</p>}
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input
                                type="number"
                                required="required"
                                name="age"
                                id="age"
                                min="3"
                                max="7"
                                value={formValues.age}
                                onChange={onChange}
                                onBlur={formChangeHandler}

                            />
                        </div>
                        {formErrors.age &&
                            <p>{formErrors.age}</p>}
                        <div className="form-group">
                            <label htmlFor="title">Drawing title</label>
                            <input
                                type="text"
                                required="required"
                                name="title"
                                id="title"
                                placeholder="Title"
                                value={formValues.title}
                                onChange={onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <select
                                name="category"
                                id="category"
                                required="required"
                                value={formValues.category}
                                onChange={onChange}
                                >
                                <option value="" disabled >Select category</option>
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
                                id="imgUrl"
                                value={formValues.imgUrl}
                                onChange={onChange}
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