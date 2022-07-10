function substituiPares(array) {
    if(!array || !array.length) return "Não é um array válido"

    for (let i = 0; i < array.length; i++) {
        if(array[i] === 0) {
            console.log("Você já é 0...");
        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }
    return array;
}
let arr = [0, 5, 8, 6, 9, 7, 4];
console.log(substituiPares(arr));