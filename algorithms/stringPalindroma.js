function ehPalindromo(str) {
    // Remover espaços em branco do início e do final e tornar a string minúscula
    const strFormatada = str.toLowerCase().trim();

    // Comparar a string formatada com a string revertida
    return strFormatada === strFormatada.split('').reverse().join('');
}

// Exemplos de uso
console.log(ehPalindromo("radar"));  // Saída: true
console.log(ehPalindromo("Amo a roma"));  // Saída: true
console.log(ehPalindromo("javascript"));  // Saída: false
