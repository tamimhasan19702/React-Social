export const usernameValidate = {
    required : {
        value: true,
        message: "Please enter username",
    },
    minLength: {
        value: 6,
        message: "Username must be at least 6 characters long",
    },
    pattern: {
        value: /^[a-zA-Z0-9]+$/, //Regex pattern for username validation
        message: "Username must be alfanumeric",
    },
};

export const emailValidate = {
    required : {
        value: true,
        message: "Please enter your Email address",
    },
    pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, //Regex pattern for email validation
        message: "Email address is not valid",
    },
};

export const passwordValidate = {
    required : {
        value: true,
        message: "Please enter password",
    },
    minLength: {
        value: 6,
        message: "Password must be at least 6 charcters long",
    },
};