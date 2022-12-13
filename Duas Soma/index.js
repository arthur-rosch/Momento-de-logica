function numero(arrayNumero, alvo) {
  for (let a = 0; a < arrayNumero.length; a++) {
    for (let b = 0; b < arrayNumero.length; b++) {
      if (arrayNumero[a] + arrayNumero[b] === alvo) {
        return `${arrayNumero[a]}(index ${a}) + ${arrayNumero[b]}(index ${b}) = ${alvo}`;
      }
    }
  }
}
numero([1, 2, 3, 4, 5], 3);
