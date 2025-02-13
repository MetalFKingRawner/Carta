const player = document.getElementById("player");
const gameContainer = document.querySelector(".game-container");
const scoreElement = document.getElementById("score");

let score = 0;

// Mover al jugador con el mouse
document.addEventListener("mousemove", (e) => {
  const x = e.clientX - player.offsetWidth / 2;
  player.style.left = `${x}px`;
});

// Crear corazones que caen
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = `${Math.random() * window.innerWidth}px`;
  gameContainer.appendChild(heart);

  // Eliminar el corazón cuando sale de la pantalla
  setTimeout(() => {
    heart.remove();
  }, 5000);

  // Verificar colisión con el jugador
  const checkCollision = setInterval(() => {
    const heartRect = heart.getBoundingClientRect();
    const playerRect = player.getBoundingClientRect();

    if (
      heartRect.left < playerRect.right &&
      heartRect.right > playerRect.left &&
      heartRect.bottom > playerRect.top &&
      heartRect.top < playerRect.bottom
    ) {
      score++;
      scoreElement.textContent = score;
      heart.remove();
      clearInterval(checkCollision);
    }
  }, 10);
}

// Generar corazones cada segundo
setInterval(createHeart, 1000);