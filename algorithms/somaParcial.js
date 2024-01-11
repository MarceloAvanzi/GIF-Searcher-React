function somaParcial(a) {
    return function(b) {
        return a + b;
    };
}

// Exemplo de uso
const resultado = somaParcial(5)(3);
console.log(resultado); // Saída: 8
