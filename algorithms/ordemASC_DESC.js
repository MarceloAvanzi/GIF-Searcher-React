const arrayParaOrdenar = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const arrayCrescente = [...arrayParaOrdenar].sort((a, b) => a - b);

console.log("Ordenado em ordem crescente:", arrayCrescente);


// 

function ordenarCrescente(array) {
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Trocar elementos se estiverem fora de ordem
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

const arrayParaOrdenar2 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const arrayCrescente2 = ordenarCrescente([...arrayParaOrdenar]);

console.log("Ordenado em ordem crescente:", arrayCrescente);


// -----------------------------------------------------------------------

const arrayParaOrdenar3 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const arrayDecrescente3 = [...arrayParaOrdenar].sort((a, b) => b - a);

console.log("Ordenado em ordem decrescente:", arrayDecrescente);


// 


function ordenarDecrescente(array) {
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] < array[j + 1]) {
                // Trocar elementos se estiverem fora de ordem
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

const arrayParaOrdenar4 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const arrayDecrescente4 = ordenarDecrescente([...arrayParaOrdenar]);

console.log("Ordenado em ordem decrescente:", arrayDecrescente);
