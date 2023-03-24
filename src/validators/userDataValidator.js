export const userDataValidator = (inputName, value) => {
    let errors = {};

    if (inputName === 'email' || inputName === 'username') {
        if (value.length < 3 || value.length > 50) {
            errors[inputName] = `${inputName} should be between 3 and 50 charachters`;
        }
    }

    if (inputName === 'password' || inputName === 'cpassword') {
        if (value.length < 3 || value.length > 10) {
            errors[inputName] = `${inputName} should be between 3 and 10 charachters`;
        }
    }

    return errors;

}