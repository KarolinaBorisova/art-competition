import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";

import * as drawingService from "../../services/drawingService"
import * as cloudinaryService from "../../services/cloudinaryService";

import { drawingValidator } from "../../validators/drawingValidator";




import './EditDrawing.css';


export default function EditDrawing() {
 

    const [imageSelected, setImageSelected] = useState("");
    const [currentDrawing, setCurrentDrawing] = useState({});
    const [formErrors, setFormErrors] = useState({
        name: '',
        age: '',
        category: '',
        title: '',
        imgUrl: ''
    })


    const { drawingId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        drawingService.getOneById(drawingId)
            .then(drawingData => {
                setCurrentDrawing(drawingData);


            })
            .catch(err => {
                navigate('/error')
            });

    }, [drawingId,navigate])


    const onSubmit = (e) => {

        e.preventDefault();

        if(
            currentDrawing.name.length<3 ||
            currentDrawing.title.length<3
        ){
            return ;
        }
        
        const imgUrl = 'https://res.cloudinary.com/dbk16pp6v/image/upload/'
        const formData = new FormData();

        if(imageSelected !== ""){
            formData.append("file", imageSelected);
            formData.append("upload_preset", "jjsb6cnx");
    
            cloudinaryService.uploadImage(formData)
                .then((res) => {
                    // setCurrentDrawing(state => ({ ...state, imgUrl: `${imgUrl}${res.public_id}` }));
                    // console.log("current after set", currentDrawing.public_id);
    
                    const newCurrDrawing = { ...currentDrawing, imgUrl: imgUrl + res.public_id };
    
                    drawingService.edit(drawingId, newCurrDrawing)
                        .then(result => {
                            navigate(`/drawings/${result._id}`)
                        })
                        .catch(() => {
                            navigate('/error')
                        });
                });
        }
        else{
            drawingService.edit(drawingId, currentDrawing)
            .then(result => {
                navigate(`/drawings/${result._id}`)
            })
            .catch(() => {
                navigate('/error')
            });  
        }
    }


    const onChange = (e) => {
        setCurrentDrawing(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onAdd = (e) => {
        setImageSelected(e.target.files[0]);
    }

    const onBlurHandler = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;

        let errors = drawingValidator(inputName, value)

        setFormErrors(old=> ({...old,...errors}));
    };

    return <div className="form">
        <div className="form-toggle" />
        <div className="form-panel one">
            <div className="form-header">
                <h1>Edit drawing</h1>
            </div>
            <div className="form-content">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Artist name</label>
                        <input
                            type="text"
                            required="required"
                            name="name"
                            id="name"
                            placeholder="First and Last name"
                            value={currentDrawing.name}
                            onChange={onChange}
                            onBlur={onBlurHandler}
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
                            value={currentDrawing.age}
                            onChange={onChange}
                            onBlur={onBlurHandler}

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
                            placeholder="Title"
                            id="title"
                            value={currentDrawing.title}
                            onChange={onChange}
                            onBlur={onBlurHandler}
                        />
                    </div>
                    {formErrors.title &&
                        <p className="errorMessage">{formErrors.title}</p>}
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <select
                            name="category"
                            required="required"
                            id="category"
                            value={currentDrawing.category}
                            onChange={onChange}
                        >
                            <option value="I group">I group (3-4 years)</option>
                            <option value="II group">II group (4-5 years)</option>
                            <option value="III group">III group (5-6 years)</option>
                            <option value="IV group">IV group (6-7 years)</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="imgUrl">Add file</label>
                        <input
                            type="file"
                            name="imgUrl"
                            id="imgUrl"
                            onChange={onAdd}
                            defaultValue=''
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