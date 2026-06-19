// Countdown Timer Logic (Hamburg Marathon 2027 - assuming April 25, 2027)
const targetDate = new Date('April 25, 2027 09:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference < 0) {
    document.getElementById('days').innerText = '00';
    document.getElementById('hours').innerText = '00';
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = String(days).padStart(2, '0');
  document.getElementById('hours').innerText = String(hours).padStart(2, '0');
  document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
  document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Confetti and Success State triggers
function triggerAcceptance() {
  // Trigger canvas confetti
  const duration = 3 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#00f0ff', '#ccff00', '#ffffff']
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#00f0ff', '#ccff00', '#ffffff']
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());

  // Open Success modal overlay
  const overlay = document.getElementById('successOverlay');
  overlay.classList.add('active');
}

function closeOverlay() {
  const overlay = document.getElementById('successOverlay');
  overlay.classList.remove('active');
}
