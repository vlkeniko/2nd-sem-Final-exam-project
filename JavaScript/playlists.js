// ------------------------ START OF ONCLICK FUNCTION FOR THE SUN & MOON VINYLS ---------------------------

// Inspirational code: https://sebhastian.com/javascript-show-hide-div-onclick-toggle/

// Declare the variables for the Sun-Vinyl & Day Spotify
const sunVinyl = document.getElementById("sun-vinyl");
const daySpotify = document.getElementById("day-spotify");

// Create a function that shows/hides the Spotify playlist if you click on the Vinyl image
sunVinyl.onclick = function () {
  // If the Spotify playlist isn't shown
  if (daySpotify.style.display !== "block") {
    // then show it
    daySpotify.style.display = "block";
  } else {  //if it is shown
    daySpotify.style.display = "none";
    // then hide it
  }
};

// Declare the variables for the Moon-Vinyl & Night Spotify
const moonVinyl = document.getElementById("moon-vinyl");
const nightSpotify = document.getElementById("night-spotify");

// Create a function that shows/hides the Spotify playlist if you click on the Vinyl image
moonVinyl.onclick = function () {
  // If the Spotify playlist isn't shown
  if (nightSpotify.style.display !== "block") {
    // then show it
    nightSpotify.style.display = "block";
  } else {  //if it is shown
    nightSpotify.style.display = "none";
    // then hide it
  }
};

// ------------------------- END OF ONCLICK FUNCTION FOR THE SUN & MOON VINYLS ---------------------------



// --------------- START OF ON-MOUSE-OVER & OUT FUNCTION FOR THE Facebook & Instagram ICONS ------------------

// Declare the variables for the Orange Facebook Icon & Rainbow Facebook Icon
const fbkIcon = document.getElementById("fbk-icon");
const fbkIconRainbow = document.getElementById("fbk-icon-rainbow");

// Create functions that changes the Orange Facebook Icon if you hover over it with the Rainbow Facebook icon
// If the mouse is over the Orange Fbk Icon
fbkIcon.onmouseover = function () {
  // then hide it
  fbkIcon.style.display = "none";
  // and show the Rainbow Fbk Icon
  fbkIconRainbow.style.display = "block";
};

// If the mouse is out the Rainbow Fbk Icon
fbkIcon.onmouseout = function () {
  // then hide it
  fbkIconRainbow.style.display = "none";
  // and show the Orange Fbk Icon
  fbkIcon.style.display = "block";
};


// Declare the variables for the Orange Instagram Icon & Rainbow Instagram Icon
const igIcon = document.getElementById("ig-icon");
const igIconRainbow = document.getElementById("ig-icon-rainbow");

// Create functions that changes the Orange Instagram Icon if you hover over it with the Rainbow Instagram icon
// If the mouse is over the Orange Ig Icon
igIcon.onmouseover = function () {
  // then hide it
  igIcon.style.display = "none";
  // and show the Rainbow Ig Icon
  igIconRainbow.style.display = "block";
};

// If the mouse is out the Rainbow Ig Icon
igIcon.onmouseout = function () {
  // then hide it
  igIconRainbow.style.display = "none";
  // and show the Orange Ig Icon
  igIcon.style.display = "block";
};

// --------------- END OF ON-MOUSE-OVER & OUT FUNCTION FOR THE Facebook & Instagram ICONS ------------------