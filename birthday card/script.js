// Music autoplay on first interaction
document.addEventListener('click', function () {
  const music = document.getElementById('bgMusic');
  music.volume = 0.2;
  music.play().catch(() => {});
}, { once: true });

// Typing effect for love letter
const letterContent = `My Dearest Cutie,

On your birthday, I want you to know that even when we're apart, you're always in my thoughts and in my heart. Every moment with you is precious to me, and I cherish all our memories together.

Your smile brightens my darkest days, your laughter is my favorite melody, and your love is my greatest treasure. Today, I hope you feel all the love I have for you, even if I can't be there in person.

You're the most amazing woman I know — beautiful inside and out. I'm so grateful to have you in my life.

Forever yours,
Your Kanna`;

// Unlock love letter if name matches
function checkName() {
  const input = document.getElementById("secretName").value.trim().toLowerCase();
  const allowedNames = ["cutie", "love", "baby", "darling"]; // Add more options

  if (allowedNames.includes(input)) {
    const letterBox = document.getElementById("love-letter");
    letterBox.style.display = "block";
    typeLetter(letterContent, "typed-letter");
  } else {
    alert("Oops! Try typing your special nickname 🥰");
  }
}

// Typing animation logic
function typeLetter(text, targetId) {
  const target = document.getElementById(targetId);
  let index = 0;
  target.innerHTML = "";
  const interval = setInterval(() => {
    target.innerHTML += text.charAt(index);
    index++;
    if (index >= text.length) clearInterval(interval);
  }, 50);
}

// Hug message
function sendHug() {
  document.getElementById('message-content').innerHTML = `
    <span class="text-6xl block mb-4">🤗</span>
    <h3 class="text-2xl font-bold mb-2">Sending You the Biggest Hug!</h3>
    <p>Wish I could be there to hold you tight. I love you so much!</p>`;
  showMessage();
  createConfetti();
}

// Show and close message modal
function showMessage() {
  document.getElementById("message-overlay").classList.remove("hidden");
}
function closeMessage() {
  document.getElementById("message-overlay").classList.add("hidden");
}

// Countdown timer
function updateCountdown() {
  const nextDate = new Date(2025, 7, 13); // August 13, 2025
  const now = new Date();
  const diff = nextDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("countdown-days").textContent = days;
  document.getElementById("countdown-hours").textContent = hours;
  document.getElementById("countdown-mins").textContent = mins;
}
setInterval(updateCountdown, 60000);
updateCountdown();

// Confetti effect
function createConfetti() {
  const colors = ['#ff6b6b', '#f06595', '#cc5de8', '#845ef7', '#5c7cfa'];
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.width = Math.random() * 12 + 5 + "px";
    confetti.style.height = Math.random() * 12 + 5 + "px";
    confetti.style.borderRadius = "50%";

    document.body.appendChild(confetti);

    const duration = Math.random() * 3 + 2;
    confetti.animate([
      { top: '-10px', opacity: 0, transform: 'rotate(0deg)' },
      { top: '20%', opacity: 1 },
      { top: '100vh', opacity: 0, transform: 'rotate(360deg)' }
    ], {
      duration: duration * 1000,
      delay: Math.random() * 2000
    });

    setTimeout(() => {
      confetti.remove();
    }, duration * 1000);
  }
}
