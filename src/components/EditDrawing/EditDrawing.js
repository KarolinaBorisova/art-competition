import { useContext, useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";

import * as drawingService from "../../services/drawingService"
import { DrawingContext } from "../../contexts/DrawingContext"
import { drawingValidator } from "../../validators/drawingValidator";
import { uploadImage } from '../../services/uploadImageCloudinary';



import './EditDrawing.css';


export default function EditDrawing() {

    const [imageSelected, setImageSelected] = useState("");
    const [currentDrawing, setCurrentDrawing] = useState({});
    const [formValues, setFormValues] = useState({
        name: '',
        age: '',
        category: '',
        title: '',
        imgUrl: ''

    })
    const [formErrors, setFormErrors] = useState({
        name: '',
        age: '',
        category: '',
        title: '',
        imgUrl: ''
    })


    const {} = useContext(DrawingContext);
    const {drawingId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        drawingService.getOneById(drawingId)
        .then( drawingData => {
            setCurrentDrawing(drawingData);
        })
        .catch(err => {
            navigate('/error')
        });

    },[drawingId])


    useEffect(() => {
        if(formValues.imgUrl != ''){
            drawingService.edit(drawingId, formValues)
    .then(result => {
        console.log(result);
        navigate(`/drawings/${result._id}`)
    })
    .catch(() => {
        navigate('/error')
    });
        }
        

    },[formValues.imgUrl])


    
  
 

    const onSubmit =  async(e) => {
        
        e.preventDefault();
        const imgUrl = 'https://res.cloudinary.com/dbk16pp6v/image/upload/'
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "jjsb6cnx");

        var cloudinaryImg = await uploadImage(formData)
        console.log(cloudinaryImg)
        console.log('cloudinaryImg');
        console.log(cloudinaryImg.public_id);
        
        setFormValues(state => ({ ...state, imgUrl: `${imgUrl}${cloudinaryImg.public_id}` }));
        console.log('formVAlues');
        console.log(formValues);    
      
    }

 
    const onChange = (e) => {
        if (e.target.name != 'imgUrl') {
            setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
            setCurrentDrawing(state => ({ ...state, [e.target.name]: e.target.value }));
        }
        else{
            setImageSelected(e.target.files[0]);
        }

    }
    const formChangeHandler = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;
        
        let errors = drawingValidator(inputName, value)

        setFormErrors(errors);

    };

    return         <div className="form">
    <div className="form-toggle" />
    <div className="form-panel one">
        <div className="form-header">
            <h1>Edit drawing</h1>
        </div>
        <div className="form-content">
            <form onSubmit = { onSubmit }>
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
                        placeholder="Title"
                        id="title"
                        value={currentDrawing.title}
                        onChange={onChange}
                        onBlur={formChangeHandler}
                    />
                </div>
                {formErrors.title &&
                            <p className="errorMessage">{formErrors.title}</p>}
                <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <select  
                            name ="category" 
                            required="required" 
                            id = "category"
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
                                
                                onChange={onChange}
                                
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