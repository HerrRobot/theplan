// This is the value of the user_id input field.
var user_id;

// This is the user_id input field
var user_id_element;

// This is the feedback text that appears undeneath the input field, for example "Please provide a user ID."
// For now it is empty, but it will be altered after the validation process.
var user_id_validation_text;


// The same naming convention is used for the rest of the variables.
var name;
var name_element;
var name_validation_text;

var email;
var email_element
var email_validation_text;

var language;
var language_element;
var language_validation_text;

var country;
var country_element;
var country_validation_text;

var password;
let password_element;
let password_validation_text;

var repeat_password;
let repeat_password_element;
let repeat_password_validation_text;

var zipcode;
let zipcode_element;
let zipcode_validation_text;

var gender;
let gender_element;
let gender_validation_text;

var terms;
let terms_element;
let terms_validation_text;


const form = document.getElementById('sign_up_form_version_2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    initializeVariables();
    if(validate()) {
        displayAlert();
    }
    updateStatistics();
    displayStatistics();
});

function initializeVariables() {
    // This is the value of the user_id input field.
    user_id = document.getElementById("user_id").value;

    // This is the user_id input field
    user_id_element = document.getElementById("user_id");

    // This is the feedback text that appears undeneath the input field, for example "Please provide a user ID."
    // For now it is empty, but it will be altered after the validation process.
    user_id_validation_text = document.getElementById("user_id_validation_text");


    // The same naming convention is used for the rest of the variables.
    name = document.getElementById("name").value;
    name_element = document.getElementById("name");
    name_validation_text = document.getElementById("name_validation_text");

    email = document.getElementById("email").value;
    email_element = document.getElementById("email");
    email_validation_text = document.getElementById("email_validation_text");

    language = document.getElementById("language").value;
    language_element = document.getElementById("language");
    language_validation_text = document.getElementById("language_validation_text");

    country = document.getElementById("country").value;
    country_element = document.getElementById("country");
    country_validation_text = document.getElementById("country_validation_text");

    password = document.getElementById("password").value;
    password_element = document.getElementById("password");
    password_validation_text = document.getElementById("password_validation_text");

    repeat_password = document.getElementById("repeat_password").value;
    repeat_password_element = document.getElementById("repeat_password");
    repeat_password_validation_text = document.getElementById("repeat_password_validation_text");

    zipcode = document.getElementById("zipcode").value;
    zipcode_element = document.getElementById("zipcode");
    zipcode_validation_text = document.getElementById("zipcode_validation_text");

    gender = document.getElementById("gender").value;
    gender_element = document.getElementById("gender");
    gender_validation_text = document.getElementById("gender_validation_text");

    terms = document.getElementById("terms_and_conditions").checked;
    terms_element = document.getElementById("terms_and_conditions");
    terms_validation_text = document.getElementById("terms_and_conditions_validation_text");
}



/**
 * Validates all the fields that have a certain format:
 * 
 * These are the fields Alex validated:
 * password (and repeat password)
 * zipcode
 * gender
 * terms and conditions
 * 
 * These are the fields Andrei validated:
 * user_id
 * name
 * email
 * langauge
 * country
 * 
 * @returns validity of all input
 */
function validate() {
    let allFieldsValid = true;

    // Alex's validation checks
    allFieldsValid = allFieldsValid &
        testRepeatPasswordValidity(
            testPasswordValidity(password, password_element, password_validation_text),
            password, repeat_password, repeat_password_element, repeat_password_validation_text) &
        testZipcodeValidity(zipcode, zipcode_element, zipcode_validation_text) &
        testGenderValidity(gender, gender_element, gender_validation_text) &
        testTermsValidity(terms, terms_element, terms_validation_text) &

        // Andrei's validation checks
        testUserIDValidity(user_id, user_id_element, user_id_validation_text) & 
        testNameValidity(name, name_element, name_validation_text) & 
        testEmailValidity(email, email_element, email_validation_text) & 
        testLanguageValidity(language, language_element, language_validation_text) & 
        testCountryValidity(country, country_element, country_validation_text);

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
        validInputGreenValidationText(password_validation_text);
        
        if(!(/^.{14,}/g.test(password))) {
            password_validation_text.innerHTML = "The password is valid, but it is better if it is at least 14 characters long.";
        }
        else {
            password_validation_text.innerHTML = "Looks good!";
        }
    } else {
        invalidInputRedBorder(password_element);
        password_validation_text.innerHTML = password_invalid_text;
        invalidInputRedValidationText(password_validation_text);
    }
    return password_valid;

}

/**
 * Validates the input repeat passowrd
 * @param {*} password_validity validity of password input in the field above
 * @param {*} password input in text format
 * @param {*} repeat_password input in text format
 * @param {*} repeat_password_element input field
 * @param {*} repeat_password_validation_text feedback text message about the user's input
 * @returns validity of input
 */
