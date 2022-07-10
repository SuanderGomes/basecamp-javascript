function comparaNumero(num1, num2){
    if(!num1 || !num2) return console.log("Insira números válidos");
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return primeiraFrase + segundaFrase;

}

function criaPrimeiraFrase(num1, num2){
    let saoIguais = '';
    if(num1 != num2){
        saoIguais = 'não';
    }
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}

function criaSegundaFrase(num1, num2){
    const soma = num1 + num2;
    
    let resultado10 = 'menor';
    let resultado20 = 'menor';
    
    const comprara10 = soma > 10;
    const comprara20 = soma > 20;

    if(comprara10){
        resultado10 = 'maior';
    }
    if(comprara20){
        resultado20 = 'maior'
    }
    
    return ` Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`;
}
// var n1 = console.log(prompt("Digite o primeiro número: "));
// var n2 = console.log(prompt("Digite o segundo número: "));
console.log(comparaNumero(20,20));