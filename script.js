function toggleMenu() {
    const menu = document.querySelector(".mm-links");
    const icon = document.querySelector(".mm-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const emailButton = document.getElementById("email-button");
const mediaContainer = document.getElementById("media-container");

// Image element
const imageElement = document.createElement("img");
imageElement.src = "assets/fumdown.png";
imageElement.id = "propic";

// Video element
const videoElement = document.createElement("video");
videoElement.src = "assets/fumup.mp4";
videoElement.id = "propic";
videoElement.autoplay = false;
videoElement.loop = false; // we control looping manually
videoElement.muted = true;
videoElement.playsInline = true;

// Play video in reverse slow motion
function playReverseSlowMo(video) {
    video.playbackRate = -0.5; // reverse at half speed
    video.currentTime = video.duration; // start at end
    video.play();
}

// Swap to reverse slow-mo video on hover
emailButton.addEventListener("mouseenter", () => {
    mediaContainer.innerHTML = "";
    mediaContainer.appendChild(videoElement);
    videoElement.addEventListener("loadedmetadata", () => {
        playReverseSlowMo(videoElement);
    }, { once: true });
});

// Swap back to image on hover out
emailButton.addEventListener("mouseleave", () => {
    mediaContainer.innerHTML = "";
    mediaContainer.appendChild(imageElement);
});
