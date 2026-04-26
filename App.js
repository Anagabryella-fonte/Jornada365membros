const homeScreen = document.getElementById("home-screen");
const devotionalScreen = document.getElementById("devotional-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");

const dayNumber = document.getElementById("day-number");
const title = document.getElementById("title");
const verse = document.getElementById("verse");
const reflection = document.getElementById("reflection");
const prayer = document.getElementById("prayer");
const progressBar = document.getElementById("progress-bar");

// Recupera progresso salvo ou começa do dia 1
let currentDay = localStorage.getItem("currentDay")
  ? parseInt(localStorage.getItem("currentDay"))
  : 1;

// Mostrar devocional atual
function loadDevotional(day) {
  const devotional = devocionais.find(item => item.dia === day);

  if (!devotional) return;

  dayNumber.textContent = `Dia ${devotional.dia}`;
  title.textContent = devotional.titulo;
  verse.textContent = devotional.versiculo;
  reflection.textContent = devotional.reflexao;
  prayer.textContent = devotional.oracao;

  // Atualiza barra de progresso
  const progress = (day / devocionais.length) * 100;
  progressBar.style.width = `${progress}%`;

  // Salva progresso
  localStorage.setItem("currentDay", day);
}

// Começar jornada
startBtn.addEventListener("click", () => {
  homeScreen.classList.remove("active");
  devotionalScreen.classList.add("active");
  loadDevotional(currentDay);
});

// Próximo dia
nextBtn.addEventListener("click", () => {
  if (currentDay < devocionais.length) {
    currentDay++;
    loadDevotional(currentDay);
  } else {
    alert("Parabéns! Você completou sua Jornada 365 Dias com Deus.");
  }
});

// Caso a pessoa já tenha começado antes
window.addEventListener("load", () => {
  if (localStorage.getItem("currentDay")) {
    homeScreen.classList.remove("active");
    devotionalScreen.classList.add("active");
    loadDevotional(currentDay);
  }
});
