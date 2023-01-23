var mouse_clicks;
var time_spent;
var key_presses;
var characters_typed;

var behavioral_stats_container;
var mouse_clicks_container;
var time_spent_container;
var key_presses_container;
var characters_typed_container;

var form;

window.onload = function() {
    init();
    eventListeners();
}





function init() {
    mouse_clicks = 0;
    // time_spent = 0;
    // key_presses = 0;
    characters_typed = 0;

    behavioral_stats_container = document.getElementById("behavioral_stats_container");
    mouse_clicks_container = document.getElementById("mouse_clicks_container");
    time_spent_container = document.getElementById("time_spent_container");
    key_presses_container = document.getElementById("key_presses_container");
    characters_typed_container = document.getElementById("characters_typed_container");


    form = document.getElementById("signup_form_version_2");
}

function eventListeners() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        displayStatistics();
    });

    window.addEventListener("click", function() {
        mouse_clicks++;
    });


}

function displayStatistics() {
    
}