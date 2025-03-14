const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressFilled = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const sliders = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');

// 1️⃣ Toggle Play/Pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// 2️⃣ Update Button Text
function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

// 3️⃣ Update Progress Bar
function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}

// 4️⃣ Seek Video by Clicking on Progress Bar
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// 5️⃣ Handle Volume and Playback Speed
function handleSliderUpdate() {
  video[this.name] = this.value;
}

// 6️⃣ Skip Video by 10s or 25s
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// 🎬 Event Listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', updateProgress);

toggle.addEventListener('click', togglePlay);
sliders.forEach(slider => slider.addEventListener('input', handleSliderUpdate));
skipButtons.forEach(button => button.addEventListener('click', skip));

progress.addEventListener('click', scrub);


  