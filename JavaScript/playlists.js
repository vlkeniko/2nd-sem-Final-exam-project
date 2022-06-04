// -------- FIRST PROTOTYPE FOR THE VINYL ONCLICK FUNCTION -------- 
// function show() {
//     /* Access image by id and change
//     the display property to block*/
//     document.getElementById('day-spotify').style.display = "block";

//     document.getElementById('sun-vinyl').style.display = "block";
// }


// ------------------------ START OF ONCLICK FUNCTION FOR THE SUN & MOON VINYLS ---------------------------

// Inspirational code: https://sebhastian.com/javascript-show-hide-div-onclick-toggle/

// Declare the variables for the Sun-Vinyl & Day Spotify
const daySpotify = document.getElementById("day-spotify");
const sunVinyl = document.getElementById("sun-vinyl");

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
const nightSpotify = document.getElementById("night-spotify");
const moonVinyl = document.getElementById("moon-vinyl");

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