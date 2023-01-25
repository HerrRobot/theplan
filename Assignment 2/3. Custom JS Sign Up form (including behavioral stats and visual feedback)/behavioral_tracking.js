var start_time = Date.now();

var mouse_clicks;
var time_spent;
var key_presses;
var characters_typed;

var behavioral_stats_container;
var mouse_clicks_container;
var time_spent_container;
var key_presses_container;
var characters_typed_container;

init();
eventListeners();


/**
 * Initializes variables necessary for behavioral tracking.
 */
function init() {
    
    mouse_clicks = 0;
    time_spent = 0;
    key_presses = 0;
    characters_typed = 0;

    behavioral_stats_container = document.getElementById("behavioral_stats_container");
    mouse_clicks_container = document.getElementById("mouse_clicks_container");
    time_spent_container = document.getElementById("time_spent_container");
    key_presses_container = document.getElementById("key_presses_container");
    characters_typed_container = document.getElementById("characters_typed_container");
}

/**
 * Initializes event listeners necessary for behavioral tracking.
 */
function eventListeners() {
    // 1. Mouse Click event listener
    signup_form_body.addEventListener("click", function() {
        mouse_clicks++;
    });

    // 3. Keypress event listener
    document.querySelectorAll(".sign_up_input_field").forEach(
        item => {
            item.addEventListener("keypress", function() {
                key_presses++;
            });
        }
    )
    
}

/**
 * The time calculation function is pretty simple, it basically calculates the time between the
 * time when the script is executed (on line 1 the current time is assigned to the variable start_time) 
 * and the user submitting the form (current time is taken agan on the first line in this function).
 * The rest is just some calculations to convert the miliseconds into a string of minutes and seconds.
 */
function calculateTime() {
    let total_time_milis = Date.now() - start_time;
    let total_time_minutes = Math.floor(total_time_milis/60000);
    let total_time_seconds = (total_time_milis%60000)/1000;
    time_spent = total_time_minutes + " mins  " + total_time_seconds + " secs";
}

/**
 * To get the number of typed characters we sum the length of the string inputs from each field that te user
 * has filled out.
 */
function characterCount() {
    let fields = document.getElementsByClassName("sign_up_input_field");
    characters_typed = 0;
    for(let i = 0; i < fields.length; i++) {
        if(fields[i].id == "gender" || fields[i].id == "language" || fields[i].id == "terms_and_conditions") {
            continue;
        }
        characters_typed += fields[i].value.length;
    }
}

/**
 * Adds the statistics to the behvaioral stats textbox called behavioral_stats_container.
 * This function is called once the form is submitted. (in regex_validation_for_2nd_sign_up_form.js)
 */
function updateStatistics() {
    calculateTime();
    characterCount();
    mouse_clicks_container.innerHTML = 
        "Number of mouse clicks: " + mouse_clicks;
    time_spent_container.innerHTML = 
        "Total time spent: " + time_spent;
    key_presses_container.innerHTML = 
        "Total key presses: " + key_presses;
    characters_typed_container.innerHTML = 
        "Total number of characters typed: " + characters_typed;
}

/**
 * Makes behavioral_stats_container visible.
 * This function is called once the form is submitted. (in regex_validation_for_2nd_sign_up_form.js)
 */
function displayStatistics() {
    behavioral_stats_container.style.display = "block";
}