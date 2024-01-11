function comprimentoSubstringSemRepeticao(s) {
    let comprimentoMaximo = 0;
    let inicio = 0;
    const conjuntoCaracteres = new Set();

    for (let fim = 0; fim < s.length; fim++) {
        while (conjuntoCaracteres.has(s[fim])) {
            // Se o caractere já existe na substring, remove o início da janela
            conjuntoCaracteres.delete(s[inicio]);
            inicio++;
        }

        // Adiciona o caractere atual ao conjunto
        conjuntoCaracteres.add(s[fim]);

        // Atualiza o comprimento máximo
        comprimentoMaximo = Math.max(comprimentoMaximo, fim - inicio + 1);
    }

    return comprimentoMaximo;
}

// Exemplo de uso
const stringPrincipal = "abcabcbb";
const resultado = comprimentoSubstringSemRepeticao(stringPrincipal);
console.log(resultado);  // Saída: 3
