const durationInput = document.getElementById('duration');
const startButton = document.getElementById('start');

startButton.addEventListener('click', () => {
  // Parse the duration input
  const parts = durationInput.value.split(':');
  const hours = parseInt(parts[0]);
  const minutes = parseInt(parts[1]);
  const seconds = parseInt(parts[2]);

  // Calculate the total duration in milliseconds
  const totalDuration = (hours * 60 * 60 + minutes * 60 + seconds) * 1000;

  // Start the timer
  const startTime = Date.now();
  const endTime = startTime + totalDuration;
  const timerInterval = setInterval(() => {
    // Calculate the remaining time
    const remainingTime = endTime - Date.now();
    if (remainingTime <= 0) {
      // The timer has expired
      clearInterval(timerInterval);
      playSound();
      window.alert('Timer expired!');
    } else {
      // Update the timer display
      const remainingHours = Math.floor(remainingTime / (60 * 60 * 1000)).toString().padStart(2, '0');
      const remainingMinutes = Math.floor(remainingTime / (60 * 1000) % 60).toString().padStart(2, '0');
      const remainingSeconds = Math.floor(remainingTime / 1000 % 60).toString().padStart(2, '0');
      durationInput.value = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
    }
  }, 1000);
});

function playSound() {
  const audio = new Audio('E:\sam.mp3');
  audio.play();
}
