// List of sound file names (without extension) inside the "sounds" folder
    const soundNames = ["sound1", "sound2", "sound3"];

    // Create an Audio object for each sound
    const sounds = soundNames.map((sound) => {
      const audio = new Audio(`./sounds/${sound}.mp3`);
      audio.id = sound;
      return audio;
    });

    // Reference to the container where we'll place our buttons
    const buttonsContainer = document.getElementById("buttons");

    // Function to stop all currently playing sounds
    function stopAllSounds() {
      sounds.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0; // reset to start
      });
    }

    // Create a button for each sound
    soundNames.forEach((sound, index) => {
      const button = document.createElement("button");
      button.innerText = `Play ${sound}`;
      button.className = "btn";
      button.addEventListener("click", () => {
        stopAllSounds(); // stop any other sound
        sounds[index].play(); // play the clicked sound
      });
      buttonsContainer.appendChild(button);
    });

    // Create a global "Stop" button
    const stopButton = document.createElement("button");
    stopButton.innerText = "Stop";
    stopButton.className = "stop";
    stopButton.addEventListener("click", stopAllSounds);
    buttonsContainer.appendChild(stopButton)