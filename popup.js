const audio = document.getElementById("rain-sound");
const toggleMusicBtn = document.getElementById("toggle-music");
const sceneImg = document.getElementById("scene");
const switchBtn = document.getElementById("switch-scene");

let isPlaying = false;
let currentScene = 0;

const scenes = [
  "assets/rain.gif",
  "assets/rain-moon.gif"
];

// toggle music
toggleMusicBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    toggleMusicBtn.src = "assets/stop-button.png"; // show play icon
  } else {
    audio.play();
    toggleMusicBtn.src = "assets/play-button.png"; // show stop icon
  }
  isPlaying = !isPlaying;
});

// switch scenes
switchBtn.addEventListener("click", () => {
  currentScene = (currentScene + 1) % scenes.length;
  sceneImg.src = scenes[currentScene];

  // music stays off unless user turns it on
  audio.pause();
  toggleMusicBtn.src = "assets/stop-button.png";
  isPlaying = false;
});
