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
// eventListeners();




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

function eventListeners() {
    window.addEventListener("click", function() {
        mouse_clicks++;
    });
}


function updateStatistics() {
    mouse_clicks_container.innerHTML = 
        "Number of mouse clicks: " + mouse_clicks;
    time_spent_container.innerHTML = 
        "Total time spent: " + time_spent;
    key_presses_container.innerHTML = 
        "Total key presses: " + key_presses;
    characters_typed_container.innerHTML = 
        "Total number of characters typed: " + characters_typed;
}

function displayStatistics() {
    behavioral_stats_container.style.display = "block";
}