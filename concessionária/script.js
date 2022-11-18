let loop = true,
  arrayCar = ["santana", "civic", "Ferrari"],
  arrayYear = [2022, 2000, 2010],
  arrayPrice = [1000, 2000, 10000],
  media = 0,
  maior = 0,
  menor = 0;

for (let a = 1; a < arrayPrice.length; a++) {
  for (let b = 0; b < arrayPrice.length; b++) {
    if (arrayPrice[a] > arrayPrice[b]) {
      maior = arrayPrice[a];
    }
    if (arrayPrice[a] < arrayPrice[b]) {
      menor = arrayPrice[a];
    }
  }
  media = +arrayPrice[a];
}

media = media / arrayPrice.length;

console.log(`Maior: ${maior}\nMenor: ${menor} \nMedia: ${media}`);
