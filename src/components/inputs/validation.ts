export const requiredField = 'Field must be filled';

export const requiredOption = 'Option must be choosed';

export const standartValidation = {
    required: requiredField,
    validate: (value: string) => {
        if (value.length <= 128) {
            return true;
        }
        else {
            return 'Too long'
        }
    }
};

export const passwordValidation = {
    required: requiredField,
    validate: (value: string) => {
        if (value.length < 6) {
            return 'Password must contain at least 6 characters'
        }
        else if (value.search(/[a-z]/) < 0) 
        {
            return 'Password must contain at least one lowercase letter'
        } else if (value.search(/[A-Z]/) < 0) 
        {
            return 'Password must contain at least one uppercase letter'
        } else if (value.search(/[0-9]/) < 0) 
        {
            return 'Password must contain at least one number'
        }else if (value.search(/[0-9]/) > 20) 
        {
            return 'Password must contain no more than 20 characters'
        }

        return true;
    }
};

export const emailValidation = {
    required: requiredField,
    validate: (value: string) => {
        if (value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            return true;

        }
        else if (value.length >= 128) {
            return `Email is too long`
        }
        else {
            return 'Invalid email address'
        }
    }
};