
// List of sounds to create buttons for
const sounds = ["applause", "boo", "gasp", "tada", "victory"];

// Create a button for each sound dynamically
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound.charAt(0).toUpperCase() + sound.slice(1); 
  // e.g. 'applause' -> 'Applause'

  // When clicked, stop all sounds then play this one
  btn.addEventListener("click", () => {
    stopAllSounds();
    document.getElementById(sound).play();
  });

  // Append the button inside the #buttons section
  document.getElementById("buttons").appendChild(btn);
});

/**
 * Pause and reset all audio elements
 */
function stopAllSounds() {
  sounds.forEach((sound) => {
    const audioElem = document.getElementById(sound);
    audioElem.pause();
    audioElem.currentTime = 0;
  });
}

// Handle Stop button
const stopBtn = document.getElementById("stop");
stopBtn.addEventListener("click", stopAllSounds);
