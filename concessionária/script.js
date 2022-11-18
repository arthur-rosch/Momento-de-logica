let arrayCar = [],
  arrayYear = [],
  arrayPrice = [],
  media = 0,
  maior = 0,
  menor = 0,
  indexMaior = 0,
  indexMenor = 0;

for (let index = 0; index < 3; index++) {
  arrayCar[index] = prompt("Nome do carro:");
  arrayYear[index] = prompt("Ano do carro:");
  arrayPrice[index] = parseInt(prompt("Valor do carro:"));
}

for (let a = 0; a < arrayPrice.length; a++) {
  for (let b = 0; b + 1 < arrayPrice.length; b++) {
    if (arrayPrice[a] > arrayPrice[b]) {
      maior = arrayPrice[a];
      indexMaior = a;
    }
    if (arrayPrice[a] < arrayPrice[b]) {
      menor = arrayPrice[a];
      indexMenor = a;
    }
  }
  media = +arrayPrice[a];
}

media = media / arrayPrice.length;

console.log(`Maior: ${arrayCar[indexMaior]} ${arrayYear[indexMaior]} ${arrayPrice[indexMaior]}
\nMenor:${arrayCar[indexMenor]} ${arrayYear[indexMenor]} ${arrayPrice[indexMenor]} \nMedia: ${media}`);
