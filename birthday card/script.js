// Start music on first interaction
document.addEventListener('click', function() {
    const music = document.getElementById('bgMusic');
    music.volume = 0.2;
    music.play().catch(e => console.log("Auto-play prevented"));
}, { once: true });

// Virtual hug function
function sendHug() {
    document.getElementById('message-content').innerHTML = `
        <span class="text-6xl block mb-4">🤗</span>
        <h3 class="text-2xl font-bold mb-2">Sending You the Biggest Hug!</h3>
        <p>Wish I could be there to hold you tight. I love you so much!</p>
    `;
    showMessage();
    createConfetti();
}

// Heart message function
function showHeartMessage() {
    document.getElementById('message-content').innerHTML = `
        <span class="text-6xl block mb-4">💗</span>
        <h3 class="text-2xl font-bold mb-2">My Heart Is Always With You</h3>
        <p>No matter the distance, you're always in my heart.</p>
    `;
    showMessage();
}

// Flower growth function
function growFlower() {
    const container = document.getElementById('flower-container');
    container.innerHTML = `
        <div class="flex flex-col items-center">
            <div class="h-24 w-24 bg-green-500 rounded-full animate-bounce opacity-0" style="animation-delay: 0.3s; animation-fill-mode: forwards;"></div>
            <div class="h-32 w-32 bg-pink-400 rounded-full animate-bounce opacity-0" style="animation-delay: 1s; animation-fill-mode: forwards; margin-top: -60px;"></div>
            <div class="text-4xl mt-4 animate-bounce opacity-0" style="animation-delay: 1.8s; animation-fill-mode: forwards;">🌼</div>
            <p class="mt-2 text-pink-700 animate-fade-in opacity-0" style="animation-delay: 2.5s; animation-fill-mode: forwards;">
                Just like this flower, my love for you grows every day
            </p>
        </div>
    `;
}

// Countdown timer (set to next meeting date)
function updateCountdown() {
    // Set your next meeting date here (YYYY, MM-1, DD)
    const nextDate = new Date(2024, 7, 15); // Example: August 15, 2024
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

// Message display functions
function showMessage() {
    document.getElementById('message-overlay').classList.remove('hidden');
}

function closeMessage() {
    document.getElementById('message-overlay').classList.add('hidden');
}

// Confetti effect
function createConfetti() {
    const colors = ['#ff6b6b', '#f06595', '#cc5de8', '#845ef7', '#5c7cfa'];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = -10 + 'px';
        confetti.style.width = Math.random() * 12 + 5 + 'px';
        confetti.style.height = Math.random() * 12 + 5 + 'px';
        confetti.style.borderRadius = '50%';
        
        document.body.appendChild(confetti);
        
        const animationDuration = Math.random() * 3 + 2;
        
        confetti.animate([
            { top: '-10px', opacity: 0, transform: 'rotate(0deg)' },
            { top: '20%', opacity: 1 },
            { top: '100vh', opacity: 0, transform: 'rotate(360deg)' }
        ], {
            duration: animationDuration * 1000,
            delay: Math.random() * 2000
        });
        
        setTimeout(() => {
            confetti.remove();
        }, animationDuration * 1000);
    }
}