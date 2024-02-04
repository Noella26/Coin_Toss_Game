let headsCount = 0;
let tailsCount = 0;

function tossCoin() {
  const randomNum = Math.random();
  const result = randomNum < 0.5 ? 'Heads' : 'Tails';

  document.getElementById('coin').src = result.toLowerCase() + '.jpg';
  document.getElementById('result').innerText = `Result: ${result}`;

  if (result === 'Heads') {
    headsCount++;
  } else {
    tailsCount++;
  }

  updateScore();
}

function resetScores() {
  headsCount = 0;
  tailsCount = 0;
  updateScore();
}

function updateScore() {
  document.getElementById('heads').innerText = headsCount;
  document.getElementById('tails').innerText = tailsCount;
}
