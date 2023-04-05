
export const drawingValidator = (inputName, value) => {

    let errors = {};

    if (inputName === 'name') {
        if (value.length < 3 || value.length > 50) {
            errors.name = 'Name should be between 3 and 50 charachters';
        }
        else {
            errors.name = '';
        }
    }


if (inputName === 'title') {
    if (value.length < 3 || value.length > 40) {
        errors.title = 'Title should be between 3 and 40 charachters';
    }
    else {
        errors.title = '';
    }
}

if (inputName === 'age' && (Number(value) < 3 || Number(value) > 7)) {

    errors.age = 'Artist should be between 3 and 7 years old';
}
if (inputName === 'imgUrl' && value.length < 3) {

    errors.imgUrl = 'Not valid URL';
}

return errors;

}