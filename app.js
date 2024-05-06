const calculate = () => {
  const numbersInput = document.getElementById('numbers').value.trim();

  if (numbersInput === '') {
    alert('Por favor, ingrese al menos un número.');
    return;
  }

  const numbersArray = numbersInput.split(',').map(Number);

  // Media
  const sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
  const mean = sum / numbersArray.length;

  // Moda
  const modeMap = {};
  let maxCount = 0;
  let modes = [];

  numbersArray.forEach(number => {
    modeMap[number] = (modeMap[number] || 0) + 1;
    if (modeMap[number] > maxCount) {
      maxCount = modeMap[number];
      modes = [number];
    } else if (modeMap[number] === maxCount) {
      modes.push(number);
    }
  });

  // Mediana
  const sortedNumbers = numbersArray.slice().sort((a, b) => a - b);
  const middle = Math.floor(sortedNumbers.length / 2);
  const median = sortedNumbers.length % 2 === 0 ? (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2 : sortedNumbers[middle];

  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
    <p>Media: ${mean.toFixed(2)}</p>
    <p>Moda: ${modes.join(', ')}</p>
    <p>Mediana: ${median}</p>
  `;
};
