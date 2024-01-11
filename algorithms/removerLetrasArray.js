const array = [1, 2, 'a', 'b', 2, 3];

// Filtra os elementos que não são letras
const arraySemLetras = array.filter(item => typeof item !== 'string');

// Modifica o array original mantendo apenas os elementos que não são letras
array.length = 0; // Limpa o array original
array.push(...arraySemLetras); // Adiciona os elementos filtrados de volta ao array original

console.log(array); // Saída: [1, 2, 2, 3]
