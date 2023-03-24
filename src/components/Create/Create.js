import * as drawingService from '../../services/drawingService';
import { useContext, useState } from 'react';

import { DrawingContext } from '../../contexts/DrawingContext';
import {drawingValidator} from '../../validators/drawingValidator';

import './Create.css';
import { useNavigate } from 'react-router-dom';


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

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        drawingService.create(formValues)
            .then(result => {
                addDrawing(result);
                console.log(result);
            })
            .catch(() => {
                navigate('/error')
            });

    }

    const onChange = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))
    }
    const formChangeHandler = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        
        let errors = drawingValidator(inputName, value)

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
                            <p className="errorMessage">{formErrors.name}</p>}
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
                            <p className="errorMessage">{formErrors.age}</p>}
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
                                onBlur={formChangeHandler}
                            />
                        </div>
                        {formErrors.title &&
                            <p className="errorMessage">{formErrors.title}</p>}
                        <div className="form-group">
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
                                onBlur={formChangeHandler}
                            />
                        </div>
                        {formErrors.imgUrl &&
                            <p className="errorMessage">{formErrors.imgUrl}</p>}
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