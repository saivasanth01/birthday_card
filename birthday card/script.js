// Start music on first click
document.addEventListener('click', function() {
  const music = document.getElementById('bgMusic');
  music.volume = 0.2;
  music.play().catch(e => console.log("Autoplay prevented"));
}, { once: true });

// Countdown timer
function updateCountdown() {
  const nextDate = new Date(2025, 7, 13); // August 13, 2025
  const now = new Date();
  const diff = nextDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById('countdown-days').textContent = days;
  document.getElementById('countdown-hours').textContent = hours;
  document.getElementById('countdown-mins').textContent = mins;
}
setInterval(updateCountdown, 60000);
updateCountdown();

// Message overlays
function showMessage() {
  document.getElementById('message-overlay').classList.remove('hidden');
}
function closeMessage() {
  document.getElementById('message-overlay').classList.add('hidden');
}

// Virtual Hug
function sendHug() {
  document.getElementById('message-content').innerHTML = `
    <span class="text-5xl block mb-4">🤗</span>
    <h3 class="text-xl font-bold mb-2">Sending You the Biggest Hug!</h3>
    <p>Wish I could be there to hold you tight. I love you so much!</p>
  `;
  showMessage();
  createConfetti();
}

// Unlock love letter
function checkName() {
  const input = document.getElementById("secretName").value.trim().toLowerCase();
  if (input === "cutie") {
    document.getElementById("love-letter").style.display = "block";
    typeLetter();
  } else {
    alert("Oops! That's not the secret name 😢");
  }
}

// Typing letter
const letterText = `
My Dearest Cutie,

On your birthday, I want you to know that even when we're apart, you're always in my thoughts and in my heart. Every moment with you is precious to me, and I cherish all our memories together.

Your smile brightens my darkest days, your laughter is my favorite melody, and your love is my greatest treasure.

Forever yours,
Your Kanna 💖
`;

function typeLetter() {
  const target = document.getElementById("typed-letter");
  target.innerHTML = "";
  let index = 0;
  const interval = setInterval(() => {
    if (index < letterText.length) {
      target.innerHTML += letterText.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 40);
}

// Confetti
function createConfetti() {
  const colors = ['#ff6b6b', '#f06595', '#cc5de8', '#845ef7', '#5c7cfa'];
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10vh';
    confetti.style.width = Math.random() * 12 + 5 + 'px';
    confetti.style.height = Math.random() * 12 + 5 + 'px';
    confetti.style.borderRadius = '50%';

    document.body.appendChild(confetti);

    const duration = Math.random() * 3 + 2;
    confetti.animate([
      { top: '-10vh', opacity: 1, transform: 'rotate(0deg)' },
      { top: '100vh', opacity: 0, transform: 'rotate(360deg)' }
    ], {
      duration: duration * 1000,
      delay: Math.random() * 1000
    });

    setTimeout(() => confetti.remove(), duration * 1000);
  }
}
