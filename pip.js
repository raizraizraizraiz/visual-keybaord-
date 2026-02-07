 HEAD
// Handle to the picture-in-picture window.
let pipWindow = null;

async function enterPiP() {
  const player = document.querySelector("#player");

  const pipOptions = {
    width: player.clientWidth,
    height: player.clientHeight,
  };

  pipWindow = await documentPictureInPicture.requestWindow(pipOptions);

  // Style remaining container to imply the player is in PiP.
  const playerContainer = document.querySelector("#player-container");
  playerContainer.classList.add("pip-mode");

  // Add player to the PiP window.
  pipWindow.document.body.append(player);

  // Listen for the PiP closing event to put the video back.
  pipWindow.addEventListener("pagehide", onLeavePiP.bind(pipWindow), {
    once: true,
  });
}

// Called when the PiP window has closed.
function onLeavePiP() {
  if (this !== pipWindow) {
    return;
  }

  // Remove PiP styling from the container.
  const playerContainer = document.querySelector("#player-container");
  playerContainer.classList.remove("pip-mode");

  // Add the player back to the main window.
  const pipPlayer = pipWindow.document.querySelector("#player");
  playerContainer.append(pipPlayer);

  pipWindow = null;
const pipVideo = pipWindow.document.querySelector("#video");
pipVideo.loop = true;

// Handle to the picture-in-picture window.
let pipWindow = null;

async function enterPiP() {
  const player = document.querySelector("#player");

  const pipOptions = {
    width: player.clientWidth,
    height: player.clientHeight,
  };

  pipWindow = await documentPictureInPicture.requestWindow(pipOptions);

  // Style remaining container to imply the player is in PiP.
  const playerContainer = document.querySelector("#player-container");
  playerContainer.classList.add("pip-mode");

  // Add player to the PiP window.
  pipWindow.document.body.append(player);

  // Listen for the PiP closing event to put the video back.
  pipWindow.addEventListener("pagehide", onLeavePiP.bind(pipWindow), {
    once: true,
  });
}

// Called when the PiP window has closed.
function onLeavePiP() {
  if (this !== pipWindow) {
    return;
  }

  // Remove PiP styling from the container.
  const playerContainer = document.querySelector("#player-container");
  playerContainer.classList.remove("pip-mode");

  // Add the player back to the main window.
  const pipPlayer = pipWindow.document.querySelector("#player");
  playerContainer.append(pipPlayer);

  pipWindow = null;
const pipVideo = pipWindow.document.querySelector("#video");
pipVideo.loop = true;
}