function testRepeatPasswordValidity(password_validity, password, 
        repeat_password, repeat_password_element, repeat_password_validation_text) {
    
    if(password_validity == false) {
        invalidInputRedBorder(repeat_password_element);
        repeat_password_validation_text.innerHTML = "Please provide a valid password in the 'Password' field above.";
        invalidInputRedValidationText(repeat_password_validation_text);
        return false;
    }

    if(repeat_password == null || repeat_password === "") {
        invalidInputRedBorder(repeat_password_element);
        repeat_password_validation_text.innerHTML = "This field cannot be empty.";
        invalidInputRedValidationText(repeat_password_validation_text);
        return false;
    } else if(password === repeat_password) {
        validInputGreenBorder(repeat_password_element);
        repeat_password_validation_text.innerHTML = "Looks good!";
        validInputGreenValidationText(repeat_password_validation_text);
        return true;
    } else {
        invalidInputRedBorder(repeat_password_element);
        repeat_password_validation_text.innerHTML = "Passwords do not match.";
        invalidInputRedValidationText(repeat_password_validation_text);
        return false
    }
}

/**
 * Validates the input zipcode
 * @param {*} zipcode input in text format
 * @param {*} zipcode_element input field
 * @param {*} zipcode_validation_text feedback text message about the user's input
 * @returns validity of input
 */
function testZipcodeValidity(zipcode, zipcode_element, zipcode_validation_text) {
    const zipcode_pattern = /^[0-9]{4,4}[a-z]{2,2}$/gi;

    if(zipcode == null || zipcode === "") {
        invalidInputRedBorder(zipcode_element);
        zipcode_validation_text.innerHTML = "This field cannot be empty";
        invalidInputRedValidationText(zipcode_validation_text);
        return false;
    } else if(!zipcode_pattern.test(zipcode)) {
        invalidInputRedBorder(zipcode_element);
        zipcode_validation_text.innerHTML = "Please enter a zipcode in the Dutch valid format.";
        invalidInputRedValidationText(zipcode_validation_text);
        return false;
    } else {
        validInputGreenBorder(zipcode_element);
        zipcode_validation_text.innerHTML = "Looks good!";
        validInputGreenValidationText(zipcode_validation_text);
        return true;
    }
}

/**
 * Validates the input gender
 * @param {*} gender input in text format
 * @param {*} gender_element input field
 * @param {*} gender_validation_text feedback text message about the user's input
 * @returns validity of input
 */
function testGenderValidity(gender, gender_element, gender_validation_text) {
    if(gender == null || gender === "") {
        invalidInputRedBorder(gender_element);
        gender_validation_text.innerHTML = "Please select your gender.";
        invalidInputRedValidationText(gender_validation_text);
        return false;
    } else {
        validInputGreenBorder(gender_element);
        gender_validation_text.innerHTML = "Looks good!";
        validInputGreenValidationText(gender_validation_text);
        return true;
    }
}

/**
 *
 * Validates the input terms and conditions 
 * (whether the user checked the terms and conditions box or not)
 * @param {*} terms input in text format
 * @param {*} terms_element input field
 * @param {*} terms_validation_text feedback text message about the user's input
 * @returns validity of input
 */
function testTermsValidity(terms, terms_element, terms_validation_text) {
    if(!terms) {
        invalidInputRedBorder(terms_element);
        terms_validation_text.innerHTML = "Please agree to the Terms and Conditions.";
        invalidInputRedValidationText(terms_validation_text);
        return false;
    } else {
        terms_validation_text.innerHTML = "";
        validInputGreenBorder(user_id_element);
        validInputGreenValidationText(user_id_validation_text);
        return true;
    }
}

/**
 * Validates the input user_id
 * @param {*} user_id input in text format
 * @param {*} user_id_element input field
 * @param {*} user_id_validation_text feedback text message about the user's input
 * @returns validity of input
 */
function testUserIDValidity(user_id, user_id_element, user_id_validation_text) {
    var valid = false;
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
        validInputGreenBorder(user_id_element);
        valid = true;
        user_id_validation_text.innerHTML = "Looks good!";
        validInputGreenValidationText(user_id_validation_text);
    }

    return valid;
}

/**
 * Validates the input name
 * @param {*} name input in text format
 * @param {*} name_element input field
 * @param {*} name_validation_text feedback text message about the user's input
 * @returns validity of input
 */
