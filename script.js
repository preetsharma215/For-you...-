let current = 'intro';

function nextScreen(id) {
  document.getElementById(current).classList.remove('active');
  document.getElementById(id).classList.add('active');
  current = id;
}

// Valentine Prank Logic (like Susshiii)
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const message = document.getElementById('message');
const gif = document.getElementById('gif');
const surprise = document.getElementById('surprise');
const heartsContainer = document.getElementById('hearts-container');

let noCount = 0;
const noMessages = [
  "Arre please na 🥺",
  "Are you sure? Think again!",
  "No mat bol, dil toot jayega 😢",
  "Pretty please? 🥹",
  "Last chance... say yes! ❤️",
  "I will cry if no 😭",
  "You know you want to... 😉",
  "One yes can make my day!",
  "Please please please?",
  "Ok fine... but really? 😔"
];

noBtn.addEventListener('click', () => {
  noCount++;
  if (noCount < noMessages.length) {
    message.textContent = noMessages[noCount];
    gif.src = "https://media.giphy.com/media/3o7TKSjRrfIPjeiVy8/giphy.gif"; // sad GIF
  }
  yesBtn.style.transform = `scale(${1 + noCount * 0.3})`; // Grow Yes
  yesBtn.style.margin = `${20 + noCount * 10}px`; // Space adjust
});

yesBtn.addEventListener('click', () => {
  message.style.display = 'none';
  gif.style.display = 'none';
  noBtn.style.display = 'none';
  yesBtn.style.display = 'none';
  surprise.style.display = 'block';

  // Lots of hearts falling
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = ['❤️','💖','💕','🌹'][Math.floor(Math.random()*4)];
    heart.style.left = Math.random()*100 + 'vw';
    heart.style.animationDuration = (Math.random()*4 + 4) + 's';
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }, 200);
});

// Optional: Start with intro active
document.getElementById('intro').classList.add('active');
