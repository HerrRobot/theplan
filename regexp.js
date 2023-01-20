const form = document.getElementById('signup_form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
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


});