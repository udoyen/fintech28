const stringChecker = /^[A-Za-z ]+$/;
const numberChecker = /^\d+$/;
const emailChecker = /^[A-Za-z0-9. !#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(?:\/[A-Za-z0-9-]+)*$/;

const checkInputIsString = (input) => {
    if(!input.match(stringChecker)) return false;
    return true;
};
const checkInputIsNumber = (input) => {
    if(!input.match(numberChecker)) return false;
    return true;
};
const checkInputIsValidEmail = (input) => {
    if(!input.match(emailChecker)) return false;
    return true;
};

module.exports = {
    checkInputIsString,
    checkInputIsNumber,
    checkInputIsValidEmail
};