const form = document.getElementById('signup_form_version_2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // AlexMethods();
    AndreiMethods();
});

function AlexMethods() {
    //password check
    //gotta add symbol test
    let password = document.getElementById('password').value;
    console.log(password);
    let passwordValid = 
        /[a-z]/.test(password) &
        /[A-Z]/.test(password) &
        /[0-9]/.test(password);
    if(passwordValid) {
        console.log("password is valid");
    } else {
        console.log("password is invalid");
    }

    //zipcode check
    let zipcode = document.getElementById('zipcode').value;
    for(let i = 0; i < 6; i++) {
        if(i < 4 && !/[0-9]/.test(zipcode.charAt(i))) {
            console.log("invalid zipcode bad nums");
            break;
        } else if(i >= 4 && !/[A-Z]/.test(zipcode.charAt(i))) {
            console.log("invalid zipcode bad letters");
            break;
        }
        if(i == 5) {
            console.log("zipcode is valid");
        }
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
    const user_id_length_pattern = /^.{5,12}2$/g;
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