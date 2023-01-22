const form = document.getElementById('signup_form_version_2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let allFieldsValid = AlexMethods();
    AndreiMethods();
    if(allFieldsValid) {
        displayAlert();
    }
});

function AlexMethods() {
    return validateOther();
}

function validateOther() {
    var password = document.getElementById("password").value;
    let password_element = document.getElementById("password");
    let password_validation_text = document.getElementById("password_validation_text");

    var repeat_password = document.getElementById("repeat_password").value;
    let repeat_password_element = document.getElementById("repeat_password");
    let repeat_password_validation_text = document.getElementById("repeat_password_validation_text");

    var zipcode = document.getElementById("zipcode").value;
    let zipcode_element = document.getElementById("zipcode");
    let zipcode_validation_text = document.getElementById("zipcode_validation_text");

    var gender = document.getElementById("gender").value;
    let gender_element = document.getElementById("gender");
    let gender_validation_text = document.getElementById("gender_validation_text");

    var terms = document.getElementById("terms_and_conditions").checked;
    let terms_element = document.getElementById("terms_and_conditions");
    let terms_validation_text = document.getElementById("terms_and_conditions_validation_text");

    let allFieldsValid = true;
    allFieldsValid = allFieldsValid & testPasswordValidity(password, password_element, password_validation_text) &
    testRepeatPasswordValidity(password, repeat_password, repeat_password_element, repeat_password_validation_text) &
    testZipcodeValidity(zipcode, zipcode_element, zipcode_validation_text) &
    testGenderValidity(gender, gender_element, gender_validation_text) &
    testTermsValidity(terms, terms_element, terms_validation_text);

    return allFieldsValid;
}

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

function testRepeatPasswordValidity(password, repeat_password, repeat_password_element, repeat_password_validation_text) {
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
        repeat_password_validation_text.innerHTML = "Password fields do not match.";
        invalidInputRedValidationText(repeat_password_validation_text);
        return false
    }
}

function testZipcodeValidity(zipcode, zipcode_element, zipcode_validation_text) {
    const zipcode_pattern = /^[0-9]{4,4}[a-z]{2,2}$/gi;

    if(zipcode == null || zipcode === "") {
        invalidInputRedBorder(zipcode_element);
        zipcode_validation_text.innerHTML = "This field cannot be empty";
        invalidInputRedValidationText(zipcode_validation_text);
        return false;
    } else if(!zipcode_pattern.test(zipcode)) {
        invalidInputRedBorder(zipcode_element);
        zipcode_validation_text.innerHTML = "Please enter a zipcode in the valid format, something like: 1234AB";
        invalidInputRedValidationText(zipcode_validation_text);
        return false;
    } else {
        validInputGreenBorder(zipcode_element);
        zipcode_validation_text.innerHTML = "Looks good!";
        validInputGreenValidationText(zipcode_validation_text);
        return true;
    }
}

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

function testTermsValidity(terms, terms_element, terms_validation_text) {
    if(!terms) {
        invalidInputRedBorder(terms_element);
        terms_validation_text.innerHTML = "Please agree to the Terms and Conditions.";
        invalidInputRedValidationText(terms_validation_text);
        return false;
    } else {
        validInputGreenBorder(terms_element);
        terms_validation_text.innerHTML = "Looks good!";
        validInputGreenValidationText(terms_validation_text);
        return true;
    }
}

function AndreiMethods() {
    validate();
}

function validate() {
    var user_id = document.getElementById("user_id").value;
    var user_id_element = document.getElementById("user_id");
    var user_id_validation_text = document.getElementById("user_id_validation_text");

    var name = document.getElementById("name").value;
    var name_element = document.getElementById("name");
    var name_validation_text = document.getElementById("name_validation_text");

    var email = document.getElementById("email").value;
    var email_element = document.getElementById("email");
    var email_validation_text = document.getElementById("email_validation_text");

    var language = document.getElementById("language").value;
    var language_element = document.getElementById("language");
    var language_validation_text = document.getElementById("language_validation_text");

    var country = document.getElementById("country").value;
    var country_element = document.getElementById("country");
    var country_validation_text = document.getElementById("country_validation_text");

    testUserIDValidity(user_id, user_id_element, user_id_validation_text);
    testNameValidity(name, name_element, name_validation_text);
    testEmailValidity(email, email_element, email_validation_text);
    testLanguageValidity(language, language_element, language_validation_text);
    testCountryValidity(country, country_element, country_validation_text);
  }

  function testUserIDValidity(user_id, user_id_element, user_id_validation_text) {
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
        user_id_validation_text.innerHTML = "Looks good!";
        validInputGreenValidationText(user_id_validation_text);
    }
  
  }

  function testNameValidity(name, name_element, name_validation_text) {
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
            "Each name must be separated by whitespace, must start with a capital letter, and must only contain letters.";
        invalidInputRedValidationText(name_validation_text);
    }
    else {
        validInputGreenBorder(name_element);
        name_validation_text.innerHTML = "Looks good!";
        validInputGreenValidationText(name_validation_text);
    }
  }

  function testEmailValidity(email, email_element, email_validation_text) {
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
        validInputGreenBorder(email_element);
        email_validation_text.innerHTML = "Looks good!";
        validInputGreenValidationText(email_validation_text);
    }
  }

  function testLanguageValidity(language, language_element, language_validation_text) {
    if(language == null || language === "") {
        invalidInputRedBorder(language_element);
        language_validation_text.innerHTML = "Please select a language.";
        invalidInputRedValidationText(language_validation_text);
    }
    else {
        validInputGreenBorder(language_element);
        language_validation_text.innerHTML = "Looks good!";
        validInputGreenValidationText(language_validation_text);
    }
  }

  function testCountryValidity(country, country_element, country_validation_text) {
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
        validInputGreenBorder(country_element);
        country_validation_text.innerHTML = "Looks good!";
        validInputGreenValidationText(country_validation_text);
    }
  }

  function invalidInputRedBorder(element) {
    element.style.border = "red solid 5px";
  }

  function invalidInputRedValidationText(text) {
    text.style.color = "red";
  }

  function validInputGreenBorder(element) {
    element.style.border = "green solid 5px";
  }

  function validInputGreenValidationText(text) {
    text.style.color = "green";
  }

  function displayAlert() {
    alert("You have successfully submitted this form with the values\n" + 
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