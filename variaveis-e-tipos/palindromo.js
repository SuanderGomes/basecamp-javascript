//solução 1
function verificaPalindromo(string) {
    if(!string) return "String inexistente";

    return string.split("").reverse().join("") === string;
}

//console.log(verificaPalindromo("ovo"));

//solução 2
function verificaPalindromo2(string) {
    for( let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length -1 -i]){
            return "Não é um Palíndromo";
        }
    }
    return "É um palíndromo";
}


console.log(verificaPalindromo2("ovo"));