var user_id;
var user_id_element;
var user_id_validation_text;
var password;
var password_element;
var password_validation_text;
var form = document.getElementById('log_in_form');;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    init();
    if(validate()) {
        displayAlert();
    }
});

function init() {
    // This is the actual value of the user_id input field
    user_id_element = document.getElementById("log_in_user_id");

    // This is the user_id input field.
    user_id = user_id_element.value;

    // This is the feedback text that appears undeneath the input field, for example "Please provide a user ID."
    // For now it is empty, but it will be altered after the validation process.
    user_id_validation_text = document.getElementById("log_in_user_id_validation_text");

    // The same naming convention is used for the password.
    password_element = document.getElementById("log_in_password");
    password = password_element.value;
    password_validation_text = document.getElementById("log_in_password_validation_text");
}

/**
 * Validates userID and password
 * @returns valididty of input
 */
function validate() {
    var allFieldsValid = true;
    allFieldsValid = allFieldsValid & 
        testPasswordValidity(password, password_element, password_validation_text) &
        testUserIDValidity(user_id, user_id_element, user_id_validation_text);

    return allFieldsValid;
}

/**
 * Validates the input passowrd
 * @param {*} password input in text format
 * @param {*} password_element input field
 * @param {*} password_validation_text feedback text message about the user's input
 * @returns validity of input
 */
function testPasswordValidity(password, password_element, password_validation_text) {
    const password_pattern_1 = /[a-z]/g;
    const password_pattern_2 = /[A-Z]/g;
    const password_pattern_3 = /[0-9]/g;
    const password_pattern_4 = /[!-/:-@\[-`{-~]/g;
    const password_length_patern = /^.{12,}/;
    //this is where I got the idea for the symbol matching
    //https://stackoverflow.com/questions/8359566/regex-to-match-symbols
    let password_valid = true;
    let password_invalid_text = "Please enter a valid password which ";
    if(!password_pattern_1.test(password)) {
        password_valid = false;
        password_invalid_text += "has at least one lowercase letter, ";
    }
    if(!password_pattern_2.test(password)) {
        password_valid = false;
        password_invalid_text += "has at least one uppercase letter, ";
    }
    if(!password_pattern_3.test(password)) {
        password_valid = false;
        password_invalid_text += "has at least one digit, ";
    }
    if(!password_pattern_4.test(password)) {
        password_valid = false;
        password_invalid_text += "has at least one symbol, ";
    }
    if(!password_length_patern.test(password) || password == null || password === "") {
        password_valid = false;
        password_invalid_text += "is at least 12 characters long.";
    } else {
        password_invalid_text = password_invalid_text.substring(0, password_invalid_text.length-2) + ".";
    }

    if(password_valid) {
        validInputGreenBorder(password_element);
        password_validation_text.innerHTML = "Looks good!";
        validInputGreenValidationText(password_validation_text);
    } else {
        invalidInputRedBorder(password_element);
        password_validation_text.innerHTML = password_invalid_text;
        invalidInputRedValidationText(password_validation_text);
    }
    return password_valid;

}

/**
 * Validates the input user_id
 * @param {*} user_id input in text format
 * @param {*} user_id_element input field
 * @param {*} user_id_validation_text feedback text message about the user's input
 * @returns valididty of input
 */
function testUserIDValidity(user_id, user_id_element, user_id_validation_text) {
    let valid = false;
    const user_id_pattern = /^[A-Z].*(\d|\W)$/g;
    const user_id_length_pattern = /^.{5,12}$/g;
    const user_id_nowhitespace_pattern = /^[^\s]*$/g;

    if(user_id == null || user_id === "") {
        invalidInputRedBorder(user_id_element);
        user_id_validation_text.innerHTML = 
            "Please provide a user ID.";
        invalidInputRedValidationText(user_id_validation_text);
    }
    else if(!user_id_pattern.test(user_id)) {
        invalidInputRedBorder(user_id_element);
        user_id_validation_text.innerHTML = 
            "The user ID needs to start with an uppercase letter and end with a digit/special character.";
        invalidInputRedValidationText(user_id_validation_text);
    }
    else if(!user_id_length_pattern.test(user_id)) {
        invalidInputRedBorder(user_id_element);
        user_id_validation_text.innerHTML = 
            "The user ID needs to be at least 5 and at most 12 characters long.";
        invalidInputRedValidationText(user_id_validation_text);

    }
    else if(!user_id_nowhitespace_pattern.test(user_id)) {
        invalidInputRedBorder(user_id_element);
        user_id_validation_text.innerHTML = 
            "The user ID can't have whitespaces.";
        invalidInputRedValidationText(user_id_validation_text);
    }
    else {
        valid = true;
        validInputGreenBorder(user_id_element);
        user_id_validation_text.innerHTML = "Looks good!";
        validInputGreenValidationText(user_id_validation_text);
    }

    return valid;
}

/**
 * Turns an input field box green in case of valid input.
 * @param {*} element input field
 */
function validInputGreenBorder(element) {
    element.style.border = "green solid 5px";
}

/**
 * Turns an input field box red in case of invalid input.
 * @param {*} element input field
 */
function invalidInputRedBorder(element) {
    element.style.border = "red solid 5px";
}

/**
 * Turns the feedback text for an input field red in case of invalid input.
 * @param {*} text feedback text
 */
function invalidInputRedValidationText(text) {
    text.style.color = "red";
}


/**
 * Turns the feedback text for a field green in case of valid input.
 * @param {*} text feedback text
 */
function validInputGreenValidationText(text) {
    text.style.color = "green";
}

/**
 * Displays an alert with the data input by the user.
 * Thsi function is called in case all input was valid.
 */
function displayAlert() {
    alert("You have successfully submitted this form with the values\n" + 
        "UserID: " + user_id + 
        "\nPassword: " + password);
}