function testNameValidity(name, name_element, name_validation_text) {
    var valid = false;
    const name_pattern = /^[A-Z][a-z]+((\s)+[A-Z][a-z]+)*$/g;

    if(name == null || name === "") {
        invalidInputRedBorder(name_element);
        name_validation_text.innerHTML = 
            "Please provide a name.";
        invalidInputRedValidationText(name_validation_text);
    }
    else if(!name_pattern.test(name)) {
        invalidInputRedBorder(name_element);
        name_validation_text.innerHTML = 
            "Each name must be separated by whitespace, start with a capital letter, and only contain letters.";
        invalidInputRedValidationText(name_validation_text);
    }
    else {
        valid = true;
        validInputGreenBorder(name_element);
        name_validation_text.innerHTML = "Looks good!";
        validInputGreenValidationText(name_validation_text);
    }

    return valid;
}

/**
 * Validates the input email
 * @param {*} email input in text format
 * @param {*} email_element input field
 * @param {*} email_validation_text feedback text message about the user's input
 * @returns valididty of input
 */
function testEmailValidity(email, email_element, email_validation_text) {
    var valid = false;

    // template for valid email addresses at
    // https://help.xmatters.com/ondemand/trial/valid_email_format.htm#:~:text=A%20valid%20email%20address%20consists,com%22%20is%20the%20email%20domain.

    const email_pattern = 
        /^\w([-\._]\w|\w)+@(\w|\w[-_]\w)+\.[a-z]{2,}$/i;

    if(email == null || email === "") {
        invalidInputRedBorder(email_element);
        email_validation_text.innerHTML = "Please provide an email address.";
        invalidInputRedValidationText(email_validation_text);
    }
    else if(!email_pattern.test(email)) {
        invalidInputRedBorder(email_element);
        email_validation_text.innerHTML = "The email needs to be a valid email address.";
        invalidInputRedValidationText(email_validation_text);
    }
    else {
        valid = true;
        validInputGreenBorder(email_element);
        email_validation_text.innerHTML = "Looks good!";
        validInputGreenValidationText(email_validation_text);
    }

    return valid;
}

/**
 * Validates the input language
 * @param {*} language input in text format
 * @param {*} language_element input field
 * @param {*} language_validation_text feedback text message about the user's input
 * @returns validity of input
 */
function testLanguageValidity(language, language_element, language_validation_text) {
    var valid = false;
    if(language == null || language === "") {
        invalidInputRedBorder(language_element);
        language_validation_text.innerHTML = "Please select a language.";
        invalidInputRedValidationText(language_validation_text);
    }
    else {
        valid = true;
        validInputGreenBorder(language_element);
        language_validation_text.innerHTML = "Looks good!";
        validInputGreenValidationText(language_validation_text);
    }

    return valid;
}

/**
 * Validates the input country
 * @param {*} country input in text format
 * @param {*} country_element input field
 * @param {*} country_validation_text feedback text message about the user's input
 * @returns validity of input
 */
function testCountryValidity(country, country_element, country_validation_text) {
    var valid = false;
    // The country input is case insensitive because 
    // they can be searched in a database regardless of the case
    const country_pattern = 
        /^[a-z](\s|[a-z])*$/i;

    if(country == null || country === "") {
        invalidInputRedBorder(country_element);
        country_validation_text.innerHTML = "Please input your country.";
        invalidInputRedValidationText(language_validation_text);
    }
    else if(!country_pattern.test(country)) {
        invalidInputRedBorder(country_element);
        country_validation_text.innerHTML = "Please input a valid country.";
        invalidInputRedValidationText(country_validation_text);
    }
    else {
        valid = true;
        validInputGreenBorder(country_element);
        country_validation_text.innerHTML = "Looks good!";
        validInputGreenValidationText(country_validation_text);
    }

    return valid;
}

/**
 * Turns an input field box red in case of invalid input.
 * @param {*} element input field
 */
function invalidInputRedBorder(element) {
    element.style.border = "red solid 5px";
}

/**
 * Turns an input field box green in case of valid input.
 * @param {*} element input field
 */
function validInputGreenBorder(element) {
    element.style.border = "green solid 5px";
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
    alert("You have successfully submitted this form with the values:\n\n" + 
        "UserID: " + document.getElementById("user_id").value + 
        "\nPassword: " + document.getElementById("password").value + 
        "\nName: " + document.getElementById("name").value +
        "\nEmail: " + document.getElementById("email").value +
        "\nGender: " + document.getElementById("gender").value +
        "\nLanguage: " + document.getElementById("language").value +
        "\nAbout/bio: " + document.getElementById("about").value +
        "\nCountry: " + document.getElementById("country").value +
        "\nCity: " + document.getElementById("city").value +
        "\nZIP Code: " + document.getElementById("zipcode").value +
        "\nStreet: " + document.getElementById("street").value +
        "\nStreet Number: " + document.getElementById("street_number").value);
}